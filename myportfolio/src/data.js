export const skillsData = {
  languages: ['Python', 'Java', 'JavaScript', 'SQL'],
  frameworks: ['Django', 'Spring Boot', 'React', 'Node.js'],
  databases: ['PostgreSQL', 'Docker', 'Git', 'Postman', 'Linux'],
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

export const achievementsData = {
  certifications: [
    'AWS Certified Cloud Practitioner',
    'Oracle Certified Associate Java Programmer'
  ],
  competitive: [
    'LeetCode: Top 10% in Contests, 300+ Problems Solved',
    'HackerRank: 5-Star Gold Badge in Problem Solving',
    'Winner: University Hackathon 2023 (Backend Category)'
  ]
};

export const socialLinks = {
  email: 'your.email@domain.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  leetcode: 'https://leetcode.com',
  twitter: 'https://twitter.com'
};
