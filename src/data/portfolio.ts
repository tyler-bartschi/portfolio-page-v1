export type Link = {
  label: string;
  href: string;
};

export type Intro = {
  name: string;
  title: string;
  eyebrow: string;
  description: string;
  email: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks: Link[];
};

export type Project = {
  name: string;
  inProgress: boolean;
  description: string;
  githubUrl: string;
  importantTechnologies: string[];
  otherTechnologies: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
};

export type Experience = {
  role: string;
  organization: string;
  dates: string;
  accomplishments: string[];
};

export type SkillGroup = {
  category: string;
  skills: Array<{ name: string; description?: string }>;
};

export type Education = {
  university: string;
  degree: string;
  graduation: string;
  gpa: string;
  courses: Array<{ name: string; description: string }>;
};

// All copy below is presentation-only placeholder content. Replace it with verified
// personal information; no component or stylesheet changes are required.
export const intro: Intro = {
  name: "Tyler Bartschi",
  title: "Computer Science Student",
  eyebrow: "Aspiring software engineer · Open to internships",
  description:
    "I'm a highly curious individual who loves to learn and to build clean, solid software.",
  email: "tylerabartschi@gmail.com",
  profileImage: "/profile_picture.jpeg",
  resumeUrl: "/resume-placeholder.pdf",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/tyler-bartschi" },
    { label: "LinkedIn", href: "www.linkedin.com/in/tyler-bartschi-773450202" },
  ],
};

export const projects: Project[] = [
  {
    name: "Almost-Codex",
    inProgress: false,
    description:
      "An AI agent framework built around OpenAI's API that can build for you - almost like Codex (or Claude Code).",
    githubUrl: "https://github.com/tyler-bartschi/almost-codex",
    importantTechnologies: ["TypeScript", "Docker"],
    otherTechnologies: ["Jest"],
    highlights: [
      "Built as a CLI tool so that you can launch it from any terminal, including within your IDE.",
      "Includes built-in safeguards that allow you to choose which files your agent can modify, as well as asking for permission before risky actions.",
      "Makes use of prompt engineering to refine agent personality and behavior - tailored to the task at hand.",
    ],
  },
  {
    name: "Agent Status",
    inProgress: false,
    description:
      "An indicator tool designed for MacBooks that shows you the status of each of your running agents in Codex or Claude Code.",
    githubUrl: "https://github.com/tyler-bartschi/agent-status",
    importantTechnologies: ["Swift", "Agent Hooks"],
    otherTechnologies: [],
    highlights: [
      "Designed around the MacBook notch, so that indicators stay minimal but easily noticeable",
      "Consists of three indicator statuses that I've found most useful: Working, Waiting (for input), and Finished (temporary indication). Prioritizes showing you the agents waiting for input.",
      "Can track and display multiple agent sessions across the Codex CLI, the Codex desktop app, and the Claude Code CLI",
    ],
    image: "./agent-status-screenshot.png",
    imageAlt: "Image of the agent status indicators",
  },
  {
    name: "Cookbook",
    inProgress: true,
    description:
      "A recipe website designed for a user to be able to upload, browse, and save recipes.",
    githubUrl: "https://github.com/tyler-bartschi/cookbook-app",
    importantTechnologies: [
      "TypeScript",
      "React",
      "AWS Lambda",
      "AWS CloudFront",
      "AWS DynamoDB",
    ],
    otherTechnologies: [
      "CSS",
      "Jest",
      "GitHub Actions",
      "AWS SAM",
      "AWS S3",
      "AWS CloudFormation",
      "AWS API Gateway",
    ],
    highlights: [
      "Uses a fully custom-built auth system, with password encryption, long-term (remember me) and short-term auth tokens, and the ability to update user data",
      "Built out a CI/CD pipeline with automated testing and deployment to AWS services",
      "I chose to write most of the code myself because I enjoy writing code, using AI mainly as a reference and assistant, not as the primary code-writer.",
    ],
  },
  {
    name: "bad_zip",
    inProgress: true,
    description:
      "A CLI compression tool that uses Huffman Encoding, named bad_zip because the goal is to be similar to the zip utility, except not quite as good (no LZ compressin)",
    githubUrl: "https://github.com/tyler-bartschi/bad_zip",
    importantTechnologies: ["C++", "CMake", "Catch2"],
    otherTechnologies: [],
    highlights: [
      "Will implement Huffman Encoding at the byte-level, enabling compression of all regular file types",
      "Designed to work with both individual files and directories",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Head Teaching Assistant",
    organization: "Brigham Young University",
    dates: "September 2025 - Current",
    accomplishments: [
      "Head Teaching Assistant for the How to Program class at BYU, continuing with all previous duties as a Teaching Assistant.",
      "Greater involvement in updating and maintaining course content on Canvas, as well as maintaining Docker images used in the class autograder (Gradescope).",
      "Assisted in transitioning course content from a custom webpage to a Canvas-based system.",
    ],
  },
  {
    role: "Full-Stack Software Developer Intern",
    organization: "Trustybits",
    dates: "January 2026 - July 2026",
    accomplishments: [
      "Redesigned the user-facing cloud storage system (using Google Cloud), resulting in a 30% reduction in overall storage used, as well as accurate per-user limit tracking and better user control over uploaded files.",
      "Highly involved in designing and building CI/CD pipelines, including automated testing and cloud deployment, as well as custom cross-repository connection tools.",
      "Designed and built a first-party analytics system for tracking business and user-facing metrics.",
      "Participated in major codebase refactors and redesigns to increase code readability and maintainability.",
    ],
  },
  {
    role: "Teaching Assistant",
    organization: "Brigham Young University",
    dates: "September 2024 - September 2025",
    accomplishments: [
      "Teaching Assistant for the introductory How to Program class at BYU, involved in providing peer-to-peer assistance on assignments and projects.",
      "Assisted in maintaining the class webpage, viewed by 500+ students per semester.",
      "Led a twice-weekly lab session, promoting student collaboration and learning.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      {
        name: "TypeScript",
        description: "Used extensively for full-stack web programming.",
      },
      {
        name: "Python",
        description:
          "Language of choice for LeetCode-style algorithmic problems, and the first language I learned",
      },
      {
        name: "Java",
        description:
          "Used to design and build a CLI client and associated server in Javalin",
      },
      {
        name: "C++",
        description: "Experience in C++ building data structures and CLI tools",
      },
      {
        name: "C",
      },
    ],
  },
  {
    category: "Web & Tools",
    skills: [
      {
        name: "React",
        description: "",
      },
      {
        name: "Vue",
        description:
          "Used Vue extensively to build products at my last internship",
      },
      {
        name: "Git",
        description:
          "Experience working with both branches and worktrees; and working in a GUI or CLI environment.",
      },
      {
        name: "GitHub",
        description:
          "Experience with PR processes, GitHub Actions, and organization tools such as branch protections.",
      },
      {
        name: "AWS",
        description:
          "Have used a variety of services in AWS, including: Lambda, DynamoDB, SQS, CloudFront, CloudFormation, SAM, S3, API Gateway, EC2, and Route53.",
      },
      {
        name: "Google Cloud and Firebase",
        description:
          "Experience using Firestore and Google Cloud Storage buckets.",
      },
      {
        name: "Linux and Unix",
        description: "Moderate familiarity and usage with Unix CLI tools",
      },
      { name: "Docker",
        description: "Moderate familiary with using Docker; including to run code within a safe environment (see Almost-Codex)."
      }
    ],
  },
  {
    category: "Foundations",
    skills: [
      {
        name: "Agent Engineering",
        description:
          "Experience designing and building tools that leverage AI models using prompt engineering, tool-calling, RAG, etc.",
      },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Object-Oriented Design" },
      {
        name: "Testing",
        description:
          "Experience designing and building unit and integration tests using frameworks like pytest, jest, catch2, and junit.",
      },
    ],
  },
];

export const education: Education = {
  university: "Brigham Young University",
  degree: "Bachelor of Science in Computer Science",
  graduation: "Expected December 2027",
  gpa: "GPA: 4.00",
  courses: [
    {
      name: "Agent Engineering",
      description:
        "Learning the principles behind tools like Codex or Claude, as well as desinging and building agent-focused systems, using tool-calling, RAG, and prompt engineering.",
    },
    {
      name: "Algorithm Design and Analysis",
      description:
        "Algorithmic design using principles like Dynamic Programming and Divide and Conquer; analysis of those algorithms using thoeretical and empirical Big-O.",
    },
    {
      name: "Software Design",
      description: "Object-Oriented design principles.",
    },
    {
      name: "Data Structures & Algorithms",
      description:
        "Analysis and implementation of foundational algorithms and structures, including Quicksort and AVL trees.",
    },
    {
      name: "Discrete Structure",
      description:
        "Predicate and propositional logic; Parsing and Interpreting a program.",
    },
    {
      name: "Computer Systems",
      description:
        "Introduction to Assembly (x86) and low-level computer operations.",
    },
  ],
};

export const about =
  "I am a computer science student who has a deep interest in the complexities of computers, systems, and how things work. I also enjoy reading, swimming, driving, and good food. I deeply value my family, friends, and the impact that they have had on me and my life.";
