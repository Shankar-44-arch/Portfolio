export const aboutData = {
  philosophy: [
    "I’m a pre-final year Computer Science student who enjoys solving complex backend problems and building reliable systems. I specialize in developing scalable web services using Python, Java, and modern database tools, focusing on clean code and efficient database schemas.",
    "I love understanding how things work under the hood whether that's optimizing query performance, debugging bottlenecks, or structuring RESTful APIs. I’m always eager to collaborate on real-world engineering projects and expand my software development skills."
  ],
  education: [
    {
      degree: 'B.S. Computer Science',
      institution: import.meta.env.VITE_COLLEGE_NAME || '[Your University Name]',
      period: '2021 - 2025',
      description: 'Specializing in backend systems and software engineering. Consistently maintaining top academic performance while participating in various hackathons.'
    },
    {
      degree: 'High School Diploma',
      institution: import.meta.env.VITE_SCHOOL_NAME || '[High School Name]',
      period: 'Graduated 2021',
      description: 'Focused on mathematics and computer science fundamentals.'
    }
  ]
};

export const skillsData = {
  languages: ['Python', 'Java', 'JavaScript', 'SQL'],
  frameworks: ['Django', 'Spring Boot', 'React', 'Node.js'],
  databases: ['PostgreSQL', 'Docker', 'Git', 'Postman'],
  coreConcepts: ['REST APIs', 'Microservices', 'Data Structures', 'System Design Basics'],
};

export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Backend API',
    description: 'A robust RESTful API for an e-commerce platform with secure authentication and inventory management.',
    architecture: [
      'Implemented JWT-based auth flow',
      'Optimized database queries reducing latency by 40%',
      'Built automated testing pipeline with PyTest',
    ],
    techStack: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 2,
    title: 'Real-time Chat Microservice',
    description: 'Scalable WebSocket-based chat service utilizing message brokers for high throughput.',
    architecture: [
      'Designed microservices architecture',
      'Integrated Redis for caching and message brokering',
      'Achieved 99.9% uptime under load testing',
    ],
    techStack: ['Java', 'Spring Boot', 'Redis', 'WebSockets'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard API',
    description: 'High-performance data aggregation API serving analytical dashboards.',
    architecture: [
      'Designed efficient SQL aggregation queries',
      'Implemented rate limiting and caching strategies',
      'Created comprehensive API documentation',
    ],
    techStack: ['Node.js', 'Express', 'MySQL', 'Jest'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'Distributed Task Queue Engine',
    description: 'A resilient, distributed task queue system for processing background jobs across multiple worker nodes asynchronously.',
    architecture: [
      'Implemented robust task routing and retry mechanisms',
      'Configured Celery with Redis as a high-performance message broker',
      'Achieved dynamic scaling of worker nodes based on queue depth',
    ],
    techStack: ['Python', 'Redis', 'Celery'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 5,
    title: 'JWT Auth & Role-Based Access',
    description: 'A secure, scalable microservice dedicated to handling user authentication, session management, and fine-grained authorization.',
    architecture: [
      'Engineered stateless authentication using signed JWT tokens',
      'Enforced role-based access control (RBAC) across protected API routes',
      'Integrated refresh token rotation for enhanced security',
    ],
    techStack: ['Java', 'Spring Security', 'PostgreSQL'],
    githubUrl: '#',
    demoUrl: '#',
  }
];

export const achievementsData = [
  {
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Amazon Web Services'
  },
  {
    title: 'Oracle Certified Associate',
    subtitle: 'Java Programmer'
  },
  {
    title: 'Top 10% in Contests',
    subtitle: 'LeetCode · 300+ Problems Solved'
  },
  {
    title: '5-Star Gold Badge',
    subtitle: 'HackerRank · Problem Solving'
  },
  {
    title: 'Winner: Backend Category',
    subtitle: 'University Hackathon 2023'
  }
];

export const socialLinks = {
  email: import.meta.env.VITE_USER_EMAIL || 'your.email@domain.com',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com',
  leetcode: import.meta.env.VITE_LEETCODE_URL || 'https://leetcode.com'
};


