export const questionBank = {
  "Data Structures and Algorithms": {
    "Week 1: Overview of Data Structures": {
      "Multiple Choice": [
        {
          id: "DSA-W1-MC-001",
          question: "Which of the following is NOT a module objective for the 'Overview of Data Structures' unit?",
          options: [
            "a) Define and differentiate data structures, data type and abstract data type",
            "b) Discuss how one will select a data structure",
            "c) Describe the different data structures",
            "d) Implement a basic sorting algorithm"
          ],
          answer: "d) Implement a basic sorting algorithm"
        },
        {
          id: "DSA-W1-MC-002",
          question: "What is the primary goal of studying data structures and efficient programs?",
          options: [
            "a) Learning programming tricks",
            "b) Good organization of information and good algorithms",
            "c) Maximizing computer memory usage",
            "d) Increasing program running time"
          ],
          answer: "b) Good organization of information and good algorithms"
        },
        {
          id: "DSA-W1-MC-003",
          question: "How is data structure defined in the sources?",
          options: [
            "a) A set of values from which a variable may take its value",
            "b) A way of collecting and organizing data to perform operations effectively",
            "c) A program that runs efficiently within specific time and space constraints",
            "d) A form where data can no longer be divided or have no parts"
          ],
          answer: "b) A way of collecting and organizing data to perform operations effectively"
        },
        {
          id: "DSA-W1-MC-004",
          question: "According to the sources, what does 'efficient' mean in the context of programs?",
          options: [
            "a) A problem is solved with unlimited time and space",
            "b) A problem is solved within the given time and space constraints",
            "c) A problem is solved using the most complex algorithms",
            "d) A problem is solved without consuming any resources"
          ],
          answer: "b) A problem is solved within the given time and space constraints"
        },
        {
          id: "DSA-W1-MC-005",
          question: "What is the cost of a solution equivalent to?",
          options: [
            "a) The time spent coding the solution",
            "b) The number of lines of code",
            "c) The amount of resources consumed",
            "d) The speed of the processor"
          ],
          answer: "c) The amount of resources consumed"
        },
        {
          id: "DSA-W1-MC-006",
          question: "Which of the following is considered a primitive data structure?",
          options: [
            "a) Array",
            "b) Linked List",
            "c) Integer",
            "d) Tree"
          ],
          answer: "c) Integer"
        },
        {
          id: "DSA-W1-MC-007",
          question: "What does an Abstract Data Type (ADT) primarily represent?",
          options: [
            "a) The actual implementation details of a data structure",
            "b) A logical description (abstract) rather than actual implementation",
            "c) A set of data elements without any operations",
            "d) A fixed-size structure for storing data"
          ],
          answer: "b) A logical description (abstract) rather than actual implementation"
        },
        {
          id: "DSA-W1-MC-008",
          question: "Which characteristic describes data items arranged in a linear sequence?",
          options: [
            "a) Non-Linear",
            "b) Homogeneous",
            "c) Linear",
            "d) Dynamic"
          ],
          answer: "c) Linear"
        },
        {
          id: "DSA-W1-MC-009",
          question: "What is a disadvantage of using an ill-suited data structure?",
          options: [
            "a) It makes the code easier to read",
            "b) It allows for localized changes",
            "c) It could result in slow runtimes or unresponsive code",
            "d) It saves computer memory"
          ],
          answer: "c) It could result in slow runtimes or unresponsive code"
        },
        {
          id: "DSA-W1-MC-010",
          question: "What is the definition of a data type in programming?",
          options: [
            "a) A structure programmed to store ordered data",
            "b) A set of data elements and logical relationships",
            "c) A set of values from which a variable, constant, function, or other expression may take its value",
            "d) A collection of items stored at adjoining memory locations"
          ],
          answer: "c) A set of values from which a variable, constant, function, or other expression may take its value"
        }
      ],
      "Multiple Choice Analyzation": [
        {
          id: "DSA-W1-MCA-001",
          question: "A banking system needs to handle cash withdrawal transactions, which require a few seconds. Which aspect of an efficient solution is most critical for this scenario?",
          options: [
            "a) Solving the problem overnight",
            "b) Meeting space constraints only",
            "c) Solving the problem within its time and space constraints",
            "d) Increasing the running time"
          ],
          answer: "c) Solving the problem within its time and space constraints"
        },
        {
          id: "DSA-W1-MCA-002",
          question: "When selecting a data structure, why is it important to quantify the constraints for each operation (e.g., search operations must be very fast)?",
          options: [
            "a) To complicate the problem analysis",
            "b) To ensure all operations are equally slow",
            "c) To choose the data structure that best meets the requirements",
            "d) To limit the number of supported operations"
          ],
          answer: "c) To choose the data structure that best meets the requirements"
        },
        {
          id: "DSA-W1-MCA-003",
          question: "If one data structure permits faster search operations than another, but slower insertion operations, what can be concluded about its overall superiority?",
          options: [
            "a) It is always better than the rest.",
            "b) It is rarely better than another in all situations.",
            "c) It is only better if all operations are of the same importance.",
            "d) It must be discarded if it has any slower operations."
          ],
          answer: "b) It is rarely better than another in all situations."
        },
        {
          id: "DSA-W1-MCA-004",
          question: "An Abstract Data Type (ADT) hides implementation details. How does this benefit a programmer when the implementation changes?",
          options: [
            "a) The programmer must rewrite all programs.",
            "b) The programs need not be changed.",
            "c) The programmer needs to understand all internal calculations.",
            "d) It makes data abstraction impossible."
          ],
          answer: "b) The programs need not be changed."
        },
        {
          id: "DSA-W1-MCA-005",
          question: "Consider a scenario where you need to store data elements that are arranged in a linear sequence. Which classification of data structures would be most appropriate?",
          options: [
            "a) Non-Linear",
            "b) Homogeneous",
            "c) Linear",
            "d) Dynamic"
          ],
          answer: "c) Linear"
        },
        {
          id: "DSA-W1-MCA-006",
          question: "A developer is designing a system where the size of the data collection will frequently change during program execution. Which characteristic of data structures should they prioritize?",
          options: [
            "a) Static",
            "b) Homogeneous",
            "c) Dynamic",
            "d) Linear"
          ],
          answer: "c) Dynamic"
        },
        {
          id: "DSA-W1-MCA-007",
          question: "A system needs to store a collection of items where all elements are of the same type, such as a list of integers. Which characteristic applies to this type of data structure?",
          options: [
            "a) Non-Homogeneous",
            "b) Homogeneous",
            "c) Dynamic",
            "d) Non-Linear"
          ],
          answer: "b) Homogeneous"
        },
        {
          id: "DSA-W1-MCA-008",
          question: "Why is it important to choose the proper data structure for each task?",
          options: [
            "a) To make the code longer and more complex.",
            "b) To ensure the program always runs without errors.",
            "c) To prevent slow runtimes or unresponsive code.",
            "d) To eliminate the need for memory allocation."
          ],
          answer: "c) To prevent slow runtimes or unresponsive code."
        },
        {
          id: "DSA-W1-MCA-009",
          question: "The notion of data structures involves a set of data elements, the way they are logically related, and a set of allowable operations. Which of these aspects relates to how data is manipulated?",
          options: [
            "a) The set of data elements",
            "b) The way data elements are logically related",
            "c) A set of allowable operations on the data elements",
            "d) The programming effort to implement it"
          ],
          answer: "c) A set of allowable operations on the data elements"
        },
        {
          id: "DSA-W1-MCA-010",
          question: "When considering the cost and benefits of a data structure, which aspect refers to the amount of memory consumed?",
          options: [
            "a) Time to perform each operation",
            "b) Programming effort to implement it",
            "c) Space for each data item it stores",
            "d) Faster search operations"
          ],
          answer: "c) Space for each data item it stores"
        }
      ],
      "Multiple Choice Fill in the Blanks": [
        {
          id: "DSA-W1-MCF-001",
          question: "______ is a way of collecting and organizing data in such a way that we can perform operations on these data in an effective and sometimes efficient way.",
          options: [
            "a) Algorithm",
            "b) Data type",
            "c) Data structure",
            "d) Abstract Data Type"
          ],
          answer: "c) Data structure"
        },
        {
          id: "DSA-W1-MCF-002",
          question: "By efficient, we mean a problem has to be solved within the given ______ and ______ constraints.",
          options: [
            "a) memory, disk",
            "b) time, space",
            "c) input, output",
            "d) program, hardware"
          ],
          answer: "b) time, space"
        },
        {
          id: "DSA-W1-MCF-003",
          question: "In order to solve problems efficiently, one can ______ the problem to determine the resource constraints a solution must meet.",
          options: [
            "a) implement",
            "b) ignore",
            "c) analyze",
            "d) define"
          ],
          answer: "c) analyze"
        },
        {
          id: "DSA-W1-MCF-004",
          question: "Each data structure requires ______ for each data item it stores, ______ to perform each operation, and some programming effort to implement it.",
          options: [
            "a) time, space",
            "b) space, time",
            "c) cost, benefits",
            "d) tricks, speed"
          ],
          answer: "b) space, time"
        },
        {
          id: "DSA-W1-MCF-005",
          question: "______ is a set of values from which a variable, constant, function, or other expression may take its value.",
          options: [
            "a) Data structure",
            "b) Abstract Data Type",
            "c) Data type",
            "d) File structure"
          ],
          answer: "c) Data type"
        },
        {
          id: "DSA-W1-MCF-006",
          question: "Integer, Float, Boolean, and Char are all examples of ______ Data Structures.",
          options: [
            "a) Complex",
            "b) Primitive",
            "c) Abstract",
            "d) Dynamic"
          ],
          answer: "b) Primitive"
        },
        {
          id: "DSA-W1-MCF-007",
          question: "A ______ type is a data type that enumerates all possible values of variables.",
          options: [
            "a) Logical",
            "b) Character",
            "c) Enumeration",
            "d) Partial"
          ],
          answer: "c) Enumeration"
        },
        {
          id: "DSA-W1-MCF-008",
          question: "______ Type or Simple Data Structure is a data structure that contains a basic data type or any of the defined data types as its elements.",
          options: [
            "a) Pointer",
            "b) Abstract",
            "c) Primitive",
            "d) Structure"
          ],
          answer: "d) Structure"
        },
        {
          id: "DSA-W1-MCF-009",
          question: "Abstract Data Type is basically a ______ model where a set of data values and its associated operations are precisely specified independent of any particular implementation.",
          options: [
            "a) physical",
            "b) programming",
            "c) mathematical",
            "d) hardware"
          ],
          answer: "c) mathematical"
        },
        {
          id: "DSA-W1-MCF-010",
          question: "In ______ data structures, the data items are not in sequence.",
          options: [
            "a) linear",
            "b) homogeneous",
            "c) static",
            "d) non-linear"
          ],
          answer: "d) non-linear"
        }
      ],
      "Multiple Choice Computation": [
        {
          id: "DSA-W1-MCC-001",
          question: "How many distinct characteristics are explicitly listed in 'Table 2 Classification of Data Structures based on Characteristics'?",
          options: [
            "a) 4",
            "b) 5",
            "c) 6",
            "d) 7"
          ],
          answer: "c) 6"
        },
        {
          id: "DSA-W1-MCC-002",
          question: "How many module objectives are listed for 'Unit 1 – Overview of Data Structures'?",
          options: [
            "a) 3",
            "b) 4",
            "c) 5",
            "d) 6"
          ],
          answer: "b) 4"
        },
        {
          id: "DSA-W1-MCC-003",
          question: "According to the notion of data structures, how many elements are involved?",
          options: [
            "a) One (data elements)",
            "b) Two (data elements and logical relationships)",
            "c) Three (data elements, logical relationships, and allowable operations)",
            "d) Four (data elements, logical relationships, operations, and memory representation)"
          ],
          answer: "c) Three (data elements, logical relationships, and allowable operations)"
        },
        {
          id: "DSA-W1-MCC-004",
          question: "The Basic Data Type or Primitive Data Structures group can be further divided into how many types?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "d) 4"
        },
        {
          id: "DSA-W1-MCC-005",
          question: "How many examples of 'Simple Type' data types are explicitly bulleted in the sources?",
          options: [
            "a) 3",
            "b) 4",
            "c) 5",
            "d) 6"
          ],
          answer: "b) 4"
        },
        {
          id: "DSA-W1-MCC-006",
          question: "How many examples of complex data structures are listed under 'Types of data structures'?",
          options: [
            "a) 5",
            "b) 6",
            "c) 7",
            "d) 8"
          ],
          answer: "b) 6"
        },
        {
          id: "DSA-W1-MCC-007",
          question: "The section 'Data Structures, Data Type and Abstract Data Type' uses how many distinct terms in its heading?",
          options: [
            "a) 2",
            "b) 3",
            "c) 4",
            "d) 5"
          ],
          answer: "b) 3"
        },
        {
          id: "DSA-W1-MCC-008",
          question: "How many general criteria must every algorithm satisfy?",
          options: [
            "a) 3",
            "b) 4",
            "c) 5",
            "d) 6"
          ],
          answer: "c) 5"
        },
        {
          id: "DSA-W1-MCC-009",
          question: "In the example given for banking constraints, how many distinct time constraints are mentioned for different operations?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "c) 3"
        },
        {
          id: "DSA-W1-MCC-010",
          question: "How many specific categories of 'Structure Type or Simple Data Structure' are provided as examples?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "c) 3"
        }
      ]
    },
    
    "Week 2: Algorithm Analysis": {
      "Multiple Choice": [
        {
          id: "DSA-W2-MC-001",
          question: "What is an algorithm defined as?",
          options: [
            "a) The complete code or program",
            "b) A finite set of instructions or logic to accomplish a task",
            "c) A flowchart only",
            "d) An informal high-level description only"
          ],
          answer: "b) A finite set of instructions or logic to accomplish a task"
        },
        {
          id: "DSA-W2-MC-002",
          question: "Which of the following is NOT a criterion that every algorithm must satisfy?",
          options: [
            "a) Input",
            "b) Output",
            "c) Ambiguity",
            "d) Finiteness"
          ],
          answer: "c) Ambiguity"
        },
        {
          id: "DSA-W2-MC-003",
          question: "What does 'Space complexity' refer to?",
          options: [
            "a) The amount of time required by the program to run",
            "b) The amount of memory space required by the algorithm during execution",
            "c) The number of lines of code in the program",
            "d) The speed of the machine execution"
          ],
          answer: "b) The amount of memory space required by the algorithm during execution"
        },
        {
          id: "DSA-W2-MC-004",
          question: "Which of the following components does an algorithm generally require space for?",
          options: [
            "a) Instruction Space",
            "b) Data Space",
            "c) Environment Space",
            "d) All of the above"
          ],
          answer: "d) All of the above"
        },
        {
          id: "DSA-W2-MC-005",
          question: "What is Time Complexity a way to represent?",
          options: [
            "a) The amount of memory consumed",
            "b) The number of errors in the program",
            "c) The amount of time required by the program to run till its completion",
            "d) The logical operations performed"
          ],
          answer: "c) The amount of time required by the program to run till its completion"
        },
        {
          id: "DSA-W2-MC-006",
          question: "Which of the following is NOT a factor affecting the complexity of an instruction related to time complexity?",
          options: [
            "a) Machine execution time",
            "b) Time to execute the instruction",
            "c) The instruction set",
            "d) The aesthetic design of the program"
          ],
          answer: "d) The aesthetic design of the program"
        },
        {
          id: "DSA-W2-MC-007",
          question: "What is the most common metric for calculating time complexity?",
          options: [
            "a) Benchmarking",
            "b) Big O notation",
            "c) Frequency count",
            "d) Resource consumption"
          ],
          answer: "b) Big O notation"
        },
        {
          id: "DSA-W2-MC-008",
          question: "Which case for algorithm analysis helps answer the software life cycle question: 'If it is good enough today, will it be good enough tomorrow?'",
          options: [
            "a) Best Case",
            "b) Average Case",
            "c) Worst Case",
            "d) All cases equally"
          ],
          answer: "c) Worst Case"
        },
        {
          id: "DSA-W2-MC-009",
          question: "What does Big Oh notation (O(expression)) indicate regarding an algorithm's time complexity?",
          options: [
            "a) The minimum time required for all input values",
            "b) The average bound of an algorithm",
            "c) The maximum time required for all input values (worst case)",
            "d) Fewer than the expression iterations"
          ],
          answer: "c) The maximum time required for all input values (worst case)"
        },
        {
          id: "DSA-W2-MC-010",
          question: "When analyzing algorithms, what is the running time of a for loop at most?",
          options: [
            "a) The running time of the statements inside the loop divided by the number of iterations",
            "b) The running time of the statements inside the loop multiplied by the number of iterations",
            "c) A constant value, regardless of iterations",
            "d) The sum of the running times of all consecutive statements"
          ],
          answer: "b) The running time of the statements inside the loop multiplied by the number of iterations"
        }
      ],
      "Multiple Choice Analyzation": [
        {
          id: "DSA-W2-MCA-001",
          question: "The Euclidean algorithm for GCD is demonstrated. Its definiteness criterion is satisfied because 'm' and 'n' are positive integers. How would its definiteness be affected if 'm' and 'n' were any real number?",
          options: [
            "a) Step 1 would still be precisely defined.",
            "b) Step 1 may not satisfy the criterion of definiteness.",
            "c) The algorithm would terminate faster.",
            "d) The output would remain unambiguous."
          ],
          answer: "b) Step 1 may not satisfy the criterion of definiteness."
        },
        {
          id: "DSA-W2-MCA-002",
          question: "If an algorithm's time complexity is described as 'linear,' what can be inferred about its running time when the input size (N) doubles?",
          options: [
            "a) The running time remains constant.",
            "b) The running time increases by N * N.",
            "c) The running time also doubles.",
            "d) The running time decreases."
          ],
          answer: "c) The running time also doubles."
        },
        {
          id: "DSA-W2-MCA-003",
          question: "Why is the 'worst case' considered the only useful case from the standpoint of program design when analyzing algorithms?",
          options: [
            "a) It represents the fastest possible execution.",
            "b) It determines the average performance.",
            "c) It provides a guarantee that the program will terminate within a certain time period, ensuring future performance.",
            "d) It simplifies the analysis by ignoring all other factors."
          ],
          answer: "c) It provides a guarantee that the program will terminate within a certain time period, ensuring future performance."
        },
        {
          id: "DSA-W2-MCA-004",
          question: "Consider an algorithm that repeatedly divides the working area in half during its execution. What type of time complexity would this algorithm likely exhibit?",
          options: [
            "a) Linear",
            "b) Quadratic",
            "c) Logarithmic",
            "d) Exponential"
          ],
          answer: "c) Logarithmic"
        },
        {
          id: "DSA-W2-MCA-005",
          question: "Two solutions for calculating the square of a number are provided: one using a loop n times, and another using direct multiplication (n*n). Why is the second solution considered better?",
          options: [
            "a) It is longer and more complex.",
            "b) It has a constant time complexity, independent of n.",
            "c) It involves more elementary steps.",
            "d) It only works for very small values of n."
          ],
          answer: "b) It has a constant time complexity, independent of n."
        },
        {
          id: "DSA-W2-MCA-006",
          question: "When calculating the Space Complexity of an algorithm, why do we usually consider only Data Space and neglect Instruction Space and Environmental Stack?",
          options: [
            "a) Instruction Space and Environmental Stack are not required by the algorithm.",
            "b) They are too complex to calculate.",
            "c) They are affected by the type of hardware used to run the algorithm.",
            "d) Data Space is always the largest component."
          ],
          answer: "c) They are affected by the type of hardware used to run the algorithm."
        },
        {
          id: "DSA-W2-MCA-007",
          question: "If a program fragment has O(N) work followed by O(N^2) work, what is the overall running time, according to Rule 3—Consecutive Statements?",
          options: [
            "a) O(N)",
            "b) O(N^2)",
            "c) O(N^3)",
            "d) O(1)"
          ],
          answer: "b) O(N^2)"
        },
        {
          id: "DSA-W2-MCA-008",
          question: "Why is 'benchmarking' not the best method for comparing the performance of algorithms?",
          options: [
            "a) It only measures the time taken.",
            "b) It is better for comparing performance of processors rather than algorithms.",
            "c) It is too complex to implement.",
            "d) It ignores input size."
          ],
          answer: "b) It is better for comparing performance of processors rather than algorithms."
        },
        {
          id: "DSA-W2-MCA-009",
          question: "If an algorithm has a time complexity described by Omega(expression), what does this tell us about its execution time?",
          options: [
            "a) It indicates the maximum time required.",
            "b) It represents the worst case.",
            "c) It indicates the minimum time required for all input values.",
            "d) It means the function grows slower than the expression."
          ],
          answer: "c) It indicates the minimum time required for all input values."
        },
        {
          id: "DSA-W2-MCA-010",
          question: "The instruction 'To simplify the analysis, we adopt the convention that there are no particular units of time thus throwing away leading constants. We will also throw away low-order terms...' implies what about the final Big-Oh running time?",
          options: [
            "a) It will be an exact measure of time.",
            "b) It will always underestimate the running time.",
            "c) It provides a guarantee that the program will terminate within a certain time period (an upper bound).",
            "d) It only applies to best-case scenarios."
          ],
          answer: "c) It provides a guarantee that the program will terminate within a certain time period (an upper bound)."
        }
      ],
      "Multiple Choice Fill in the Blanks": [
        {
          id: "DSA-W2-MCF-001",
          question: "An algorithm is said to be efficient and fast, if it takes less time to execute and consumes less ______ space.",
          options: [
            "a) disk",
            "b) network",
            "c) memory",
            "d) register"
          ],
          answer: "c) memory"
        },
        {
          id: "DSA-W2-MCF-002",
          question: "______ complexity refers to the amount of memory space required by the algorithm, during the course of its execution.",
          options: [
            "a) Time",
            "b) Space",
            "c) Speed",
            "d) Program"
          ],
          answer: "b) Space"
        },
        {
          id: "DSA-W2-MCF-003",
          question: "The space required to store the executable version of the program is called ______.",
          options: [
            "a) Data Space",
            "b) Environment Space",
            "c) Instruction Space",
            "d) Auxiliary Space"
          ],
          answer: "c) Instruction Space"
        },
        {
          id: "DSA-W2-MCF-004",
          question: "Space Complexity = Auxiliary Space + ______ space.",
          options: [
            "a) Instruction",
            "b) Data",
            "c) Input",
            "d) Output"
          ],
          answer: "c) Input"
        },
        {
          id: "DSA-W2-MCF-005",
          question: "The best option to evaluate the performance of an algorithm is to perform ______ analysis.",
          options: [
            "a) empirical",
            "b) benchmarking",
            "c) asymptotic",
            "d) experimental"
          ],
          answer: "c) asymptotic"
        },
        {
          id: "DSA-W2-MCF-006",
          question: "The running time of the loop where for(i=0; i < N; i++) { statement; } is directly proportional to N, making its time complexity ______.",
          options: [
            "a) Constant",
            "b) Quadratic",
            "c) Logarithmic",
            "d) Linear"
          ],
          answer: "d) Linear"
        },
        {
          id: "DSA-W2-MCF-007",
          question: "The running time of two nested loops for(i=0; i < N; i++) { for(j=0; j < N;j++) { statement; } } is proportional to the square of N, making its time complexity ______.",
          options: [
            "a) Constant",
            "b) Quadratic",
            "c) Logarithmic",
            "d) Linear"
          ],
          answer: "b) Quadratic"
        },
        {
          id: "DSA-W2-MCF-008",
          question: "The running time of an algorithm is proportional to the number of times N can be divided by 2, indicating ______ Time Complexity.",
          options: [
            "a) Exponential",
            "b) Factorial",
            "c) Logarithmic",
            "d) Constant"
          ],
          answer: "c) Logarithmic"
        },
        {
          id: "DSA-W2-MCF-009",
          question: "Big Omega denotes 'more than or the same as' iterations.",
          options: [
            "a) fewer than",
            "b) more than",
            "c) exactly",
            "d) not"
          ],
          answer: "b) more than"
        },
        {
          id: "DSA-W2-MCF-010",
          question: "The total running time of a statement inside a group of nested loops is the running time of the statement multiplied by the ______ of the sizes of all the loops.",
          options: [
            "a) sum",
            "b) difference",
            "c) product",
            "d) quotient"
          ],
          answer: "c) product"
        }
      ],
      "Multiple Choice Computation": [
        {
          id: "DSA-W2-MCC-001",
          question: "In the sum function example, int z = a + b + c; return(z);, if a, b, c, z are all integer types taking 4 bytes each, what is the total memory requirement in bytes, including 4 bytes for return value?",
          options: [
            "a) 16 bytes",
            "b) 20 bytes",
            "c) 24 bytes",
            "d) 28 bytes"
          ],
          answer: "b) 20 bytes"
        },
        {
          id: "DSA-W2-MCC-002",
          question: "For the sum function example int sum(int a[], int n), if a[] requires 4*n bytes, and x, n, i along with the return value each take 4 bytes, what is the total memory requirement in terms of n?",
          options: [
            "a) 4n + 4 bytes",
            "b) 4n + 8 bytes",
            "c) 4n + 12 bytes",
            "d) 4n + 16 bytes"
          ],
          answer: "d) 4n + 16 bytes"
        },
        {
          id: "DSA-W2-MCC-003",
          question: "An algorithm's time complexity is described as O(N). If processing time for N=100 is X, what would be the approximate processing time for N=200?",
          options: [
            "a) X",
            "b) 0.5X",
            "c) 2X",
            "d) 4X"
          ],
          answer: "c) 2X"
        },
        {
          id: "DSA-W2-MCC-004",
          question: "Consider a code fragment with two nested loops, both iterating N times (e.g., for(i=0; i<N; i++) { for(j=0; j<N;j++) { statement; } }). If N doubles, how much would the running time increase, approximately?",
          options: [
            "a) It would double.",
            "b) It would increase by N * N.",
            "c) It would remain constant.",
            "d) It would be halved."
          ],
          answer: "b) It would increase by N * N."
        },
        {
          id: "DSA-W2-MCC-005",
          question: "If a program takes 6N + 4 units of time as its total cost, what is its Big-Oh running time?",
          options: [
            "a) O(1)",
            "b) O(N)",
            "c) O(N^2)",
            "d) O(log N)"
          ],
          answer: "b) O(N)"
        },
        {
          id: "DSA-W2-MCC-006",
          question: "A while loop algorithm repeatedly divides the working area N in half. If N is 128, how many iterations would it take at most to reach a working area of 1 (or less)?",
          options: [
            "a) 2",
            "b) 4",
            "c) 7",
            "d) 10"
          ],
          answer: "c) 7"
        },
        {
          id: "DSA-W2-MCC-007",
          question: "If an algorithm's running time is N * log(N), and N is 8, what is N * log2(N)?",
          options: [
            "a) 8",
            "b) 16",
            "c) 24",
            "d) 32"
          ],
          answer: "c) 24"
        },
        {
          id: "DSA-W2-MCC-008",
          question: "According to Rule 2 for nested loops, if an inner loop runs M times and an outer loop runs N times, what is the product of their sizes?",
          options: [
            "a) M + N",
            "b) M - N",
            "c) M * N",
            "d) M / N"
          ],
          answer: "c) M * N"
        },
        {
          id: "DSA-W2-MCC-009",
          question: "A program fragment has a statement partialSum += i * i * i; inside a loop that runs N times. How many units of time does this statement count for per time executed?",
          options: [
            "a) 1 unit",
            "b) 2 units",
            "c) 3 units",
            "d) 4 units"
          ],
          answer: "d) 4 units"
        },
        {
          id: "DSA-W2-MCC-010",
          question: "In Big O notation, when comparing N and N*N, which expression denotes a faster growth rate?",
          options: [
            "a) N",
            "b) N*N",
            "c) log(N)",
            "d) Constant"
          ],
          answer: "b) N*N"
        }
      ]
    },
"Week 3: Arrays and Pointers": {
  "Multiple Choice": [
    {
      id: "DSA-W3-MC-001",
      question: "What is an array defined as?",
      options: [
        "a) A collection of elements of different types",
        "b) A finite set of elements having the same type referenced under a common name",
        "c) A dynamic data structure that expands or shrinks",
        "d) A collection of items stored at non-contiguous memory locations"
      ],
      answer: "b) A finite set of elements having the same type referenced under a common name"
    },
    {
      id: "DSA-W3-MC-002",
      question: "How are individual data elements in a one-dimensional array accessed?",
      options: [
        "a) Using a pointer to the next element",
        "b) Using a row index and a column index",
        "c) Using an index",
        "d) By traversing the entire array"
      ],
      answer: "c) Using an index"
    },
    {
      id: "DSA-W3-MC-003",
      question: "Arrays are classified as ______ data structures because they store elements of the same type.",
      options: [
        "a) heterogeneous",
        "b) non-homogeneous",
        "c) homogeneous",
        "d) dynamic"
      ],
      answer: "c) homogeneous"
    },
    {
      id: "DSA-W3-MC-004",
      question: "Which of the following is NOT a basic operation supported by an array?",
      options: [
        "a) Traverse",
        "b) Insertion",
        "c) Sorting",
        "d) Deletion"
      ],
      answer: "c) Sorting"
    },
    {
      id: "DSA-W3-MC-005",
      question: "What is a key advantage of arrays regarding element access?",
      options: [
        "a) Elements can only be accessed sequentially.",
        "b) Reading an array element is simple and efficient, O(1).",
        "c) It requires traversing the whole array to read an element.",
        "d) Only the first element can be instantly read."
      ],
      answer: "b) Reading an array element is simple and efficient, O(1)."
    },
    {
      id: "DSA-W3-MC-006",
      question: "Which of the following is a disadvantage of using arrays?",
      options: [
        "a) They are a foundation for other data structures.",
        "b) Elements can be accessed using a single name.",
        "c) The size of the array is fixed after declaration.",
        "d) Reading an array element is O(1)."
      ],
      answer: "c) The size of the array is fixed after declaration."
    },
    {
      id: "DSA-W3-MC-007",
      question: "What happens to allocated memory if a smaller number of elements than the declared size are stored in an array?",
      options: [
        "a) The array size automatically shrinks.",
        "b) The remaining allocated memory is wasted.",
        "c) The unutilized memory can be used by other programs.",
        "d) The array becomes dynamic."
      ],
      answer: "b) The remaining allocated memory is wasted."
    },
    {
      id: "DSA-W3-MC-008",
      question: "What is the term for a two-dimensional array, as it represents a series of rows and columns?",
      options: [
        "a) Linked List",
        "b) Table",
        "c) Stack",
        "d) Tree"
      ],
      answer: "b) Table"
    },
    {
      id: "DSA-W3-MC-009",
      question: "Which linearization alternative is used for storing elements of a two-dimensional array in memory?",
      options: [
        "a) Depth-Major",
        "b) Row-Major and Column-Major",
        "c) Diagonal-Major",
        "d) Linear-Major"
      ],
      answer: "b) Row-Major and Column-Major"
    },
    {
      id: "DSA-W3-MC-010",
      question: "What does an 'array of arrays' refer to?",
      options: [
        "a) A one-dimensional array",
        "b) A two-dimensional array",
        "c) A three-dimensional array",
        "d) Any multidimensional array"
      ],
      answer: "b) A two-dimensional array"
    }
  ],
  "Multiple Choice Analyzation": [
    {
      id: "DSA-W3-MCA-001",
      question: "A programmer needs to store a fixed number of student records, where each record contains a student ID (integer), name (string), and grade (float). Which type of array structure would be most appropriate to organize this collection if all students have the same data types for their records?",
      options: [
        "a) Array of characters",
        "b) Array of integers",
        "c) Array of records (Structure Type)",
        "d) Array of pointers"
      ],
      answer: "c) Array of records (Structure Type)"
    },
    {
      id: "DSA-W3-MCA-002",
      question: "If an array is declared with a fixed size of 100 elements, but at runtime, only 50 elements are ever stored. What is the consequence of this situation?",
      options: [
        "a) The array automatically resizes to 50 elements.",
        "b) The remaining 50 elements' memory locations are wasted.",
        "c) The program will crash due to insufficient memory.",
        "d) The array becomes dynamic, adjusting to current needs."
      ],
      answer: "b) The remaining 50 elements' memory locations are wasted."
    },
    {
      id: "DSA-W3-MCA-003",
      question: "You are designing a system where you need to access elements very quickly based on their position. Which advantage of arrays makes them suitable for this scenario?",
      options: [
        "a) Arrays can store different data types.",
        "b) Array size is fixed at compile time.",
        "c) Reading an array element is O(1) due to direct indexing.",
        "d) Arrays are the foundation for linked lists."
      ],
      answer: "c) Reading an array element is O(1) due to direct indexing."
    },
    {
      id: "DSA-W3-MCA-004",
      question: "In a two-dimensional array, data elements are identified by a row index and a column index. This method of access implies what about their memory storage?",
      options: [
        "a) They are stored non-contiguously.",
        "b) Their positions can be calculated by adding an offset to a base value.",
        "c) They require complex traversal for access.",
        "d) They are accessed randomly without calculation."
      ],
      answer: "b) Their positions can be calculated by adding an offset to a base value."
    },
    {
      id: "DSA-W3-MCA-005",
      question: "A developer needs to implement a collection of items where the order of operations is Last In First Out (LIFO). Although not an array itself, how can an array be relevant to this implementation?",
      options: [
        "a) Arrays are implemented using stacks.",
        "b) Arrays are used as a foundation for other data structures like stacks.",
        "c) Stacks are completely unrelated to arrays.",
        "d) Arrays only support First In First Out (FIFO) operations."
      ],
      answer: "b) Arrays are used as a foundation for other data structures like stacks."
    },
    {
      id: "DSA-W3-MCA-006",
      question: "When an array is initialized with size in C, it assigns default values to its elements. What does this imply about the memory allocation for these elements?",
      options: [
        "a) Memory is only allocated as elements are added.",
        "b) Memory for all elements is reserved upfront, even if not explicitly filled with user data.",
        "c) Only memory for the first element is allocated initially.",
        "d) Memory is allocated dynamically during runtime for each element."
      ],
      answer: "b) Memory for all elements is reserved upfront, even if not explicitly filled with user data."
    },
    {
      id: "DSA-W3-MCA-007",
      question: "A scenario requires storing a list of characters, referenced under a common name. If this collection of character elements is considered an array, what specific term is used to refer to it?",
      options: [
        "a) Record type",
        "b) Array type",
        "c) String",
        "d) Simple type"
      ],
      answer: "c) String"
    },
    {
      id: "DSA-W3-MCA-008",
      question: "Consider the basic operations on an array: Traverse, Insertion, Deletion, Search, Update. Which operation allows you to change an existing element at a specific location?",
      options: [
        "a) Traverse",
        "b) Search",
        "c) Insertion",
        "d) Update"
      ],
      answer: "d) Update"
    },
    {
      id: "DSA-W3-MCA-009",
      question: "Multidimensional arrays have certain limitations on the number of definable dimensions. What determines these limitations?",
      options: [
        "a) The amount of available RAM in the computer.",
        "b) The type of programming language or compiler used.",
        "c) The number of elements to be stored.",
        "d) The speed of the processor."
      ],
      answer: "b) The type of programming language or compiler used."
    },
    {
      id: "DSA-W3-MCA-010",
      question: "The source states that 'Data elements are identified by a row index and a column index' for a two-dimensional array. What is the fundamental principle that allows for this direct identification?",
      options: [
        "a) The array is dynamic.",
        "b) The elements are of different types.",
        "c) Elements are stored at contiguous memory locations.",
        "d) The array size is not fixed."
      ],
      answer: "c) Elements are stored at contiguous memory locations."
    }
  ],
  "Multiple Choice Fill in the Blanks": [
    {
      id: "DSA-W3-MCF-001",
      question: "Each individual data in an array is called an array ______ and must be of the same type and size.",
      options: [
        "a) pointer",
        "b) element",
        "c) index",
        "d) dimension"
      ],
      answer: "b) element"
    },
    {
      id: "DSA-W3-MCF-002",
      question: "An array is a collection of items stored at ______ memory locations.",
      options: [
        "a) non-contiguous",
        "b) random",
        "c) contiguous",
        "d) scattered"
      ],
      answer: "c) contiguous"
    },
    {
      id: "DSA-W3-MCF-003",
      question: "In the formula for calculating the address of an array element A[X] = B + W * (X - LB), B stands for the ______ address.",
      options: [
        "a) beginning",
        "b) base",
        "c) byte",
        "d) bound"
      ],
      answer: "b) base"
    },
    {
      id: "DSA-W3-MCF-004",
      question: "For address calculation of a one-dimensional array element, W represents the ______ of one element stored in the array.",
      options: [
        "a) width",
        "b) weight",
        "c) storage size",
        "d) word length"
      ],
      answer: "c) storage size"
    },
    {
      id: "DSA-W3-MCF-005",
      question: "To store elements of a Two-dimensional array in memory, they must be ______ to enable their storage.",
      options: [
        "a) randomized",
        "b) linearized",
        "c) multiplied",
        "d) sorted"
      ],
      answer: "b) linearized"
    },
    {
      id: "DSA-W3-MCF-006",
      question: "The two alternatives to achieve linearization of a two-dimensional array are ______ Major and ______ Major.",
      options: [
        "a) Row, Column",
        "b) Front, Back",
        "c) Left, Right",
        "d) Top, Bottom"
      ],
      answer: "a) Row, Column"
    },
    {
      id: "DSA-W3-MCF-007",
      question: "The basic operation of ______ involves printing all the array elements one by one as we visit them.",
      options: [
        "a) Insertion",
        "b) Deletion",
        "c) Search",
        "d) Traverse"
      ],
      answer: "d) Traverse"
    },
    {
      id: "DSA-W3-MCF-008",
      question: "The ______ operation refers to updating an existing element from the array at a given index.",
      options: [
        "a) insert",
        "b) delete",
        "c) update",
        "d) search"
      ],
      answer: "c) update"
    },
    {
      id: "DSA-W3-MCF-009",
      question: "In C language, array operations are explicitly defined using loops and ______ statements.",
      options: [
        "a) print",
        "b) return",
        "c) assignment",
        "d) function"
      ],
      answer: "c) assignment"
    },
    {
      id: "DSA-W3-MCF-010",
      question: "If the lower bound of a subscript (LB) for a single dimension array is not specified, it is assumed to be ______.",
      options: [
        "a) 1",
        "b) -1",
        "c) 0",
        "d) any integer"
      ],
      answer: "c) 0"
    }
  ],
  "Multiple Choice Computation": [
    {
      id: "DSA-W3-MCC-001",
      question: "Given the base address of an array B [1300.... . 1900] as 1020 and the size of each element is 2 bytes. Find the address of B.",
      options: [
        "a) 1020",
        "b) 1320",
        "c) 1820",
        "d) 1920"
      ],
      answer: "c) 1820"
    },
    {
      id: "DSA-W3-MCC-002",
      question: "An array X [-15...... . 18, 15...... . 40] requires one byte of storage. What is the number of rows (M) for this array?",
      options: [
        "a) 10",
        "b) 15",
        "c) 25",
        "d) 26"
      ],
      answer: "d) 26"
    },
    {
      id: "DSA-W3-MCC-003",
      question: "An array X [-15...... . 18, 15...... . 40] requires one byte of storage. What is the number of columns (N) for this array?",
      options: [
        "a) 25",
        "b) 26",
        "c) 40",
        "d) 55"
      ],
      answer: "b) 26"
    },
    {
      id: "DSA-W3-MCC-004",
      question: "Given array X [-15...... . 18, 15...... . 40] with beginning location 1500 and one byte storage per element. Determine the location of X using Column Major Wise calculation.",
      options: [
        "a) 1500",
        "b) 1530",
        "c) 1600",
        "d) 1660"
      ],
      answer: "d) 1660"
    },
    {
      id: "DSA-W3-MCC-005",
      question: "Given array X [-15...... . 18, 15...... . 40] with beginning location 1500 and one byte storage per element. Determine the location of X using Row Major Wise calculation.",
      options: [
        "a) 1500",
        "b) 1585",
        "c) 2285",
        "d) 2385"
      ],
      answer: "c) 2285"
    },
    {
      id: "DSA-W3-MCC-006",
      question: "An array is declared in C with a length of 10. What is the highest index that can be used to access an element?",
      options: [
        "a) 0",
        "b) 9",
        "c) 10",
        "d) 11"
      ],
      answer: "b) 9"
    },
    {
      id: "DSA-W3-MCC-007",
      question: "If an array has 5 elements, and each element takes up 4 bytes, what is the total minimum memory space required for the array elements (assuming contiguous storage)?",
      options: [
        "a) 4 bytes",
        "b) 5 bytes",
        "c) 20 bytes",
        "d) 24 bytes"
      ],
      answer: "c) 20 bytes"
    },
    {
      id: "DSA-W3-MCC-008",
      question: "A two-dimensional array A is given. What is the number of rows (M)?",
      options: [
        "a) 20",
        "b) 30",
        "c) 50",
        "d) 600"
      ],
      answer: "a) 20"
    },
    {
      id: "DSA-W3-MCC-009",
      question: "A two-dimensional array A is given. What is the number of columns (N)?",
      options: [
        "a) 20",
        "b) 30",
        "c) 50",
        "d) 600"
      ],
      answer: "b) 30"
    },
    {
      id: "DSA-W3-MCC-010",
      question: "Given a one-dimensional array A with LB = 0, W = 4 bytes, and B = 1000. What is the address of A?",
      options: [
        "a) 1000",
        "b) 1005",
        "c) 1020",
        "d) 1024"
      ],
      answer: "c) 1020"
    }
  ]
},
    "Week 4: Linked Lists ADTs": {
      "Multiple Choice": [
        {
          id: "DSA-W4-MC-001",
          question: "How do lists represent arbitrary nonnumeric information in a computer?",
          options: [
            "a) Through fixed-size arrays",
            "b) Through a convenient way for keeping track of items",
            "c) Only in sorted order",
            "d) By imposing limitations on information access"
          ],
          answer: "b) Through a convenient way for keeping track of items"
        },
        {
          id: "DSA-W4-MC-002",
          question: "What does a 'linear relationship' among elements in a list mean?",
          options: [
            "a) Elements are stored in consecutive memory locations.",
            "b) Each element has a unique successor, except for the first one.",
            "c) All elements are of the same type.",
            "d) Elements can be accessed randomly."
          ],
          answer: "b) Each element has a unique successor, except for the first one."
        },
        {
          id: "DSA-W4-MC-003",
          question: "What is a key disadvantage of using arrays to implement a list?",
          options: [
            "a) They are dynamic structures.",
            "b) They cannot be easily extended or reduced to fit the data set.",
            "c) They are inexpensive to maintain new insertions.",
            "d) They do not allow direct access."
          ],
          answer: "b) They cannot be easily extended or reduced to fit the data set."
        },
        {
          id: "DSA-W4-MC-004",
          question: "What is a linked list?",
          options: [
            "a) A static data structure where elements are stored contiguously.",
            "b) A linear data structure where each element is a separate object connected via links.",
            "c) An array that can grow and shrink dynamically.",
            "d) A data structure that allows random access of data."
          ],
          answer: "b) A linear data structure where each element is a separate object connected via links."
        },
        {
          id: "DSA-W4-MC-005",
          question: "What are the two components of each element (node) of a linked list?",
          options: [
            "a) Data and index",
            "b) Data and reference to the next node",
            "c) Head and tail",
            "d) Pointer and array"
          ],
          answer: "b) Data and reference to the next node"
        },
        {
          id: "DSA-W4-MC-006",
          question: "What is the entry point into a linked list called?",
          options: [
            "a) Tail",
            "b) Node",
            "c) Head",
            "d) Link"
          ],
          answer: "c) Head"
        },
        {
          id: "DSA-W4-MC-007",
          question: "What type of data structure is a linked list?",
          options: [
            "a) Static",
            "b) Fixed-size",
            "c) Array-based",
            "d) Dynamic"
          ],
          answer: "d) Dynamic"
        },
        {
          id: "DSA-W4-MC-008",
          question: "Which type of linked list allows navigation through the list in both forward and backward directions?",
          options: [
            "a) Simple Linked List",
            "b) Singly Linked List",
            "c) Doubly Linked List",
            "d) Circular Linked List"
          ],
          answer: "c) Doubly Linked List"
        },
        {
          id: "DSA-W4-MC-009",
          question: "In a Singly Linked List, where does the last node's next address or reference point to?",
          options: [
            "a) The head of the list",
            "b) The previous node",
            "c) NULL",
            "d) A random memory location"
          ],
          answer: "c) NULL"
        },
        {
          id: "DSA-W4-MC-010",
          question: "Which basic operation on a linked list involves finding an element from the list, always beginning at the head?",
          options: [
            "a) Addition/Insertion",
            "b) Deletion",
            "c) Search",
            "d) Traversal"
          ],
          answer: "c) Search"
        }
      ],
      "Multiple Choice Analyzation": [
        {
          id: "DSA-W4-MCA-001",
          question: "A linked list uses more memory compared to an array. What is the primary reason for this disadvantage?",
          options: [
            "a) Linked lists are always larger in size.",
            "b) Linked lists require an extra 4 bytes (on 32-bit CPU) to store a reference to the next node.",
            "c) Arrays store elements non-contiguously.",
            "d) Linked lists need to store two data items per node."
          ],
          answer: "b) Linked lists require an extra 4 bytes (on 32-bit CPU) to store a reference to the next node."
        },
        {
          id: "DSA-W4-MCA-002",
          question: "If you want to access a particular item in a linked list, you have to start at the head and follow the references until you get to that item. What does this imply about linked lists compared to arrays?",
          options: [
            "a) Linked lists allow random access of data.",
            "b) Linked lists are more space-efficient.",
            "c) Linked lists do not allow random access of data.",
            "d) Linked lists have faster insertion and deletion at any point."
          ],
          answer: "c) Linked lists do not allow random access of data."
        },
        {
          id: "DSA-W4-MCA-003",
          question: "Why is a linked list a suitable data structure for applications that have to deal with an unknown number of objects?",
          options: [
            "a) Its nodes are stored in consecutive memory locations.",
            "b) It allows random access to elements.",
            "c) The number of nodes is not fixed and can grow and shrink on demand.",
            "d) It is implemented using arrays."
          ],
          answer: "c) The number of nodes is not fixed and can grow and shrink on demand."
        },
        {
          id: "DSA-W4-MCA-004",
          question: "In a singly linked list, when adding a node at the beginning, the new node's 'next' pointer points to the original 'head', and then the new node becomes the 'head'. What is the critical aspect of this step?",
          options: [
            "a) It requires traversing the entire list.",
            "b) It changes the entry point of the list.",
            "c) It makes the old head inaccessible.",
            "d) It only works if the list is empty."
          ],
          answer: "b) It changes the entry point of the list."
        },
        {
          id: "DSA-W4-MCA-005",
          question: "When deleting a node 'b' from a linked list a → b → c, the predecessor node 'a' is connected to the successor node 'c' (a → c). What happens to node 'b' after this operation, and what needs to be done?",
          options: [
            "a) Node 'b' is still part of the list, but its data is cleared.",
            "b) Node 'b' becomes inaccessible and needs to be freed (garbage collected).",
            "c) Node 'b' is automatically moved to the end of the list.",
            "d) Node 'b' is automatically added back to the list as the new head."
          ],
          answer: "b) Node 'b' becomes inaccessible and needs to be freed (garbage collected)."
        },
        {
          id: "DSA-W4-MCA-006",
          question: "An Abstract Data Type (ADT) list is described as providing storage for information without imposing limitations on how that information is added, accessed, or removed. What does this flexibility imply about its implementation?",
          options: [
            "a) It must be implemented using a fixed array.",
            "b) It can have multiple implementations, like arrays or linked lists.",
            "c) It only supports sequential access.",
            "d) It cannot be easily extended."
          ],
          answer: "b) It can have multiple implementations, like arrays or linked lists."
        },
        {
          id: "DSA-W4-MCA-007",
          question: "A circular linked list has the last item linked to the first element and vice versa (for doubly circular). What advantage does this structure provide?",
          options: [
            "a) It eliminates the need for pointers.",
            "b) Any node can be made as the starting node.",
            "c) It allows for random access.",
            "d) It uses less memory than a singly linked list."
          ],
          answer: "b) Any node can be made as the starting node."
        },
        {
          id: "DSA-W4-MCA-008",
          question: "When designing an ADT, the goal is to provide enough operations to make it useful but not so many that it gets confusing. What does this suggest about ADT design?",
          options: [
            "a) ADTs are always static and never need new operations.",
            "b) It's a balance between utility and simplicity, and new operations might be added later.",
            "c) ADTs should have as many operations as possible.",
            "d) ADTs are only useful in specific, narrow contexts."
          ],
          answer: "b) It's a balance between utility and simplicity, and new operations might be added later."
        },
        {
          id: "DSA-W4-MCA-009",
          question: "The 'head' of a linked list is described as the reference to the first node, and not a separate node itself. What does this imply about an empty linked list?",
          options: [
            "a) It has a head node but no data.",
            "b) The head is a null reference.",
            "c) It points to the last node.",
            "d) It cannot be created."
          ],
          answer: "b) The head is a null reference."
        },
        {
          id: "DSA-W4-MCA-010",
          question: "What is the main distinction between an array and a linked list when it comes to memory allocation?",
          options: [
            "a) Arrays store nodes randomly, while linked lists store them contiguously.",
            "b) Arrays are dynamic, while linked lists are static.",
            "c) Linked lists do not store their nodes in consecutive memory locations, unlike arrays.",
            "d) Linked lists always have a fixed number of nodes, whereas arrays can vary."
          ],
          answer: "c) Linked lists do not store their nodes in consecutive memory locations, unlike arrays."
        }
      ],
      "Multiple Choice Fill in the Blanks": [
        {
          id: "DSA-W4-MCF-001",
          question: "A list is a finite, ordered collection of items (elements) of some element type E, where each object has a ______ in the List, starting with position zero.",
          options: [
            "a) value",
            "b) successor",
            "c) position",
            "d) link"
          ],
          answer: "c) position"
        },
        {
          id: "DSA-W4-MCF-002",
          question: "A list has a property intuitively called ______, which is simply the number of elements on the list.",
          options: [
            "a) length",
            "b) capacity",
            "c) size",
            "d) count"
          ],
          answer: "c) size"
        },
        {
          id: "DSA-W4-MCF-003",
          question: "The implementation of a linked list in C is done using ______.",
          options: [
            "a) arrays",
            "b) structures",
            "c) pointers",
            "d) functions"
          ],
          answer: "c) pointers"
        },
        {
          id: "DSA-W4-MCF-004",
          question: "A linked list can be visualized as a chain of ______, where every node points to the next node.",
          options: [
            "a) elements",
            "b) data",
            "c) links",
            "d) nodes"
          ],
          answer: "d) nodes"
        },
        {
          id: "DSA-W4-MCF-005",
          question: "Each element (node) of a list is comprised of two items - the ______ and a reference to the next node.",
          options: [
            "a) index",
            "b) data",
            "c) head",
            "d) tail"
          ],
          answer: "b) data"
        },
        {
          id: "DSA-W4-MCF-006",
          question: "The last node in a linked list has a reference to ______ and is often identified as ______.",
          options: [
            "a) head, front",
            "b) null, tail",
            "c) previous, end",
            "d) first, last"
          ],
          answer: "b) null, tail"
        },
        {
          id: "DSA-W4-MCF-007",
          question: "A ______ Linked List allows navigation in the list forward only.",
          options: [
            "a) Doubly",
            "b) Circular",
            "c) Simple",
            "d) Headed"
          ],
          answer: "c) Simple"
        },
        {
          id: "DSA-W4-MCF-008",
          question: "In a ______ Linked List, the last item (TAIL) contains a link to the first element (HEAD).",
          options: [
            "a) Simple",
            "b) Doubly",
            "c) Circular",
            "d) Static"
          ],
          answer: "c) Circular"
        },
        {
          id: "DSA-W4-MCF-009",
          question: "When adding a node at the beginning of a singly linked list, you make a new node, point the 'next' of the new node to the 'head' of the linked list, and then mark the new node as ______.",
          options: [
            "a) tail",
            "b) current",
            "c) previous",
            "d) head"
          ],
          answer: "d) head"
        },
        {
          id: "DSA-W4-MCF-010",
          question: "In C, inaccessible nodes after deletion are called ______ and need to be cleaned using the 'free' function.",
          options: [
            "a) orphans",
            "b) ghosts",
            "c) garbage",
            "d) residue"
          ],
          answer: "c) garbage"
        }
      ],
      "Multiple Choice Computation": [
        {
          id: "DSA-W4-MCC-001",
          question: "How many distinct types of linked lists are explicitly mentioned in the sources?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "d) 4"
        },
        {
          id: "DSA-W4-MCC-002",
          question: "If a struct node in C for a singly linked list has an int data member and a struct node *next pointer, how many bytes are used for the *next pointer on a 32-bit CPU?",
          options: [
            "a) 1 byte",
            "b) 2 bytes",
            "c) 4 bytes",
            "d) 8 bytes"
          ],
          answer: "c) 4 bytes"
        },
        {
          id: "DSA-W4-MCC-003",
          question: "A list has a 'size' property. If a list contains 5 elements, what is its size?",
          options: [
            "a) 0",
            "b) 1",
            "c) 5",
            "d) Indefinite"
          ],
          answer: "c) 5"
        },
        {
          id: "DSA-W4-MCC-004",
          question: "An ADT list has conceptual operations like add(E item), add(int pos, E item), contains(E item), size(), isEmpty(), get(int pos), and remove(int pos). How many distinct conceptual operations are explicitly listed?",
          options: [
            "a) 5",
            "b) 6",
            "c) 7",
            "d) 8"
          ],
          answer: "c) 7"
        },
        {
          id: "DSA-W4-MCC-005",
          question: "If a list has elements at positions 0, 1, 2, ..., up to position n. What is the total number of elements in the list?",
          options: [
            "a) n",
            "b) n-1",
            "c) n+1",
            "d) 2n"
          ],
          answer: "c) n+1"
        },
        {
          id: "DSA-W4-MCC-006",
          question: "The struct node in C has two data members. What is the count of data members explicitly defined in the provided struct node example?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "b) 2"
        },
        {
          id: "DSA-W4-MCC-007",
          question: "A Doubly Linked List has two references associated with each node. How many references are these in total for each node?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "b) 2"
        },
        {
          id: "DSA-W4-MCC-008",
          question: "A Circular Linked List can be either singly circular or doubly circular. How many variations of circular linked lists are explicitly mentioned?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "b) 2"
        },
        {
          id: "DSA-W4-MCC-009",
          question: "The process of adding a node to a singly linked list can vary based on position. How many distinct positional adding processes are described?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "c) 3"
        },
        {
          id: "DSA-W4-MCC-010",
          question: "The basic operations supported by a linked list are described as Addition/Insertion, Deletion, and Search. How many primary basic operations are explicitly listed by name?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "c) 3"
        }
      ]
    },
    "Week 5: Stacks ADTs": {
      "Multiple Choice": [
        {
          id: "DSA-W5-MC-001",
          question: "What principle do stacks follow?",
          options: [
            "a) First In First Out (FIFO)",
            "b) Last In First Out (LIFO)",
            "c) Random Access",
            "d) Sorted Order"
          ],
          answer: "b) Last In First Out (LIFO)"
        },
        {
          id: "DSA-W5-MC-002",
          question: "In a stack, elements can be added and removed only at which location?",
          options: [
            "a) The bottom",
            "b) The middle",
            "c) The top",
            "d) Any position"
          ],
          answer: "c) The top"
        },
        {
          id: "DSA-W5-MC-003",
          question: "Which operation adds an item to the top of the stack?",
          options: [
            "a) Pop",
            "b) Peek",
            "c) Push",
            "d) Dequeue"
          ],
          answer: "c) Push"
        },
        {
          id: "DSA-W5-MC-004",
          question: "Which operation removes an item from the top of the stack?",
          options: [
            "a) Push",
            "b) Peek",
            "c) Pop",
            "d) Enqueue"
          ],
          answer: "c) Pop"
        },
        {
          id: "DSA-W5-MC-005",
          question: "What is a common application of a stack mentioned in the sources?",
          options: [
            "a) Storing data in a relational database",
            "b) Reversing a word",
            "c) Managing network traffic",
            "d) Sorting a large array"
          ],
          answer: "b) Reversing a word"
        },
        {
          id: "DSA-W5-MC-006",
          question: "In an array-based stack implementation, when is the stack considered empty?",
          options: [
            "a) When top = capacity - 1",
            "b) When top = 8",
            "c) When top = -1",
            "d) When top equals MAXSIZE"
          ],
          answer: "c) When top = -1"
        },
        {
          id: "DSA-W5-MC-007",
          question: "What is an advantage of an array-based stack implementation?",
          options: [
            "a) It is dynamic and grows on demand",
            "b) It requires extra memory due to pointers",
            "c) It is easy to implement and memory is saved",
            "d) It never throws an overflow error"
          ],
          answer: "c) It is easy to implement and memory is saved"
        },
        {
          id: "DSA-W5-MC-008",
          question: "Which notation style refers to placing the operator after its two operands (e.g., ab+)?",
          options: [
            "a) Infix Notation",
            "b) Prefix Notation",
            "c) Postfix Notation",
            "d) Polish Notation"
          ],
          answer: "c) Postfix Notation"
        },
        {
          id: "DSA-W5-MC-009",
          question: "Which operator has the highest precedence among exponentiation, multiplication, division, addition, and subtraction?",
          options: [
            "a) Addition (+)",
            "b) Multiplication (*)",
            "c) Exponentiation (^)",
            "d) Division (/)"
          ],
          answer: "c) Exponentiation (^)"
        },
        {
          id: "DSA-W5-MC-010",
          question: "When converting an infix expression to postfix, if a token is a right parenthesis ), what action is performed?",
          options: [
            "a) Push it to the stack",
            "b) Write it to the output",
            "c) Pop entries until a left parenthesis ( is met",
            "d) Ignore it"
          ],
          answer: "c) Pop entries until a left parenthesis ( is met"
        }
      ],
      "Multiple Choice Analyzation": [
        {
          id: "DSA-W5-MCA-001",
          question: "A text editor implements an 'undo' mechanism. Which property of stacks makes them suitable for this application?",
          options: [
            "a) Stacks allow elements to be added and removed from anywhere",
            "b) Stacks retrieve the most recently added item first (LIFO)",
            "c) Stacks can store different data types",
            "d) Stacks can be implemented with arrays"
          ],
          answer: "b) Stacks retrieve the most recently added item first (LIFO)"
        },
        {
          id: "DSA-W5-MCA-002",
          question: "If an array-based stack reaches its capacity - 1, it throws an overflow error in a fixed-size stack. What strategy is used in a dynamic stack to handle this?",
          options: [
            "a) It still throws an overflow error",
            "b) It doubles up the stack size",
            "c) It converts to a linked list implementation",
            "d) It clears the stack and starts over"
          ],
          answer: "b) It doubles up the stack size"
        },
        {
          id: "DSA-W5-MCA-003",
          question: "A linked list-based implementation of a stack requires extra memory due to pointers. What advantage does this disadvantage bring?",
          options: [
            "a) It makes the stack fixed-size",
            "b) It allows the stack to grow and shrink according to runtime needs",
            "c) It reduces the complexity of operations",
            "d) It makes element access random"
          ],
          answer: "b) It allows the stack to grow and shrink according to runtime needs"
        },
        {
          id: "DSA-W5-MCA-004",
          question: "Why is the stack organization very effective in evaluating arithmetic expressions, especially with postfix notation?",
          options: [
            "a) It requires parentheses for all operations",
            "b) Postfix expressions are easy for humans to read",
            "c) Stack-organized computers are better suited for postfix, simplifying parsing",
            "d) It reverses the order of operands"
          ],
          answer: "c) Stack-organized computers are better suited for postfix, simplifying parsing"
        },
        {
          id: "DSA-W5-MCA-005",
          question: "In the peek() function for a stack, the top pointer provides the top value without actually removing it. What is the main purpose of this functionality?",
          options: [
            "a) To check if the stack is full",
            "b) To check if the stack is empty",
            "c) To inspect the top element's value without modifying the stack",
            "d) To remove the top element"
          ],
          answer: "c) To inspect the top element's value without modifying the stack"
        },
        {
          id: "DSA-W5-MCA-006",
          question: "When implementing isempty() for an array-based stack in C, the top is initialized at -1. Why is checking top == -1 a valid condition for an empty stack?",
          options: [
            "a) Because the array index starts from 1",
            "b) Because -1 is an invalid index, indicating no elements",
            "c) Because it means the stack is full",
            "d) Because it refers to the last element"
          ],
          answer: "b) Because -1 is an invalid index, indicating no elements"
        },
        {
          id: "DSA-W5-MCA-007",
          question: "The Pop operation in an array implementation does not actually remove the data element; instead, top is decremented. What is the implication of this design choice?",
          options: [
            "a) The memory is automatically deallocated",
            "b) The data element is still technically in memory but considered 'removed' from the stack's active view",
            "c) It causes an overflow error",
            "d) It is less efficient than a linked-list pop"
          ],
          answer: "b) The data element is still technically in memory but considered 'removed' from the stack's active view"
        },
        {
          id: "DSA-W5-MCA-008",
          question: "Backtracking problems often use stacks. If you reach a 'dead end' in a maze, what does popping from the stack allow you to do?",
          options: [
            "a) Find the exit directly",
            "b) Backtrack to the previous choice point",
            "c) Explore a new, unvisited path",
            "d) Clear the entire maze path"
          ],
          answer: "b) Backtrack to the previous choice point"
        },
        {
          id: "DSA-W5-MCA-009",
          question: "Infix expressions require parentheses or operator-precedence conventions to distinguish evaluation order. Why is this a challenge for computing devices compared to postfix notation?",
          options: [
            "a) Infix notation uses fewer operators",
            "b) An algorithm to process infix notation can be difficult and costly in time and space",
            "c) Infix notation has higher precedence",
            "d) Postfix notation is not universally understood"
          ],
          answer: "b) An algorithm to process infix notation can be difficult and costly in time and space"
        },
        {
          id: "DSA-W5-MCA-010",
          question: "Why is it important to check if the stack is full before performing a push operation?",
          options: [
            "a) To ensure the stack is empty before adding",
            "b) To prevent an overflow error if the stack's capacity is reached",
            "c) To ensure the data element is valid",
            "d) To increment the top pointer correctly"
          ],
          answer: "b) To prevent an overflow error if the stack's capacity is reached"
        }
      ],
      "Multiple Choice Fill in the Blanks": [
        {
          id: "DSA-W5-MCF-001",
          question: "A stack is a container of objects that are inserted and removed according to the ______ principle.",
          options: [
            "a) FIFO",
            "b) LIFO",
            "c) FILO",
            "d) LILF"
          ],
          answer: "b) LIFO"
        },
        {
          id: "DSA-W5-MCF-002",
          question: "The two primary operations on a stack are ______ and ______.",
          options: [
            "a) enqueue, dequeue",
            "b) add, remove",
            "c) push, pop",
            "d) insert, delete"
          ],
          answer: "c) push, pop"
        },
        {
          id: "DSA-W5-MCF-003",
          question: "The peek() function allows you to get the top data element of the stack, without ______ it.",
          options: [
            "a) pushing",
            "b) finding",
            "c) removing",
            "d) updating"
          ],
          answer: "c) removing"
        },
        {
          id: "DSA-W5-MCF-004",
          question: "In an array-based stack, a stack is full when top = ______.",
          options: [
            "a) -1",
            "b) 0",
            "c) capacity - 1",
            "d) MAXSIZE"
          ],
          answer: "c) capacity - 1"
        },
        {
          id: "DSA-W5-MCF-005",
          question: "The process of putting a new data element onto stack is known as a ______ Operation.",
          options: [
            "a) Pop",
            "b) Peek",
            "c) Push",
            "d) IsEmpty"
          ],
          answer: "c) Push"
        },
        {
          id: "DSA-W5-MCF-006",
          question: "The push algorithm checks if the stack is full. If full, it produces an error and ______.",
          options: [
            "a) continues",
            "b) waits",
            "c) exits",
            "d) resizes"
          ],
          answer: "c) exits"
        },
        {
          id: "DSA-W5-MCF-007",
          question: "Accessing the content while removing it from the stack is known as a ______ Operation.",
          options: [
            "a) Push",
            "b) Peek",
            "c) Pop",
            "d) IsFull"
          ],
          answer: "c) Pop"
        },
        {
          id: "DSA-W5-MCF-008",
          question: "An arithmetic expression can be written in three different but equivalent notations: Infix, Prefix (Polish), and ______ (Reverse-Polish) Notation.",
          options: [
            "a) Postfix",
            "b) Middlefix",
            "c) Preorder",
            "d) Symmetric"
          ],
          answer: "a) Postfix"
        },
        {
          id: "DSA-W5-MCF-009",
          question: "In Prefix Notation, the operator is placed ______ its two operands.",
          options: [
            "a) between",
            "b) after",
            "c) before",
            "d) around"
          ],
          answer: "c) before"
        },
        {
          id: "DSA-W5-MCF-010",
          question: "The conversion from infix notation to postfix notation must take into consideration the operational ______.",
          options: [
            "a) order",
            "b) hierarchy",
            "c) size",
            "d) value"
          ],
          answer: "b) hierarchy"
        }
      ],
      "Multiple Choice Computation": [
        {
          id: "DSA-W5-MCC-001",
          question: "Consider a stack with MAXSIZE = 5. If top is currently 2, and two push operations are performed, what will be the value of top?",
          options: [
            "a) 2",
            "b) 3",
            "c) 4",
            "d) 5"
          ],
          answer: "c) 4"
        },
        {
          id: "DSA-W5-MCC-002",
          question: "A stack is initially empty (top = -1). If 3 push operations are performed, and then 1 pop operation, what is the final value of top?",
          options: [
            "a) -1",
            "b) 0",
            "c) 1",
            "d) 2"
          ],
          answer: "d) 2"
        },
        {
          id: "DSA-W5-MCC-003",
          question: "Given the arithmetic precedence: Exponentiation (Highest), Multiplication/Division (Next highest), Addition/Subtraction (Lowest). For the expression A + B * C, how many operations have a higher precedence than addition?",
          options: [
            "a) 0",
            "b) 1",
            "c) 2",
            "d) 3"
          ],
          answer: "b) 1"
        },
        {
          id: "DSA-W5-MCC-004",
          question: "In the push algorithm, if the stack is not full, top is incremented. How many operations are involved in the push algorithm (ignoring the if check)?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "b) 2"
        },
        {
          id: "DSA-W5-MCC-005",
          question: "In the example of converting infix to postfix: 2+(4+3*2+1)/3. How many numbers are sent to the output before the first operator is pushed onto the stack?",
          options: [
            "a) 0",
            "b) 1",
            "c) 2",
            "d) 3"
          ],
          answer: "b) 1"
        },
        {
          id: "DSA-W5-MCC-006",
          question: "Consider the postfix expression 5 9 3 + 4 2 * * 7 + *. After the operation push(pop() + pop()) for 5 9 3 +, what values are on the stack?",
          options: [
            "a) 5 9 3",
            "b) 5 12",
            "c) 9 3 5",
            "d) 5 9"
          ],
          answer: "b) 5 12"
        },
        {
          id: "DSA-W5-MCC-007",
          question: "How many basic operations are defined for a stack (excluding peek(), isFull(), isEmpty())?",
          options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
          ],
          answer: "b) 2"
        },
        {
          id: "DSA-W5-MCC-008",
          question: "If top is initialized at -1 in a C array-based stack, and MAXSIZE is 10, what is the value of top when the stack is full?",
          options: [
            "a) -1",
            "b) 0",
            "c) 9",
            "d) 10"
          ],
          answer: "c) 9"
        },
        {
          id: "DSA-W5-MCC-009",
          question: "In the postfix expression 5 9 3 + 4 2 * * 7 + *, how many numerical operands are present that will be pushed onto the stack initially?",
          options: [
            "a) 6",
            "b) 7",
            "c) 8",
            "d) 9"
          ],
          answer: "a) 6"
        },
        {
          id: "DSA-W5-MCC-010",
          question: "What is the result of evaluating the postfix expression 5 9 3 + 4 2 * * 7 + *?",
          options: [
            "a) 515",
            "b) 103",
            "c) 96",
            "d) 12"
          ],
          answer: "a) 515"
        }
      ]
    },
    "Week 6-8: Tree ADTs": {
  "Multiple Choice": [
    {
      id: "DSA-W6-MC-001",
      question: "Which of the following is NOT a property of a tree data structure?",
      options: [
        "a) Hierarchical structure",
        "b) Each node has exactly one parent except the root",
        "c) Nodes may have multiple children",
        "d) Contains cycles between nodes"
      ],
      answer: "d) Contains cycles between nodes"
    },
    {
      id: "DSA-W6-MC-002",
      question: "What is the root node in a tree?",
      options: [
        "a) The node with the maximum value",
        "b) The node with no children",
        "c) The topmost node with no parent",
        "d) The node with the most children"
      ],
      answer: "c) The topmost node with no parent"
    },
    {
      id: "DSA-W6-MC-003",
      question: "What is a leaf node in a tree?",
      options: [
        "a) A node with no children",
        "b) A node with exactly one child",
        "c) The root node",
        "d) A node with the maximum value"
      ],
      answer: "a) A node with no children"
    },
    {
      id: "DSA-W6-MC-004",
      question: "Which tree traversal visits nodes in the order: root, left subtree, right subtree?",
      options: [
        "a) In-order",
        "b) Pre-order",
        "c) Post-order",
        "d) Level-order"
      ],
      answer: "b) Pre-order"
    },
    {
      id: "DSA-W6-MC-005",
      question: "What is the height of a tree?",
      options: [
        "a) The number of nodes in the tree",
        "b) The number of edges from root to the deepest leaf",
        "c) The number of leaves in the tree",
        "d) The number of levels in the tree"
      ],
      answer: "b) The number of edges from root to the deepest leaf"
    },
    {
      id: "DSA-W6-MC-006",
      question: "What is a binary tree?",
      options: [
        "a) A tree where each node has exactly two children",
        "b) A tree where each node has at most two children",
        "c) A tree with exactly two levels",
        "d) A tree that can only store binary values"
      ],
      answer: "b) A tree where each node has at most two children"
    },
    {
      id: "DSA-W6-MC-007",
      question: "What is the main advantage of a binary search tree (BST)?",
      options: [
        "a) Constant time insertion and deletion",
        "b) Efficient searching with O(log n) time complexity in balanced trees",
        "c) Unlimited node storage capacity",
        "d) Automatic balancing of nodes"
      ],
      answer: "b) Efficient searching with O(log n) time complexity in balanced trees"
    },
    {
      id: "DSA-W6-MC-008",
      question: "What is an AVL tree?",
      options: [
        "a) A binary tree with no more than two children per node",
        "b) A self-balancing binary search tree",
        "c) A tree where all leaves are at the same level",
        "d) A tree that can only store numeric values"
      ],
      answer: "b) A self-balancing binary search tree"
    },
    {
      id: "DSA-W6-MC-009",
      question: "What is the balance factor of a node in an AVL tree?",
      options: [
        "a) The difference between left and right subtree heights",
        "b) The number of children a node has",
        "c) The depth of the node from the root",
        "d) The value stored in the node"
      ],
      answer: "a) The difference between left and right subtree heights"
    },
    {
      id: "DSA-W6-MC-010",
      question: "What is a B-tree?",
      options: [
        "a) A binary tree with additional properties",
        "b) A self-balancing tree data structure that maintains sorted data",
        "c) A tree where each node has exactly B children",
        "d) A special type of binary search tree"
      ],
      answer: "b) A self-balancing tree data structure that maintains sorted data"
    }
  ],
  "Multiple Choice Analyzation": [
    {
      id: "DSA-W6-MCA-001",
      question: "A file system needs to store directory structures where each directory can contain multiple subdirectories. Which data structure would be most appropriate?",
      options: [
        "a) Array",
        "b) Linked List",
        "c) Tree",
        "d) Stack"
      ],
      answer: "c) Tree"
    },
    {
      id: "DSA-W6-MCA-002",
      question: "When implementing a binary search tree, what would be the consequence of inserting elements in sorted order without balancing?",
      options: [
        "a) The tree would become perfectly balanced",
        "b) The tree would degenerate into a linked list",
        "c) The tree would automatically rebalance",
        "d) The tree would become a complete binary tree"
      ],
      answer: "b) The tree would degenerate into a linked list"
    },
    {
      id: "DSA-W6-MCA-003",
      question: "In a database system that needs to maintain indexes for efficient searching, which tree structure would be most suitable?",
      options: [
        "a) Binary Search Tree",
        "b) AVL Tree",
        "c) B-Tree",
        "d) Binary Tree"
      ],
      answer: "c) B-Tree"
    },
    {
      id: "DSA-W6-MCA-004",
      question: "What is the primary reason for using an AVL tree instead of a regular binary search tree?",
      options: [
        "a) AVL trees have faster insertion operations",
        "b) AVL trees guarantee O(log n) search time by maintaining balance",
        "c) AVL trees use less memory",
        "d) AVL trees can store more data per node"
      ],
      answer: "b) AVL trees guarantee O(log n) search time by maintaining balance"
    },
    {
      id: "DSA-W6-MCA-005",
      question: "When would a B-tree be preferred over a binary search tree for disk storage?",
      options: [
        "a) When the data size is very small",
        "b) When minimizing disk I/O operations is critical",
        "c) When memory usage needs to be minimized",
        "d) When the tree needs to be perfectly balanced"
      ],
      answer: "b) When minimizing disk I/O operations is critical"
    },
    {
      id: "DSA-W6-MCA-006",
      question: "What is the time complexity of searching in a balanced binary search tree with n nodes?",
      options: [
        "a) O(1)",
        "b) O(log n)",
        "c) O(n)",
        "d) O(n log n)"
      ],
      answer: "b) O(log n)"
    },
    {
      id: "DSA-W6-MCA-007",
      question: "In a binary tree, if the in-order and pre-order traversals are known, what can be determined?",
      options: [
        "a) The exact structure of the tree",
        "b) Only the root node",
        "c) Only the leaf nodes",
        "d) The height of the tree"
      ],
      answer: "a) The exact structure of the tree"
    },
    {
      id: "DSA-W6-MCA-008",
      question: "What rotation operation would be needed to balance an AVL tree when the left subtree of the left child is too tall?",
      options: [
        "a) Left rotation",
        "b) Right rotation",
        "c) Left-right rotation",
        "d) Right-left rotation"
      ],
      answer: "b) Right rotation"
    },
    {
      id: "DSA-W6-MCA-009",
      question: "Why are B-trees commonly used in database systems?",
      options: [
        "a) They have better cache performance",
        "b) They minimize the number of disk accesses by having higher branching factor",
        "c) They are easier to implement than binary trees",
        "d) They require less memory than other tree structures"
      ],
      answer: "b) They minimize the number of disk accesses by having higher branching factor"
    },
    {
      id: "DSA-W6-MCA-010",
      question: "What is the main difference between a binary tree and a binary search tree?",
      options: [
        "a) Binary trees can have more than two children per node",
        "b) Binary search trees have an ordering property",
        "c) Binary trees are always balanced",
        "d) Binary search trees cannot have duplicate values"
      ],
      answer: "b) Binary search trees have an ordering property"
    }
  ],
  "Multiple Choice Fill in the Blanks": [
    {
      id: "DSA-W6-MCF-001",
      question: "A ______ is a non-linear data structure that represents a hierarchical relationship between elements.",
      options: [
        "a) Array",
        "b) Tree",
        "c) Stack",
        "d) Queue"
      ],
      answer: "b) Tree"
    },
    {
      id: "DSA-W6-MCF-002",
      question: "In a tree, the ______ is the node with no parent.",
      options: [
        "a) Leaf",
        "b) Child",
        "c) Root",
        "d) Sibling"
      ],
      answer: "c) Root"
    },
    {
      id: "DSA-W6-MCF-003",
      question: "A ______ traversal visits the left subtree, then the root, then the right subtree.",
      options: [
        "a) Pre-order",
        "b) In-order",
        "c) Post-order",
        "d) Level-order"
      ],
      answer: "b) In-order"
    },
    {
      id: "DSA-W6-MCF-004",
      question: "An ______ tree is a self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one.",
      options: [
        "a) AVL",
        "b) Red-Black",
        "c) Splay",
        "d) B"
      ],
      answer: "a) AVL"
    },
    {
      id: "DSA-W6-MCF-005",
      question: "A ______ is a tree where each node has at most two children.",
      options: [
        "a) Binary tree",
        "b) Ternary tree",
        "c) N-ary tree",
        "d) Complete tree"
      ],
      answer: "a) Binary tree"
    },
    {
      id: "DSA-W6-MCF-006",
      question: "In a binary search tree, for any given node, all values in the left subtree are ______ than the node's value.",
      options: [
        "a) Greater",
        "b) Less",
        "c) Equal",
        "d) Unrelated"
      ],
      answer: "b) Less"
    },
    {
      id: "DSA-W6-MCF-007",
      question: "A ______ is a node with no children in a tree.",
      options: [
        "a) Root",
        "b) Internal node",
        "c) Leaf",
        "d) Branch"
      ],
      answer: "c) Leaf"
    },
    {
      id: "DSA-W6-MCF-008",
      question: "The ______ of a node is the number of edges from the node to the deepest leaf.",
      options: [
        "a) Depth",
        "b) Height",
        "c) Level",
        "d) Degree"
      ],
      answer: "b) Height"
    },
    {
      id: "DSA-W6-MCF-009",
      question: "A ______ is a balanced tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.",
      options: [
        "a) Binary tree",
        "b) B-tree",
        "c) Heap",
        "d) Trie"
      ],
      answer: "b) B-tree"
    },
    {
      id: "DSA-W6-MCF-010",
      question: "A ______ tree is a binary tree in which all levels are completely filled except possibly the last level, which is filled from left to right.",
      options: [
        "a) Perfect",
        "b) Complete",
        "c) Full",
        "d) Balanced"
      ],
      answer: "b) Complete"
    }
  ],
  "Multiple Choice Computation": [
    {
      id: "DSA-W6-MCC-001",
      question: "How many nodes are in a full binary tree with height 3?",
      options: [
        "a) 7",
        "b) 8",
        "c) 15",
        "d) 16"
      ],
      answer: "c) 15"
    },
    {
      id: "DSA-W6-MCC-002",
      question: "What is the maximum number of nodes at level 4 in a binary tree?",
      options: [
        "a) 4",
        "b) 8",
        "c) 16",
        "d) 32"
      ],
      answer: "c) 16"
    },
    {
      id: "DSA-W6-MCC-003",
      question: "If a binary tree has 10 leaf nodes, what is the minimum number of nodes it can have?",
      options: [
        "a) 10",
        "b) 19",
        "c) 21",
        "d) 31"
      ],
      answer: "b) 19"
    },
    {
      id: "DSA-W6-MCC-004",
      question: "What is the minimum height of a binary tree with 63 nodes?",
      options: [
        "a) 5",
        "b) 6",
        "c) 7",
        "d) 8"
      ],
      answer: "b) 6"
    },
    {
      id: "DSA-W6-MCC-005",
      question: "In an AVL tree with 7 nodes, what is the maximum possible height?",
      options: [
        "a) 2",
        "b) 3",
        "c) 4",
        "d) 5"
      ],
      answer: "b) 3"
    },
    {
      id: "DSA-W6-MCC-006",
      question: "How many different binary trees can be formed with 3 nodes?",
      options: [
        "a) 3",
        "b) 5",
        "c) 7",
        "d) 9"
      ],
      answer: "b) 5"
    },
    {
      id: "DSA-W6-MCC-007",
      question: "What is the balance factor of a node whose left subtree has height 4 and right subtree has height 2?",
      options: [
        "a) -2",
        "b) 2",
        "c) 6",
        "d) -6"
      ],
      answer: "b) 2"
    },
    {
      id: "DSA-W6-MCC-008",
      question: "In a complete binary tree with 100 nodes, how many nodes are leaves?",
      options: [
        "a) 50",
        "b) 51",
        "c) 49",
        "d) 100"
      ],
      answer: "a) 50"
    },
    {
      id: "DSA-W6-MCC-009",
      question: "What is the maximum number of nodes in a binary tree of height 5?",
      options: [
        "a) 31",
        "b) 32",
        "c) 63",
        "d) 64"
      ],
      answer: "c) 63"
    },
    {
      id: "DSA-W6-MCC-010",
      question: "In a B-tree of order 5, what is the maximum number of children a node can have?",
      options: [
        "a) 4",
        "b) 5",
        "c) 6",
        "d) 7"
      ],
      answer: "b) 5"
     }
    ]
  }
}
 };


export default questionBank;