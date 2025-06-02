import React, { useState } from "react";
import { Header1 } from "@/components/ui/navbar";
import { Footer2 } from "@/components/footer2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import curriculumData from "@/Pages/Curriculum/curriculum.json";

const schoolYears = ["2024-2025", "2025-2026", "2026-2027", "2027-2028"];
const levels = ["First Year", "Second Year", "Third Year", "Fourth Year"];
const terms = ["First Semester", "Second Semester", "Summer Semester"];

const TOSPage = () => {
  const [selectedSchoolYear, setSelectedSchoolYear] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [numberOfItems, setNumberOfItems] = useState("");
  const [rowsData, setRowsData] = useState([]);
  const [showSaveScreen, setShowSaveScreen] = useState(false);

  const subjects = curriculumData.filter(
    (item) => item.year === selectedLevel && item.semester === selectedTerm
  );

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

  const topicKey = `${selectedLevel}_${selectedTerm}`;
  const learningOutcomes = majorTopics[topicKey]?.[selectedSubject] || [];

  const handleInputChange = (index: number, column: string, value: string) => {
    const updated = [...rowsData];
    if (!updated[index]) updated[index] = {};
    updated[index][column] = column === "itemPlacement" ? value : Number(value) || 0;
    setRowsData(updated);
  };

  const getColumnTotal = (column: string) => {
    return rowsData.reduce((sum, row) => {
      const value = row[column];
      return sum + (isNaN(Number(value)) ? 0 : Number(value));
    }, 0);
  };

const validateTOSInputs = () => {
  if (!numberOfItems || isNaN(Number(numberOfItems)) || Number(numberOfItems) <= 0) {
    alert("Enter a valid input");
    return false;
  }

  for (let i = 0; i < learningOutcomes.length; i++) {
    const row = rowsData[i] || {};
    const requiredFields = [
      "time",
      "questions",
      "allocation",
      "remember",
      "understand",
      "apply",
      "analyze",
      "evaluate",
      "create",
      "itemPlacement",
    ];

    for (const field of requiredFields) {
      if (
        row[field] === undefined ||
        row[field] === "" ||
        isNaN(Number(row[field])) ||
        Number(row[field]) < 0
      ) {
        alert("Enter a valid input");
        return false;
      }
    }
  }

  return true;
};

  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <h1 className="text-3xl font-bold mb-6">Table of Specifications</h1>

        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <select
            value={selectedSchoolYear}
            onChange={(e) => setSelectedSchoolYear(e.target.value)}
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
            value={numberOfItems}
            onChange={(e) => setNumberOfItems(e.target.value)}
            className="w-40"
          />
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <select
            onChange={(e) => setSelectedLevel(e.target.value)}
            value={selectedLevel}
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
            onChange={(e) => setSelectedTerm(e.target.value)}
            value={selectedTerm}
            className="border px-4 py-2 rounded"
          >
            <option value="">Select Term/Period</option>
            {terms.map((term) => (
              <option key={term} value={term}>
                {term}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectedSubject(e.target.value)}
            value={selectedSubject}
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
          <div className="overflow-auto border rounded">
            <table className="table-auto w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Week</th>
                  <th className="p-2">Learning Outcome</th>
                  <th className="p-2">% Time Spent</th>
                  <th className="p-2">% Questions</th>
                  <th className="p-2">% Allocation</th>
                  <th className="p-2">Remember</th>
                  <th className="p-2">Understand</th>
                  <th className="p-2">Apply</th>
                  <th className="p-2">Analyze</th>
                  <th className="p-2">Evaluate</th>
                  <th className="p-2">Create</th>
                  <th className="p-2">Item Placement</th>
                  <th className="p-2">Test Type</th>
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
                      <td className="p-2" key={col}>
                        <Input
                          type="number"
                          min="0"
                          onChange={(e) =>
                            handleInputChange(index, col, e.target.value)
                          }
                          value={rowsData[index]?.[col] ?? ""}
                        />
                      </td>
                    ))}
                    <td className="p-2">
                      <Input
                        type="number"
                        min="0"
                        onChange={(e) =>
                          handleInputChange(index, "itemPlacement", e.target.value)
                        }
                        value={rowsData[index]?.itemPlacement ?? ""}
                      />
                    </td>
                    <td className="p-2">Multiple Choice</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-100 border-t">
                  <td className="p-2" colSpan={2}>
                    TOTAL
                  </td>
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
                    <td className="p-2" key={col}>
                      {getColumnTotal(col)}
                    </td>
                  ))}
                  <td className="p-2">{getColumnTotal("itemPlacement")}</td>
                  <td className="p-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {learningOutcomes.length > 0 && (
          <div className="flex justify-end mt-4">
            <Button
              onClick={() => {
                if (validateTOSInputs()) {
                  setShowSaveScreen(true);
                }
              }}
              className="bg-green-600 text-white hover:bg-green-700"
              disabled={!selectedSchoolYear}
            >
              Save TOS
            </Button>
          </div>
        )}


        {showSaveScreen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-auto"
            onClick={() => setShowSaveScreen(false)}
          >
            <div
              className="bg-white rounded p-6 max-w-full w-[90vw] max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">Table of Specifications</h2>

<div className="flex flex-wrap gap-4 text-sm mb-2">
  <div><strong>School Year:</strong> {selectedSchoolYear}</div>
  <div>
    <strong>Subject:</strong>{" "}
    {selectedSubject
      ? `${selectedSubject} - ${subjects.find((s) => s.code === selectedSubject)?.description || ""}`
      : ""}
  </div>
</div>

<div className="flex flex-wrap gap-4 text-sm mb-4">
  <div><strong>Year Level:</strong> {selectedLevel}</div>
  <div><strong>Term:</strong> {selectedTerm}</div>
  <div><strong>No. of Items:</strong> {numberOfItems}</div>
</div>


              {/* Render TOS Table read-only here */}
              <table className="table-auto w-full text-sm border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">Week</th>
                    <th className="border border-gray-300 p-2">Learning Outcome</th>
                    <th className="border border-gray-300 p-2">% Time Spent</th>
                    <th className="border border-gray-300 p-2">% Questions</th>
                    <th className="border border-gray-300 p-2">% Allocation</th>
                    <th className="border border-gray-300 p-2">Remember</th>
                    <th className="border border-gray-300 p-2">Understand</th>
                    <th className="border border-gray-300 p-2">Apply</th>
                    <th className="border border-gray-300 p-2">Analyze</th>
                    <th className="border border-gray-300 p-2">Evaluate</th>
                    <th className="border border-gray-300 p-2">Create</th>
                    <th className="border border-gray-300 p-2">Item Placement</th>
                    <th className="border border-gray-300 p-2">Test Type</th>
                  </tr>
                </thead>
                <tbody>
                  {learningOutcomes.map((topic, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                      <td className="border border-gray-300 p-2">{topic}</td>
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
                        <td
                          key={col}
                          className="border border-gray-300 p-2 text-center"
                        >
                          {rowsData[index]?.[col] ?? 0}
                        </td>
                      ))}
                      <td className="border border-gray-300 p-2 text-center">
                        {rowsData[index]?.itemPlacement ?? 0}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        Multiple Choice
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-gray-200 border border-gray-300">
                    <td className="border border-gray-300 p-2 text-center" colSpan={2}>
                      TOTAL
                    </td>
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
                      <td
                        key={col}
                        className="border border-gray-300 p-2 text-center"
                      >
                        {getColumnTotal(col)}
                      </td>
                    ))}
                    <td className="border border-gray-300 p-2 text-center">
                      {getColumnTotal("itemPlacement")}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">—</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end gap-4 mt-4">
                <Button
                  onClick={() => window.print()}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Print
                </Button>
                <Button
                  onClick={() => setShowSaveScreen(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-black"
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer2 />
    </div>
  );
};

export default TOSPage;
