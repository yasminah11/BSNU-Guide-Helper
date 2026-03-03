export interface Course {
  code: string;
  name: string;
  creditHours: number;
  prerequisites: string[];
  category: string;
  program: "shared" | "ai" | "cyber";
  type: "mandatory" | "elective" | "lab" | "capstone" | "training";
}

export const courses: Course[] = [
  // ===== UNIVERSITY REQUIREMENTS (shared) =====
  { code: "UNHS 1101", name: "General English Language", creditHours: 3, prerequisites: [], category: "University Requirements", program: "shared", type: "mandatory" },
  { code: "UNHS 1102", name: "Human Rights and Fight Against Corruption", creditHours: 2, prerequisites: [], category: "University Requirements", program: "shared", type: "mandatory" },
  { code: "UNHS EE07", name: "Technical Writing", creditHours: 2, prerequisites: [], category: "University Requirements", program: "shared", type: "mandatory" },
  { code: "UNHS EE01", name: "Scientific Thinking", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE02", name: "Philosophical Thinking", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE03", name: "Critical Thinking", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE04", name: "Leadership and Management", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE15", name: "Digital Culture", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE13", name: "Psychology", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE08", name: "Occupational Risk and Safety Management", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE09", name: "Environmental Culture", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE10", name: "Communication and Presentation Skills", creditHours: 2, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE14", name: "Entrepreneurship", creditHours: 3, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE11", name: "Accounting", creditHours: 3, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE12", name: "Economics", creditHours: 3, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE05", name: "Principles of Management and Marketing", creditHours: 3, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },
  { code: "UNHS EE06", name: "English for Academic Purposes", creditHours: 3, prerequisites: [], category: "University Electives", program: "shared", type: "elective" },

  // ===== MATH & BASIC SCIENCES (shared) =====
  { code: "UCMA 1101", name: "Mathematics I", creditHours: 3, prerequisites: [], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCMA 1202", name: "Mathematics II", creditHours: 3, prerequisites: ["UCMA 1101"], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCCS 1201", name: "Discrete Structures", creditHours: 3, prerequisites: ["UCMA 1101"], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCCS 1103", name: "Electronics-1", creditHours: 3, prerequisites: [], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCCS 2204", name: "Numerical Analysis", creditHours: 3, prerequisites: ["UCMA 1101"], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCMA 1102", name: "Probability and Statistics-1", creditHours: 2, prerequisites: ["UCMA 1101"], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCCS 2201", name: "Number Theory", creditHours: 3, prerequisites: ["UCMA 1202"], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCCS 1202", name: "Digital Electronics & Logic Design", creditHours: 3, prerequisites: ["UCCS 1103"], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },
  { code: "UCMA 2103", name: "Probability and Statistics-2", creditHours: 2, prerequisites: ["UCMA 1102"], category: "Mathematics & Basic Sciences", program: "shared", type: "mandatory" },

  // ===== AI PROGRAM - CS CORE =====
  { code: "UCCS 1104", name: "Fundamentals of Computers", creditHours: 3, prerequisites: [], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UCCS 2104", name: "Structured Programming", creditHours: 3, prerequisites: ["UCCS 1104"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UCCS 2105", name: "Object Oriented Programming", creditHours: 3, prerequisites: ["UCCS 2104"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UCCS 2206", name: "Data Structures", creditHours: 3, prerequisites: ["UCCS 2105"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UUCS 2101", name: "Operating Systems", creditHours: 3, prerequisites: ["UCCS 2206"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UCIT 2101", name: "Data Communication", creditHours: 3, prerequisites: ["UCCS 1103"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UCIS 2101", name: "Database Systems", creditHours: 3, prerequisites: ["UCCS 2105"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UCIT 2102", name: "Computer Networks", creditHours: 3, prerequisites: ["UCIT 2101"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UCCS 3204", name: "Algorithms Analysis & Design", creditHours: 3, prerequisites: ["UCCS 2206"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UAAI 3101", name: "Introduction to Artificial Intelligence", creditHours: 3, prerequisites: ["UCCS 2206"], category: "Computer Science Core", program: "ai", type: "mandatory" },
  { code: "UAAI 2101", name: "Introduction to Data Science and Analytics", creditHours: 3, prerequisites: ["UCCS 2104"], category: "Computer Science Core", program: "ai", type: "mandatory" },

  // ===== AI PROGRAM - CS ELECTIVES =====
  { code: "UCCS 2203", name: "Theory of Computations", creditHours: 3, prerequisites: ["UCCS 1201"], category: "CS Electives (AI)", program: "ai", type: "elective" },
  { code: "UCIS 2201", name: "Geographical Information Systems", creditHours: 3, prerequisites: ["UCIS 2101"], category: "CS Electives (AI)", program: "ai", type: "elective" },
  { code: "UCIS 2202", name: "Introduction to Distributed Database Systems", creditHours: 3, prerequisites: ["UCIS 2101"], category: "CS Electives (AI)", program: "ai", type: "elective" },
  { code: "UCCS 1207", name: "Web Technology", creditHours: 2, prerequisites: ["UCCS 1104"], category: "CS Electives (AI)", program: "ai", type: "elective" },
  { code: "UCIS 2204", name: "Software Engineering", creditHours: 2, prerequisites: ["UCCS 2104"], category: "CS Electives (AI)", program: "ai", type: "elective" },
  { code: "UCIS 3204", name: "Usability Engineering", creditHours: 2, prerequisites: ["UCIS 2204"], category: "CS Electives (AI)", program: "ai", type: "elective" },
  { code: "UCIS 3205", name: "Service-Oriented Architecture", creditHours: 2, prerequisites: ["UCCS 2105"], category: "CS Electives (AI)", program: "ai", type: "elective" },

  // ===== AI PROGRAM - SPECIALIZATION MANDATORY =====
  { code: "UAAI 3102", name: "Data Mining and Predictive Analytics", creditHours: 3, prerequisites: ["UCIS 2101"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 3103", name: "Machine Learning", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 3204", name: "Deep Learning", creditHours: 3, prerequisites: ["UAAI 3103"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 3105", name: "Natural Language Processing", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 3106", name: "Intelligent Agents", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 3104", name: "Big Data Analytics", creditHours: 3, prerequisites: ["UCIS 2101"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 4203", name: "Data Analytics Programming", creditHours: 3, prerequisites: ["UAAI 3104"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 4204", name: "Computer Vision", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 4205", name: "Web & Social Media Analytics", creditHours: 3, prerequisites: ["UCCS 1207"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 4105", name: "Robotics", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Specialization", program: "ai", type: "mandatory" },
  { code: "UAAI 4106", name: "Forecasting and Predictive Analytics", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Specialization", program: "ai", type: "mandatory" },

  // ===== AI PROGRAM - SPECIALIZATION ELECTIVES =====
  { code: "UAAI EE01", name: "Fuzzy Logic and Intelligent Systems", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE02", name: "Cloud Computing", creditHours: 3, prerequisites: ["UCCS 2206"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE07", name: "Bioinformatics", creditHours: 3, prerequisites: ["UCCS 3204"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE10", name: "Mobile Application Development", creditHours: 3, prerequisites: ["UCCS 2206"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE11", name: "Theory of Computation", creditHours: 3, prerequisites: ["UAAI 3101"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE12", name: "Spatial Data Mining", creditHours: 3, prerequisites: ["UAAI 3102"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE18", name: "Data Visualization and Dashboards", creditHours: 3, prerequisites: ["UCIS 2101"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE13", name: "Blockchain Technologies", creditHours: 2, prerequisites: [], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE19", name: "Information Retrieval", creditHours: 2, prerequisites: ["UUCS 2101"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE23", name: "Business Intelligence", creditHours: 2, prerequisites: ["UAAI 3101"], category: "AI Electives", program: "ai", type: "elective" },
  { code: "UAAI EE24", name: "Knowledge Management", creditHours: 2, prerequisites: ["UAAI 3101"], category: "AI Electives", program: "ai", type: "elective" },

  // ===== AI PROGRAM - LABS =====
  { code: "Lab441", name: "Artificial Intelligence Lab", creditHours: 2, prerequisites: ["UAAI 3101"], category: "AI Labs", program: "ai", type: "lab" },
  { code: "Lab442", name: "Deep Learning Lab", creditHours: 2, prerequisites: ["UAAI 3204"], category: "AI Labs", program: "ai", type: "lab" },
  { code: "Lab443", name: "Data Visualization Lab", creditHours: 3, prerequisites: ["UAAI 4106"], category: "AI Labs", program: "ai", type: "lab" },
  { code: "Lab444", name: "Big Data and Data Science Lab", creditHours: 3, prerequisites: ["UAAI 3104"], category: "AI Labs", program: "ai", type: "lab" },

  // ===== AI PROGRAM - CAPSTONE =====
  { code: "UCAI 4260", name: "Capstone Project", creditHours: 6, prerequisites: [], category: "Capstone Project", program: "ai", type: "capstone" },

  // ===== CYBER SECURITY PROGRAM - CS CORE =====
  { code: "UCCS 1003", name: "Fundamentals of Computers", creditHours: 3, prerequisites: [], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "UCCS 1102", name: "Structured Programming", creditHours: 3, prerequisites: ["UCCS 1003"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "UCCS 2205", name: "Object Oriented Programming", creditHours: 3, prerequisites: ["UCCS 1102"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "CS UCCS 2206", name: "Data Structures", creditHours: 3, prerequisites: ["UCCS 2205"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "UCCS 2103", name: "Operating Systems", creditHours: 3, prerequisites: ["CS UCCS 2206"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "CS UCIT 2101", name: "Data Communication", creditHours: 3, prerequisites: ["UCCS 1103"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "CS UCIS 2101", name: "Database Systems", creditHours: 3, prerequisites: ["UCCS 2205"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "CS UCIT 2102", name: "Computer Networks", creditHours: 3, prerequisites: ["CS UCIT 2101"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "CS UCCS 2203", name: "Computer Architecture", creditHours: 3, prerequisites: ["UCCS 1202"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "CS UCCS 3204", name: "Algorithms Analysis & Design", creditHours: 3, prerequisites: ["CS UCCS 2206"], category: "Computer Science Core", program: "cyber", type: "mandatory" },
  { code: "UCCS 2106", name: "Signals Processing", creditHours: 3, prerequisites: ["UCMA 1202"], category: "Computer Science Core", program: "cyber", type: "mandatory" },

  // ===== CYBER SECURITY - CS ELECTIVES =====
  { code: "UCCS 2107", name: "Concepts of Programming Languages", creditHours: 3, prerequisites: ["CS UCCS 2206"], category: "CS Electives (Cyber)", program: "cyber", type: "elective" },
  { code: "UCCS 3105", name: "Artificial Intelligence", creditHours: 3, prerequisites: ["CS UCCS 2206"], category: "CS Electives (Cyber)", program: "cyber", type: "elective" },
  { code: "CS UCCS 1207", name: "Fundamentals of Information Systems", creditHours: 2, prerequisites: ["UCCS 1003"], category: "CS Electives (Cyber)", program: "cyber", type: "elective" },
  { code: "UCCS 4108", name: "Web Technology", creditHours: 2, prerequisites: ["UCCS 2205"], category: "CS Electives (Cyber)", program: "cyber", type: "elective" },
  { code: "UCCS 3205", name: "Assembly Language", creditHours: 2, prerequisites: ["UCCS 1102"], category: "CS Electives (Cyber)", program: "cyber", type: "elective" },
  { code: "UCCS 3106", name: "Software Engineering", creditHours: 2, prerequisites: ["CS UCCS 2206"], category: "CS Electives (Cyber)", program: "cyber", type: "elective" },
  { code: "UCCS 3206", name: "Compilers", creditHours: 2, prerequisites: ["CS UCCS 2206"], category: "CS Electives (Cyber)", program: "cyber", type: "elective" },

  // ===== CYBER SECURITY - SPECIALIZATION MANDATORY =====
  { code: "UCCE 3209", name: "Network Security", creditHours: 3, prerequisites: ["CS UCIT 2102"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE 3221", name: "Cryptography", creditHours: 3, prerequisites: ["UCCS 2201"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCS 3107", name: "Introduction to Cyber-Security", creditHours: 3, prerequisites: ["UCCE 3221"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE 3212", name: "Software Security", creditHours: 3, prerequisites: ["UCCS 3107"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE 3222", name: "Introduction to Cyber Attacks", creditHours: 3, prerequisites: ["UCCS 3107"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE 3223", name: "Real-Time Auditing & Defense", creditHours: 3, prerequisites: ["UCCS 3107"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE 4104", name: "Hardware Security", creditHours: 3, prerequisites: ["CS UCCS 2203"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE 4101", name: "Cyber Attack Countermeasures", creditHours: 3, prerequisites: ["UCCE 3222"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE40", name: "Ethical Hacking", creditHours: 3, prerequisites: ["UCCE 3223"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },
  { code: "UCCE 4207", name: "Penetration Testing & Vulnerabilities Discovery", creditHours: 3, prerequisites: ["UCCE 3222"], category: "Cyber Security Specialization", program: "cyber", type: "mandatory" },

  // ===== CYBER SECURITY - SPECIALIZATION ELECTIVES =====
  { code: "UCCE 3211", name: "Usable Security", creditHours: 3, prerequisites: ["UCCS 2106"], category: "Cyber Security Electives", program: "cyber", type: "elective" },
  { code: "UCCE 4105", name: "Advanced Cryptography", creditHours: 3, prerequisites: ["UCCE 3221"], category: "Cyber Security Electives", program: "cyber", type: "elective" },
  { code: "UCCE 4221", name: "Blockchain & Cryptocurrencies", creditHours: 3, prerequisites: ["UCCE 3221"], category: "Cyber Security Electives", program: "cyber", type: "elective" },
  { code: "UCCE 4224", name: "Cyber Security for Internet of Things", creditHours: 3, prerequisites: ["UCCS 3107"], category: "Cyber Security Electives", program: "cyber", type: "elective" },
  { code: "UCCE EE41", name: "Cryptanalysis", creditHours: 3, prerequisites: ["UCCE 4105"], category: "Cyber Security Electives", program: "cyber", type: "elective" },
  { code: "UCCE 4102", name: "Threat Detection and Mitigation", creditHours: 2, prerequisites: ["UCCE 3223"], category: "Cyber Security Electives", program: "cyber", type: "elective" },
  { code: "UCCE 3106", name: "Reverse Engineering & Disassemblers", creditHours: 2, prerequisites: ["CS UCCS 2206"], category: "Cyber Security Electives", program: "cyber", type: "elective" },
  { code: "UCCE EE50", name: "Firewalls and Web Application Firewall", creditHours: 2, prerequisites: ["UCCS 3107"], category: "Cyber Security Electives", program: "cyber", type: "elective" },

  // ===== CYBER SECURITY - LABS =====
  { code: "LAB301", name: "Networking Fundamentals Lab", creditHours: 2, prerequisites: ["CS UCIT 2102"], category: "Cyber Security Labs", program: "cyber", type: "lab" },
  { code: "LAB302", name: "Selected Labs in Networks-1", creditHours: 2, prerequisites: ["CS UCIT 2102"], category: "Cyber Security Labs", program: "cyber", type: "lab" },
  { code: "CS LAB443", name: "Selected Labs in Networks-2", creditHours: 2, prerequisites: ["CS UCIT 2102"], category: "Cyber Security Labs", program: "cyber", type: "lab" },
  { code: "LAB444", name: "Computer Networks Defense", creditHours: 2, prerequisites: ["UCCE 3221"], category: "Cyber Security Labs", program: "cyber", type: "lab" },
  { code: "LAB445", name: "Ethical Hacking Lab", creditHours: 2, prerequisites: ["UCCE40"], category: "Cyber Security Labs", program: "cyber", type: "lab" },

  // ===== CYBER SECURITY - CAPSTONE =====
  { code: "UCCE 4260", name: "Capstone Project", creditHours: 6, prerequisites: [], category: "Capstone Project", program: "cyber", type: "capstone" },
];

// Build a lookup map for quick access
export const courseMap = new Map<string, Course>();
courses.forEach((c) => courseMap.set(c.code, c));

// Find all courses that directly depend on a given course
export function getDependents(courseCode: string): Course[] {
  return courses.filter((c) => c.prerequisites.includes(courseCode));
}

// Get all prerequisites (recursive)
export function getAllPrerequisites(courseCode: string): Course[] {
  const result: Course[] = [];
  const visited = new Set<string>();

  function traverse(code: string) {
    const course = courseMap.get(code);
    if (!course) return;
    for (const prereq of course.prerequisites) {
      if (!visited.has(prereq)) {
        visited.add(prereq);
        const prereqCourse = courseMap.get(prereq);
        if (prereqCourse) {
          result.push(prereqCourse);
          traverse(prereq);
        }
      }
    }
  }

  traverse(courseCode);
  return result;
}

// Get all dependents (recursive) - courses that will be locked
export function getAllDependents(courseCode: string): Course[] {
  const result: Course[] = [];
  const visited = new Set<string>();

  function traverse(code: string) {
    const deps = getDependents(code);
    for (const dep of deps) {
      if (!visited.has(dep.code)) {
        visited.add(dep.code);
        result.push(dep);
        traverse(dep.code);
      }
    }
  }

  traverse(courseCode);
  return result;
}

export function getFilteredCourses(program: "all" | "ai" | "cyber"): Course[] {
  if (program === "all") return courses;
  return courses.filter((c) => c.program === "shared" || c.program === program);
}
