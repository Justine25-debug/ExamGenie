import React, { useState } from "react";
import { Header1 } from "@/components/ui/navbar";
import { Footer2 } from "@/components/footer2";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import curriculumData from "./curriculum.json"; // JSON file

const years = ["First Year", "Second Year", "Third Year", "Fourth Year"];
const semesters = ["First Semester", "Second Semester", "Summer Semester"];

const CurriculumPage = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSem, setSelectedSem] = useState("");

  const filteredData = curriculumData.filter(
    (item) =>
      (!selectedYear || item.year === selectedYear) &&
      (!selectedSem || item.semester === selectedSem)
  );

  return (
    <Link to="/tos">
    <Button>Go to TOS</Button>
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Header and Subheader */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">HOME</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground mt-1">BSIT Curriculum</h2>
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border rounded px-4 py-2"
            defaultValue=""
          >
            <option value="">Select Year Level</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectedSem(e.target.value)}
            className="border rounded px-4 py-2"
            defaultValue=""
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>

        {/* Curriculum Table */}
        <div className="overflow-auto border rounded">
          <table className="table-auto w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Subject Code</th>
                <th className="p-2">Prerequisite</th>
                <th className="p-2">Equiv. Subject Code</th>
                <th className="p-2">Description</th>
                <th className="p-2">Units</th>
                <th className="p-2">Year</th>
                <th className="p-2">Semester</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((subj, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{subj.code}</td>
                  <td className="p-2">{subj.prerequisite}</td>
                  <td className="p-2">{subj.equiv}</td>
                  <td className="p-2">{subj.description}</td>
                  <td className="p-2">{subj.units}</td>
                  <td className="p-2">{subj.year}</td>
                  <td className="p-2">{subj.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Policies and Procedures */}
        <div className="mt-8 text-sm leading-relaxed text-justify">
          <h3 className="text-xl font-semibold mb-2">Policies and Procedures</h3>
          <p><strong>Grading Policy:</strong> Class Standing (70%) + Exams (30%). Pass mark is 75%.</p>
          <p><strong>Participation Policy:</strong> Students must join all activities, quizzes, and FLTAs.</p>
          <p><strong>Assessment Policy:</strong> Assessments include activities, exams, and projects. Midterm and Finals are mandatory.</p>
          <p><strong>Integrity Policy:</strong> Academic honesty is expected at all times.</p>
          <p><strong>Attendance Policy:</strong> Exams must be taken on schedule or with valid excuse.</p>
          <p><strong>Course Requirements:</strong> All assignments and projects contribute to the final grade.</p>
          <p><strong>Examination Procedure:</strong> Orientation, actual exams on Week 9 and 17, followed by grading and consultation.</p>
          <p><strong>Delivery Mode:</strong> May be face-to-face or flexible (FLTAs).</p>
        </div>
      </main>
      <Footer2 />
    </div> 
    </Link>
  );
};

export default CurriculumPage;
