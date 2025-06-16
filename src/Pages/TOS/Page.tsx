import React, { useState, useEffect } from "react";
import { Header1 } from "@/components/ui/navbar";
import { Footer2 } from "@/components/footer2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import curriculumData from "@/Pages/Curriculum/curriculum.json";
import { questionBank } from "@/data/questionBank";

interface CurriculumSubject {
  code: string;
  description: string;
  year: string;
  semester: string;
}

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

interface QuestionBank {
  [subject: string]: {
    [topic: string]: {
      [testType: string]: Question[];
    };
  };
}

const schoolYears = ["2024-2025", "2025-2026", "2026-2027", "2027-2028"];
const levels = ["First Year", "Second Year", "Third Year", "Fourth Year"];
const terms = ["First Semester", "Second Semester", "Summer Semester"];
const examTypes = ["Midterm", "Finals"];

interface TOSForm {
  selectedSchoolYear: string;
  selectedLevel: string;
  selectedTerm: string;
  selectedExamType: string;
  selectedSubject: string;
  numberOfItems: string;
  rowsData: Array<Record<string, number | string>>;
  saved: boolean;
}

const TOSPage = () => {
  const [tosList, setTosList] = useState<TOSForm[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [fileUploadIndex, setFileUploadIndex] = useState<number | null>(null);
  const [exams, setExams] = useState<Record<number, Question[]>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const createNewTOS = (): TOSForm => ({
    selectedSchoolYear: "",
    selectedLevel: "",
    selectedTerm: "",
    selectedExamType: "",
    selectedSubject: "",
    numberOfItems: "",
    rowsData: [],
    saved: false,
  });

  const [tosForms, setTosForms] = useState<TOSForm[]>([createNewTOS()]);

  useEffect(() => {
    const updatedForms = [...tosForms];
    let needsUpdate = false;

    tosForms.forEach((form, formIndex) => {
      if (!form.selectedLevel || !form.selectedTerm || !form.selectedExamType || !form.selectedSubject) return;
      
      const topicKey = `${form.selectedLevel}_${form.selectedTerm}`;
      const learningOutcomes = majorTopics[topicKey]?.[form.selectedExamType]?.[form.selectedSubject] || [];
      
      learningOutcomes.forEach((topic, rowIndex) => {
        const week = topic.split(":")[0];
        const topicContent = topic.split(":")[1]?.trim() || "";
        
        if (!updatedForms[formIndex].rowsData[rowIndex]) {
          updatedForms[formIndex].rowsData[rowIndex] = {};
          needsUpdate = true;
        }
        
        if (updatedForms[formIndex].rowsData[rowIndex]["week"] !== week || 
            updatedForms[formIndex].rowsData[rowIndex]["topic"] !== topicContent) {
          updatedForms[formIndex].rowsData[rowIndex]["week"] = week;
          updatedForms[formIndex].rowsData[rowIndex]["topic"] = topicContent;
          needsUpdate = true;
        }
      });
    });

    if (needsUpdate) {
      setTosForms(updatedForms);
    }
  }, [tosForms]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const normalizeString = (str: string) => str.trim().replace(/\s+/g, " ");

  const generateExamFromTOS = (form: TOSForm): Question[] => {
    const subjectMap: Record<string, string> = {
      "COMP 006": "Data Structures and Algorithms",
      "COMP 007": "Operating Systems",
      "INTE 201": "COBOL Programming",
      "COMP 008": "Computer Networking",
      "COMP 013": "Human Computer Interaction",
      "COMP 010": "Database Management",
      "COMP 009": "Java Programming",
      "INTE 202": "Python Programming"
    };

    const subjectName = subjectMap[form.selectedSubject];
    if (!subjectName || !questionBank[subjectName]) {
      console.warn(`Subject ${form.selectedSubject} not found in question bank`);
      return [];
    }

    const questions: Question[] = [];

    form.rowsData.forEach((row) => {
      const topic = normalizeString(row["topic"] as string);
      const itemAllocation = Number(row["itemPlacement"]) || 0;
      const testType = String(row["testType"]);

      if (
        itemAllocation > 0 &&
        questionBank[subjectName]?.[topic]?.[testType]?.length
      ) {
        const topicQuestions = questionBank[subjectName][topic][testType];
        const shuffled = shuffleArray(topicQuestions);
        const selected = shuffled.slice(0, itemAllocation);
        selected.forEach((q) => questions.push(q));
      } else if (itemAllocation > 0) {
        console.warn(`No questions found for ${subjectName} - ${topic} - ${testType}`);
      }
    });

    if (questions.length < Number(form.numberOfItems)) {
      console.warn(`Generated only ${questions.length} questions out of requested ${form.numberOfItems}`);
    }

    return questions;
  };

  const handleInputChange = (
    formIndex: number,
    rowIndex: number,
    column: string,
    value: string
  ) => {
    const numberFields = ["time", "remember", "understand", "apply", "analyze", "evaluate", "create", "itemPlacement"];
    
    const updatedForms = [...tosForms];
    const currentForm = { ...updatedForms[formIndex] };
    const updatedRows = [...currentForm.rowsData];
    
    if (!updatedRows[rowIndex]) {
      updatedRows[rowIndex] = {};
    }
    
    updatedRows[rowIndex][column] = numberFields.includes(column) 
      ? Number(value) || 0 
      : value;
    
    currentForm.rowsData = updatedRows;
    updatedForms[formIndex] = currentForm;
    setTosForms(updatedForms);
  };

  const getColumnTotal = (rows: any[], column: string) => {
    return rows.reduce((sum, row) => {
      const value = row[column];
      return sum + (isNaN(Number(value)) ? 0 : Number(value));
    }, 0);
  };

  const calculatePercentTime = (formIndex: number, rowIndex: number) => {
    const form = tosForms[formIndex];
    const timeSpent = Number(form.rowsData[rowIndex]?.time) || 0;
    const totalTime = getColumnTotal(form.rowsData, "time") || 1;
    return (timeSpent / totalTime * 100).toFixed(2);
  };

  const calculateItemAllocation = (formIndex: number, rowIndex: number) => {
    const form = tosForms[formIndex];
    const timeSpent = Number(form.rowsData[rowIndex]?.time) || 0;
    const totalTime = getColumnTotal(form.rowsData, "time") || 1;
    const numberOfItems = Number(form.numberOfItems) || 0;
    return Math.round(timeSpent / totalTime * numberOfItems);
  };

  const handleSave = (formIndex: number) => {
    const form = tosForms[formIndex];
    if (
      !form.selectedSchoolYear ||
      !form.selectedLevel ||
      !form.selectedTerm ||
      !form.selectedExamType ||
      !form.selectedSubject ||
      !form.numberOfItems ||
      form.rowsData.length === 0
    ) {
      alert("Please complete the form before saving.");
      return;
    }

    const newTosList = [...tosList, form];
    setTosList(newTosList);

    const updatedForms = [...tosForms];
    updatedForms[formIndex].saved = true;
    setTosForms(updatedForms);
  };

  const handleDelete = (formIndex: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this TOS?");
    if (confirmDelete) {
      const formToDelete = tosForms[formIndex];

      const updatedForms = [...tosForms];
      updatedForms.splice(formIndex, 1);
      setTosForms(updatedForms);

      const updatedList = [...tosList];
      const listIndex = updatedList.findIndex(
        item => item.selectedSubject === formToDelete.selectedSubject &&
               item.selectedLevel === formToDelete.selectedLevel
      );
      if (listIndex !== -1) {
        updatedList.splice(listIndex, 1);
        setTosList(updatedList);
      }

      const updatedExams = {...exams};
      delete updatedExams[formIndex];
      setExams(updatedExams);
    }
  };

  const handleAddNewTOS = () => {
    setTosForms([...tosForms, createNewTOS()]);
  };

  const handleCreateExam = (formIndex: number) => {
    setIsGenerating(true);
    setTimeout(() => {
      const form = tosForms[formIndex];
      const questions = generateExamFromTOS(form);
      if (questions.length === 0) {
        alert("No questions found based on current TOS. Please check the data.");
        setIsGenerating(false);
        return;
      }

      setExams((prev) => ({ ...prev, [formIndex]: questions }));
      setIsGenerating(false);
      setFileUploadIndex(formIndex);
      setShowModal(true);
    }, 500);
  };

  const majorTopics: Record<string, Record<string, Record<string, string[]>>> = {
    "Second Year_First Semester": {
      "Midterm": {
        "COMP 006": [
          "Week 1: Overview of Data Structures",
          "Week 2: Algorithm Analysis",
          "Week 3: Arrays and Pointers",
          "Week 4: Linked Lists ADTs",
          "Week 5: Stacks ADTs",
          "Week 6-8: Tree ADTs"
        ],
        "COMP 007": [
          "Week 1: Course Orientation",
          "Week 2: Introduction to Operating Systems",
          "Week 3: Computer System Structure",
          "Week 4-7: Process Management"
        ],
        "INTE 201": [
          "Week 1: Introduction to the Course",
          "Week 2-4: Flowcharting",
          "Week 5-6: COBOL proper",
          "Week 7-8: The Four Divisions of COBOL program",
          "Week 9: Procedure Division"
        ],
        "COMP 008": [
          "Week 1-2: Explore the Networking",
          "Week 3-4: Configure a Network OS",
          "Week 4-5: Network Protocols and Communications",
          "Week 6-7: Network Access",
          "Week 7-8: Ethernet"
        ]
      },
      "Finals": {
        "COMP 006": [
          "Week 9-11: AVL and B Tree",
          "Week 12-13: Graphs",
          "Week 14-16: File Structures"
        ],
        "COMP 007": [
          "Week 10-11: Memory Management",
          "Week 12-13: Virtual Management",
          "Week 14: Deadlocks",
          "Week 15: File Management"
        ],
        "INTE 201": [
          "Week 11-13: Arithmetic Statements",
          "Week 14-15: Table Handling",
          "Week 16-17: Interactive Programming"
        ],
        "COMP 008": [
          "Week 10-11: Network Layer",
          "Week 13-14: Subnetting IP Networks",
          "Week 14-15: Transport Layer",
          "Week 15-16: Application Layer",
          "Week 16-17: Build a Small Layer"
        ]
      }
    },
    "Second Year_Second Semester": {
      "Midterm": {
        "COMP 013": [
          "Week 1: Introduction to the Course",
          "Week 2-3: Introduction to HCI",
          "Week 4-5: Human and Errors",
          "Week 6-7: Designs of Everyday Things and Emotions",
          "Week 8: Computer"
        ],
        "COMP 010": [
          "Week 1-2: Database Concepts",
          "Week 3: Requirement Analysis",
          "Week 4: Relational Database Modeling",
          "Week 7-8: Logical Database Design"
        ],
        "COMP 009": [
          "Week 1: Course Introduction",
          "Week 2-3: Introduction to java",
          "Week 4-7: Object-oriented Programming in Java",
          "Week 8-10: Fundamentals of GUI design"
        ],
        "INTE 202": [
          "Week 1: Introduction to the Course",
          "Week 2-6: Introduction to Python",
          "Week 7-11: Data Structures Functions and Modules OOP Concepts File and exception handling"
        ]
      },
      "Finals": {
        "COMP 013": [
          "Week 10-12: Interaction",
          "Week 13: Ergonomics",
          "Week 14: Design",
          "Week 15-16: Usability Testing",
          "Week 17: Project Development"
        ],
        "COMP 010": [
          "Week 10: Enhanced Entity-Relationship Diagram",
          "Week 11: Creation of Database Using Data Definition Language",
          "Week 12-13: Data Manipulation Language",
          "Week 14-15: Aggregate Functions",
          "Week 16: Complex Retrieval of Data"
        ],
        "COMP 009": [
          "Week 12-14: Input and Output Streams",
          "Week 15-17: Database"
        ],
        "INTE 202": [
          "Week 12-14: Fundamentals of GUI design",
          "Week 15-16: Fundamentals of Data Analytics Algorithms of Data Pre-processing and Data Analytics using Python Libraries",
          "Week 17: Database connectivity"
        ]
      }
    }
  };

  const testTypeOptions = [
    "Multiple Choice",
    "Multiple Choice Analyzation",
    "Multiple Choice Fill in the Blanks",
    "Multiple Choice Computation"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <h1 className="text-3xl font-bold mb-6">Table of Specifications</h1>

        {tosForms.map((form, formIndex) => {
          const topicKey = `${form.selectedLevel}_${form.selectedTerm}`;
          const learningOutcomes = majorTopics[topicKey]?.[form.selectedExamType]?.[form.selectedSubject] || [];

          const subjects = (curriculumData as CurriculumSubject[]).filter(
            (item) => item.year === form.selectedLevel && item.semester === form.selectedTerm
          );

          return (
            <div key={`tos-form-${formIndex}`} className="mb-12 border p-4 rounded shadow-sm">
              {!form.saved ? (
                <>
                  <div className="mb-4 flex flex-wrap gap-4 items-center">
                    <select
                      value={form.selectedSchoolYear}
                      onChange={(e) => {
                        const updated = [...tosForms];
                        updated[formIndex].selectedSchoolYear = e.target.value;
                        setTosForms(updated);
                      }}
                      className="border px-4 py-2 rounded max-w-xs"
                    >
                      <option value="">Select School Year</option>
                      {schoolYears.map((year, idx) => (
                        <option key={`year-${idx}`} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    <Input
                      type="number"
                      min={1}
                      placeholder="Number of Items"
                      value={form.numberOfItems}
                      onChange={(e) => {
                        const updated = [...tosForms];
                        updated[formIndex].numberOfItems = e.target.value;
                        setTosForms(updated);
                      }}
                      className="w-40"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <select
                      value={form.selectedLevel}
                      onChange={(e) => {
                        const updated = [...tosForms];
                        updated[formIndex].selectedLevel = e.target.value;
                        setTosForms(updated);
                      }}
                      className="border px-4 py-2 rounded"
                    >
                      <option value="">Select Year Level</option>
                      {levels.map((level, idx) => (
                        <option key={`level-${idx}`} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>

                    <select
                      value={form.selectedTerm}
                      onChange={(e) => {
                        const updated = [...tosForms];
                        updated[formIndex].selectedTerm = e.target.value;
                        setTosForms(updated);
                      }}
                      className="border px-4 py-2 rounded"
                    >
                      <option value="">Select Term</option>
                      {terms.map((term, idx) => (
                        <option key={`term-${idx}`} value={term}>
                          {term}
                        </option>
                      ))}
                    </select>

                    <select
                      value={form.selectedExamType}
                      onChange={(e) => {
                        const updated = [...tosForms];
                        updated[formIndex].selectedExamType = e.target.value;
                        setTosForms(updated);
                      }}
                      className="border px-4 py-2 rounded"
                    >
                      <option value="">Select Exam Type</option>
                      {examTypes.map((type, idx) => (
                        <option key={`type-${idx}`} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>

                    <select
                      value={form.selectedSubject}
                      onChange={(e) => {
                        const updated = [...tosForms];
                        updated[formIndex].selectedSubject = e.target.value;
                        setTosForms(updated);
                      }}
                      className="border px-4 py-2 rounded"
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((subj, idx) => (
                        <option key={`subj-${idx}`} value={subj.code}>
                          {subj.code} - {subj.description}
                        </option>
                      ))}
                    </select>
                  </div>

                  {learningOutcomes.length > 0 && (
                    <>
                      <div className="overflow-auto border rounded mb-4">
                        <table className="table-auto w-full text-sm min-w-[1200px]">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-2 w-[80px]">Week</th>
                              <th className="p-2 min-w-[200px]">Learning Outcome</th>
                              <th className="p-2 whitespace-nowrap">Time Spent</th>
                              <th className="p-2 whitespace-nowrap">% Time</th>
                              <th className="p-2 whitespace-nowrap">Item Allocation</th>
                              <th className="p-2 whitespace-nowrap">Remember</th>
                              <th className="p-2 whitespace-nowrap">Understand</th>
                              <th className="p-2 whitespace-nowrap">Apply</th>
                              <th className="p-2 whitespace-nowrap">Analyze</th>
                              <th className="p-2 whitespace-nowrap">Evaluate</th>
                              <th className="p-2 whitespace-nowrap">Create</th>
                              <th className="p-2 whitespace-nowrap">Item Placement</th>
                              <th className="p-2 min-w-[200px] whitespace-nowrap">Test Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            {learningOutcomes.map((topic, rowIndex) => {
                              const week = topic.split(":")[0];
                              const topicContent = topic.split(":")[1]?.trim() || "";
                              
                              return (
                                <tr key={`row-${formIndex}-${rowIndex}`} className="border-t">
                                  <td className="p-2">{week}</td>
                                  <td className="p-2">{topicContent}</td>
                                  <td className="p-2">
                                    <Input
                                      type="number"
                                      min={0}
                                      value={tosForms[formIndex].rowsData[rowIndex]?.["time"] ?? ""}
                                      onChange={(e) =>
                                        handleInputChange(formIndex, rowIndex, "time", e.target.value)
                                      }
                                      className="w-[80px]"
                                    />
                                  </td>
                                  <td className="p-2 text-center">
                                    {calculatePercentTime(formIndex, rowIndex)}%
                                  </td>
                                  <td className="p-2 text-center">
                                    {calculateItemAllocation(formIndex, rowIndex)}
                                  </td>
                                  {[
                                    "remember",
                                    "understand",
                                    "apply",
                                    "analyze",
                                    "evaluate",
                                    "create",
                                  ].map((col) => (
                                    <td key={`${formIndex}-${rowIndex}-${col}`} className="p-2">
                                      <Input
                                        type="number"
                                        min={0}
                                        value={tosForms[formIndex].rowsData[rowIndex]?.[col] ?? ""}
                                        onChange={(e) =>
                                          handleInputChange(formIndex, rowIndex, col, e.target.value)
                                        }
                                        className="w-[60px]"
                                      />
                                    </td>
                                  ))}
                                  <td className="p-2">
                                    <Input
                                      type="number"
                                      min={0}
                                      value={tosForms[formIndex].rowsData[rowIndex]?.itemPlacement ?? ""}
                                      onChange={(e) =>
                                        handleInputChange(formIndex, rowIndex, "itemPlacement", e.target.value)
                                      }
                                      className="w-[80px]"
                                    />
                                  </td>
                                  <td className="p-2 min-w-[200px]">
                                    <select
                                      value={tosForms[formIndex].rowsData[rowIndex]?.testType || "Multiple Choice"}
                                      onChange={(e) =>
                                        handleInputChange(formIndex, rowIndex, "testType", e.target.value)
                                      }
                                      className="border px-2 py-1 rounded w-full"
                                    >
                                      {testTypeOptions.map((option, idx) => (
                                        <option key={`option-${formIndex}-${rowIndex}-${idx}`} value={option}>
                                          {option}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                </tr>
                              );
                            })}

                            <tr className="font-bold bg-gray-100 border-t">
                              <td className="p-2" colSpan={2}>TOTAL</td>
                              <td className="p-2 text-center">
                                {getColumnTotal(tosForms[formIndex].rowsData, "time")}
                              </td>
                              <td className="p-2 text-center">100%</td>
                              <td className="p-2 text-center">
                                {form.numberOfItems || 0}
                              </td>
                              {[
                                "remember",
                                "understand",
                                "apply",
                                "analyze",
                                "evaluate",
                                "create",
                              ].map((col) => (
                                <td key={`total-${formIndex}-${col}`} className="p-2 text-center">
                                  {getColumnTotal(tosForms[formIndex].rowsData, col)}
                                </td>
                              ))}
                              <td className="p-2 text-center">
                                {getColumnTotal(tosForms[formIndex].rowsData, "itemPlacement")}
                              </td>
                              <td className="p-2">—</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          className="bg-green-600 text-white hover:bg-green-700"
                          onClick={() => handleSave(formIndex)}
                        >
                          Save TOS
                        </Button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-2">Saved TOS #{formIndex + 1}</h2>
                  <p><strong>School Year:</strong> {form.selectedSchoolYear}</p>
                  <p><strong>Level:</strong> {form.selectedLevel}</p>
                  <p><strong>Term:</strong> {form.selectedTerm}</p>
                  <p><strong>Exam Type:</strong> {form.selectedExamType}</p>
                  <p><strong>Subject:</strong> {form.selectedSubject}</p>
                  <p><strong>Number of Items:</strong> {form.numberOfItems}</p>

                  <div className="overflow-auto border rounded mt-4">
                    <table className="table-auto w-full text-sm min-w-[1200px]">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-2 w-[80px]">Week</th>
                          <th className="p-2 min-w-[200px]">Learning Outcome</th>
                          <th className="p-2 whitespace-nowrap">Time Spent</th>
                          <th className="p-2 whitespace-nowrap">% Time</th>
                          <th className="p-2 whitespace-nowrap">Item Allocation</th>
                          <th className="p-2 whitespace-nowrap">Remember</th>
                          <th className="p-2 whitespace-nowrap">Understand</th>
                          <th className="p-2 whitespace-nowrap">Apply</th>
                          <th className="p-2 whitespace-nowrap">Analyze</th>
                          <th className="p-2 whitespace-nowrap">Evaluate</th>
                          <th className="p-2 whitespace-nowrap">Create</th>
                          <th className="p-2 whitespace-nowrap">Item Placement</th>
                          <th className="p-2 min-w-[200px] whitespace-nowrap">Test Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {learningOutcomes.map((topic, index) => {
                          const week = topic.split(":")[0];
                          const topicContent = topic.split(":")[1]?.trim() || "";
                          return (
                            <tr key={`saved-row-${formIndex}-${index}`} className="border-t">
                              <td className="p-2">{week}</td>
                              <td className="p-2">{topicContent}</td>
                              <td className="p-2 text-center">
                                {form.rowsData[index]?.time ?? 0}
                              </td>
                              <td className="p-2 text-center">
                                {calculatePercentTime(formIndex, index)}%
                              </td>
                              <td className="p-2 text-center">
                                {calculateItemAllocation(formIndex, index)}
                              </td>
                              {[
                                "remember",
                                "understand",
                                "apply",
                                "analyze",
                                "evaluate",
                                "create",
                              ].map((col) => (
                                <td key={`saved-${formIndex}-${index}-${col}`} className="p-2 text-center">
                                  {form.rowsData[index]?.[col] ?? 0}
                                </td>
                              ))}
                              <td className="p-2 text-center">
                                {form.rowsData[index]?.itemPlacement ?? 0}
                              </td>
                              <td className="p-2 text-center min-w-[200px]">
                                {form.rowsData[index]?.testType || "Multiple Choice"}
                              </td>
                            </tr>
                          );
                        })}
                        <tr className="font-bold bg-gray-100 border-t">
                          <td className="p-2" colSpan={2}>TOTAL</td>
                          <td className="p-2 text-center">
                            {getColumnTotal(form.rowsData, "time")}
                          </td>
                          <td className="p-2 text-center">100%</td>
                          <td className="p-2 text-center">
                            {form.numberOfItems || 0}
                          </td>
                          {[
                            "remember",
                            "understand",
                            "apply",
                            "analyze",
                            "evaluate",
                            "create",
                          ].map((col) => (
                            <td key={`saved-total-${formIndex}-${col}`} className="p-2 text-center">
                              {getColumnTotal(form.rowsData, col)}
                            </td>
                          ))}
                          <td className="p-2 text-center">
                            {getColumnTotal(form.rowsData, "itemPlacement")}
                          </td>
                          <td className="p-2">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex gap-4 mt-4">
                    {exams[formIndex] ? (
                      <Button
                        className="bg-purple-600 text-white hover:bg-purple-700"
                        onClick={() => {
                          setFileUploadIndex(formIndex);
                          setShowModal(true);
                        }}
                      >
                        View Exam
                      </Button>
                    ) : (
                      <Button
                        className="bg-blue-600 text-white hover:bg-blue-700"
                        onClick={() => handleCreateExam(formIndex)}
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          "Create Exam"
                        )}
                      </Button>
                    )}
                    <Button
                      className="bg-green-600 text-white hover:bg-green-700"
                      onClick={() => window.print()}
                    >
                      Print
                    </Button>
                    <Button
                      className="bg-red-600 text-white hover:bg-red-700"
                      onClick={() => handleDelete(formIndex)}
                    >
                      Delete
                    </Button>
                  </div>
                </>
              )}
            </div>
          );
        })}

        <div className="mt-6">
          <Button variant="secondary" onClick={handleAddNewTOS}>
            Add New TOS
          </Button>
        </div>

        {fileUploadIndex !== null && exams[fileUploadIndex] && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generated Exam</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {exams[fileUploadIndex].map((question, idx) => (
                  <div 
                    key={`question-${fileUploadIndex}-${question.id}`} 
                    className="p-4 bg-background rounded border"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-primary">{idx + 1}.</span>
                      <div className="flex-1 ml-2">
                        <p className="text-foreground">{question.question}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="ml-2"
                        onClick={() => {
                          navigator.clipboard.writeText(question.question);
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>
      <Footer2 />
    </div>
  );
};

export default TOSPage;