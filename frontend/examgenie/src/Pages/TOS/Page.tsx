import React, { useState } from "react";
import { Header1 } from "@/components/ui/navbar";
import { Footer2 } from "@/components/footer2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//import { Dialog } from "@/components/ui/dialog";
import curriculumData from "@/Pages/Curriculum/curriculum.json";

const schoolYears = ["2024-2025", "2025-2026", "2026-2027", "2027-2028"];
const levels = ["First Year", "Second Year", "Third Year", "Fourth Year"];
const terms = ["First Semester", "Second Semester", "Summer Semester"];

const TOSPage = () => {
  const [tosList, setTosList] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
 // const [fileUploadIndex, setFileUploadIndex] = useState<number | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const createNewTOS = () => ({
    selectedSchoolYear: "",
    selectedLevel: "",
    selectedTerm: "",
    selectedSubject: "",
    numberOfItems: "",
    rowsData: [],
    saved: false,
  });

  const [tosForms, setTosForms] = useState<any[]>([createNewTOS()]);

  const handleInputChange = (formIndex: number, rowIndex: number, column: string, value: string) => {
    const updatedForms = [...tosForms];
    const updatedRows = [...(updatedForms[formIndex].rowsData || [])];
    if (!updatedRows[rowIndex]) updatedRows[rowIndex] = {};
    updatedRows[rowIndex][column] = column === "itemPlacement" ? value : Number(value) || 0;
    updatedForms[formIndex].rowsData = updatedRows;
    setTosForms(updatedForms);
  };

  const getColumnTotal = (rows: any[], column: string) => {
    return rows.reduce((sum, row) => {
      const value = row[column];
      return sum + (isNaN(Number(value)) ? 0 : Number(value));
    }, 0);
  };

  const handleSave = (formIndex: number) => {
    const form = tosForms[formIndex];
    if (
      !form.selectedSchoolYear ||
      !form.selectedLevel ||
      !form.selectedTerm ||
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
    const updatedForms = [...tosForms];
    updatedForms.splice(formIndex, 1);
    setTosForms(updatedForms);

    // Also remove from tosList (optional if you still use tosList for anything)
    const updatedList = [...tosList];
    updatedList.splice(formIndex, 1);
    setTosList(updatedList);
  }
};

  const handleAddNewTOS = () => {
    setTosForms([...tosForms, createNewTOS()]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleCreateExam = () => {
    if (!uploadedFile) return alert("Please upload a file first.");
    alert("Exam generated using uploaded file and current TOS.");
    setShowModal(false);
  };

  const majorTopics: Record<string, Record<string, string[]>> = {
    "Second Year_First Semester": {
      "COMP 006": [
        "Overview of Data Structures",
        "Algorithm Analysis",
        "Arrays and Pointers",
        "Linked Lists ADTs",
        "Stacks ADTs",
        "Tree ADTs",
        "AVL and B Tree",
        "Graphs",
        "File Structures",
      ],
      "COMP 007": [
        "Course Orientation",
        "Introduction to Operating Systems",
        "Computer System Structure",
        "Process Management",
        "Memory Management",
        "Virtual Management",
        "Deadlocks",
        "File Management",
      ],
      "INTE 201": [
        "Introduction to the Course",
        "Flowcharting",
        "COBOL proper",
        "The Four Divisions of COBOL program",
        "Procedure Division",
        "Arithmetic Statements",
        "Table Handling",
        "Interactive Programming",
      ],
      "COMP 008": [
        "Explore the Networking",
        "Configure a Network OS",
        "Network Protocols and Communications",
        "Network Access",
        "Ethernet",
        "Network Layer",
        "Subnetting IP Networks",
        "Transport Layer",
        "Application Layer",
        "Build a Small Layer",
      ],
    },
    "Second Year_Second Semester": {
      "COMP 013": [
        "Introduction to HCI",
        "Human and Errors",
        "Designs of Everyday Things and Emotions",
        "Computer",
        "Interaction",
        "Ergonomics",
        "Design",
        "Usability Testing",
        "Project Development",
      ],
      "COMP 010": [
        "Database Concepts",
        "Requirement Analysis",
        "Relational Database Modeling",
        "Logical Database Design",
        "Enhanced ER Diagram",
        "DDL and DML",
        "Aggregate Functions",
        "Complex Retrieval of Data",
      ],
      "COMP 009": ["OOP in Java", "GUI Design", "Streams", "Database"],
      "INTE 202": [
        "Python Basics",
        "Data Structures",
        "OOP in Python",
        "GUI",
        "Data Analytics",
        "DB Connectivity",
      ],
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <h1 className="text-3xl font-bold mb-6">Table of Specifications</h1>

        {tosForms.map((form, formIndex) => {
          const topicKey = `${form.selectedLevel}_${form.selectedTerm}`;
          const learningOutcomes = majorTopics[topicKey]?.[form.selectedSubject] || [];

          const subjects = curriculumData.filter(
            (item) => item.year === form.selectedLevel && item.semester === form.selectedTerm
          );

          return (
            <div key={formIndex} className="mb-12 border p-4 rounded shadow-sm">
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
                      {schoolYears.map((year) => (
                        <option key={year} value={year}>
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
                      {levels.map((level) => (
                        <option key={level} value={level}>
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
                      {terms.map((term) => (
                        <option key={term} value={term}>
                          {term}
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
                      {subjects.map((subj) => (
                        <option key={subj.code} value={subj.code}>
                          {subj.code} - {subj.description}
                        </option>
                      ))}
                    </select>
                  </div>

                  {learningOutcomes.length > 0 && (
                    <>
                      <div className="overflow-auto border rounded mb-4">
                        <table className="table-auto w-full text-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-2">Week</th>
                              <th className="p-2">Learning Outcome</th>
                              {[
                                "% Time",
                                "% Questions",
                                "% Allocation",
                                "Remember",
                                "Understand",
                                "Apply",
                                "Analyze",
                                "Evaluate",
                                "Create",
                                "Item Placement",
                                "Test Type",
                              ].map((label) => (
                                <th key={label} className="p-2">{label}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {learningOutcomes.map((topic, rowIndex) => (
                              <tr key={rowIndex} className="border-t">
                                <td className="p-2">{rowIndex + 1}</td>
                                <td className="p-2">{topic}</td>
                                {[
                                  "time",
                                  "questions",
                                  "allocation",
                                  "remember",
                                  "understand",
                                  "apply",
                                  "analyze",
                                  "evaluate",
                                  "create",
                                ].map((col) => (
                                  <td key={col} className="p-2">
                                    <Input
                                      type="number"
                                      min={0}
                                      value={form.rowsData[rowIndex]?.[col] ?? ""}
                                      onChange={(e) =>
                                        handleInputChange(formIndex, rowIndex, col, e.target.value)
                                      }
                                    />
                                  </td>
                                ))}
                                <td className="p-2">
                                  <Input
                                    type="number"
                                    min={0}
                                    value={form.rowsData[rowIndex]?.itemPlacement ?? ""}
                                    onChange={(e) =>
                                      handleInputChange(formIndex, rowIndex, "itemPlacement", e.target.value)
                                    }
                                  />
                                </td>
                                <td className="p-2">Multiple Choice</td>
                              </tr>
                            ))}

                            <tr className="font-bold bg-gray-100 border-t">
                              <td className="p-2" colSpan={2}>TOTAL</td>
                              {[
                                "time",
                                "questions",
                                "allocation",
                                "remember",
                                "understand",
                                "apply",
                                "analyze",
                                "evaluate",
                                "create",
                              ].map((col) => (
                                <td key={col} className="p-2">
                                  {getColumnTotal(form.rowsData, col)}
                                </td>
                              ))}
                              <td className="p-2">{getColumnTotal(form.rowsData, "itemPlacement")}</td>
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
                  <p><strong>Subject:</strong> {form.selectedSubject}</p>
                  <p><strong>Number of Items:</strong> {form.numberOfItems}</p>

                  <div className="overflow-auto border rounded mt-4">
                    <table className="table-auto w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-2">Week</th>
                          <th className="p-2">Learning Outcome</th>
                          {[
                            "% Time",
                            "% Questions",
                            "% Allocation",
                            "Remember",
                            "Understand",
                            "Apply",
                            "Analyze",
                            "Evaluate",
                            "Create",
                            "Item Placement",
                            "Test Type",
                          ].map((label) => (
                            <th key={label} className="p-2">{label}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {learningOutcomes.map((topic, index) => (
                          <tr key={index} className="border-t">
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{topic}</td>
                            {[
                              "time",
                              "questions",
                              "allocation",
                              "remember",
                              "understand",
                              "apply",
                              "analyze",
                              "evaluate",
                              "create",
                            ].map((col) => (
                              <td key={col} className="p-2 text-center">
                                {form.rowsData[index]?.[col] ?? 0}
                              </td>
                            ))}
                            <td className="p-2 text-center">{form.rowsData[index]?.itemPlacement ?? 0}</td>
                            <td className="p-2 text-center">Multiple Choice</td>
                          </tr>
                        ))}
                        <tr className="font-bold bg-gray-100 border-t">
                          <td className="p-2" colSpan={2}>TOTAL</td>
                          {[
                            "time",
                            "questions",
                            "allocation",
                            "remember",
                            "understand",
                            "apply",
                            "analyze",
                            "evaluate",
                            "create",
                          ].map((col) => (
                            <td key={col} className="p-2 text-center">
                              {getColumnTotal(form.rowsData, col)}
                            </td>
                          ))}
                          <td className="p-2 text-center">{getColumnTotal(form.rowsData, "itemPlacement")}</td>
                          <td className="p-2">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700"
                      onClick={() => {
                        setFileUploadIndex(formIndex);
                        setShowModal(true);
                      }}
                    >
                      Create Exam
                    </Button>
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

        {showModal && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-12">
              <h2 className="text-lg font-semibold mb-4">Upload File to Generate Exam</h2>
              <Input type="file" onChange={handleFileUpload} />
              <Button className="mt-4 bg-blue-600 text-white" onClick={handleCreateExam}>
                Generate Exam
              </Button>
            </div>
          </Dialog>
        )}
      </main>
      <Footer2 />
    </div>
  );
};

export default TOSPage;
