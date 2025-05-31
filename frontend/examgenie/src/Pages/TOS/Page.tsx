import React, { useState } from "react";
import { Header1 } from "@/components/ui/navbar";
import { Footer2 } from "@/components/footer2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import curriculumData from "@/Pages/Curriculum/curriculum.json";

const levels = ["First Year", "Second Year", "Third Year", "Fourth Year"];
const terms = ["First Semester", "Second Semester", "Summer Semester"];

const TOSPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = curriculumData.filter(
    (item) =>
      item.year === selectedLevel && item.semester === selectedTerm
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
        "File Structures"
      ],
      "COMP 007": [
        "Course Orientation",
        "Introduction to Operating Systems",
        "Computer System Structure",
        "Process Management",
        "Memory Management",
        "Virtual Management",
        "Deadlocks",
        "File Management"
      ],
      "INTE 201": [
        "Introduction to the Course",
        "Flowcharting",
        "COBOL proper",
        "The Four Divisions of COBOL program",
        "Procedure Division",
        "Arithmetic Statements",
        "Table Handling",
        "Interactive Programming"
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
        "Build a Small Layer"
      ]
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
        "Project Development"
      ],
      "COMP 010": [
        "Database Concepts",
        "Requirement Analysis",
        "Relational Database Modeling",
        "Logical Database Design",
        "Enhanced ER Diagram",
        "DDL and DML",
        "Aggregate Functions",
        "Complex Retrieval of Data"
      ],
      "COMP 009": [
        "OOP in Java",
        "GUI Design",
        "Streams",
        "Database"
      ],
      "INTE 202": [
        "Python Basics",
        "Data Structures",
        "OOP in Python",
        "GUI",
        "Data Analytics",
        "DB Connectivity"
      ]
    }
  };

  const topicKey = `${selectedLevel}_${selectedTerm}`;
  const learningOutcomes = majorTopics[topicKey]?.[selectedSubject] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Table of Specifications</h1>

        {/* Dropdown filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select onChange={(e) => setSelectedLevel(e.target.value)} className="border px-4 py-2 rounded">
            <option value="">Select Level</option>
            {levels.map((level) => <option key={level} value={level}>{level}</option>)}
          </select>

          <select onChange={(e) => setSelectedTerm(e.target.value)} className="border px-4 py-2 rounded">
            <option value="">Select Term/Period</option>
            {terms.map((term) => <option key={term} value={term}>{term}</option>)}
          </select>

          <select onChange={(e) => setSelectedSubject(e.target.value)} className="border px-4 py-2 rounded">
            <option value="">Select Subject</option>
            {subjects.map((subj) => (
              <option key={subj.code} value={subj.code}>
                {subj.code} - {subj.description}
              </option>
            ))}
          </select>
        </div>

        {/* Table of Specifications */}
        <div className="overflow-auto border rounded">
          <table className="table-auto w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Week</th>
                <th className="p-2">Competency / Learning Outcome</th>
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
                  <td className="p-2"><Input type="number" min="0" max="100" required /></td>
                  <td className="p-2"><Input type="number" min="0" max="100" required /></td>
                  <td className="p-2"><Input type="number" min="0" max="100" required /></td>
                  <td className="p-2"><Input type="number" /></td>
                  <td className="p-2"><Input type="number" /></td>
                  <td className="p-2"><Input type="number" /></td>
                  <td className="p-2"><Input type="number" /></td>
                  <td className="p-2"><Input type="number" /></td>
                  <td className="p-2"><Input type="number" /></td>
                  <td className="p-2"><Input type="text" /></td>
                  <td className="p-2">Multiple Choice</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer2 />
    </div>
  );
};

export default TOSPage;
