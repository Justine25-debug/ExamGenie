// src/data/questionBank.ts
export const questionBank = {
  "Data Structures and Algorithms": {
    "Overview of Data Structures": {
      "Multiple Choice": [
        {
          question: "Which of the following best defines a data structure?",
          choices: [
            "A programming language syntax",
            "A way to organize and store data for efficient access and modification",
            "A type of computer hardware",
            "A database management system"
          ],
          answer: "B",
          difficulty: "Easy",
          bloomLevel: "Remember"
        },
        {
          question: "What is the key difference between a primitive data type and an abstract data type (ADT)?",
          choices: [
            "Primitive types are language-independent while ADTs are language-specific",
            "ADTs hide implementation details while primitive types don't",
            "Primitive types are more complex than ADTs",
            "ADTs can only be implemented using object-oriented programming"
          ],
          answer: "B",
          difficulty: "Medium",
          bloomLevel: "Understand"
        }
      ],
      "Multiple Choice Analyzation": [
        {
          question: "For a banking system that processes millions of transactions daily, which data structure consideration is most critical?",
          choices: [
            "Color scheme of the user interface",
            "Time and space complexity of operations",
            "Programming language popularity",
            "Variable naming conventions"
          ],
          answer: "B",
          difficulty: "Hard",
          bloomLevel: "Analyze"
        }
      ]
    },
    "Algorithm Analysis": {
      "Multiple Choice": [
        {
          question: "What does time complexity measure in algorithm analysis?",
          choices: [
            "The exact runtime in seconds",
            "The growth rate of runtime relative to input size",
            "The memory usage in bytes",
            "The number of lines of code"
          ],
          answer: "B",
          difficulty: "Easy",
          bloomLevel: "Remember"
        }
      ],
      "Multiple Choice Computation": [
        {
          question: "Given an algorithm with O(n²) complexity, if the input size doubles, how does the runtime change?",
          choices: [
            "Remains the same",
            "Doubles",
            "Quadruples",
            "Increases by a constant factor"
          ],
          answer: "C",
          difficulty: "Medium",
          bloomLevel: "Apply"
        }
      ]
    }
  },
  "Operating Systems": {
    "Process Management": {
      "Multiple Choice": [
        {
          question: "What is the main purpose of a process scheduler in an operating system?",
          choices: [
            "Manage file storage",
            "Allocate CPU time to processes",
            "Handle user authentication",
            "Manage network connections"
          ],
          answer: "B",
          difficulty: "Easy",
          bloomLevel: "Remember"
        }
      ]
    }
  }
} as const;

// Utility types for type safety
type Question = {
  question: string;
  choices: string[];
  answer: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  bloomLevel?: "Remember" | "Understand" | "Apply" | "Analyze" | "Evaluate" | "Create";
};

type TestType = "Multiple Choice" | "Multiple Choice Analyzation" | 
                "Multiple Choice Computation" | "Multiple Choice Fill in the Blanks";

type TopicQuestions = Record<TestType, Question[]>;
type SubjectQuestions = Record<string, TopicQuestions>;
type questionBank = Record<string, SubjectQuestions>;