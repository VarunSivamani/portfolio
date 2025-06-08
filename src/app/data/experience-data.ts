import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    position: 'Systems Engineer',
    company: 'Tata Consultancy Services (TCS)',
    duration: 'July 2024 – Present',
    details: [
      'Working under TCS BaNCS unit, specializing in AI and NLP-driven solutions for financial and insurance clients.',
      'Developing innovative Proof of Concepts (POCs) in areas such as Retrieval-Augmented Generation (RAG), LLM evaluation frameworks, document parsing using Vision Models, Full-stack applications, and more.',
      'Collaborated with various clients to design solutions aligned with customer needs and market trends.',
      'Gaining hands-on experience in end-to-end AI solution development, from research and prototyping to implementation and optimization.',
    ],
  },
  {
    position: 'Data Science Research Intern',
    company: 'PAYODA',
    duration: 'March 2022 – August 2022',
    details: [
      'Designed and Implemented a Knowledge Graph with the help of NLP and its techniques to analyze datasets having conversations from investor meetings of the Stock Market domain.',
      'This project encompassed multiple steps, including data collection, annotation, named entity recognition, integrating the data into the knowledge graph, and finally, visualization.',
      'Examined various solutions for Anomaly Detection in the Banking industry. ',
    ],
  },
  {
    position: 'Technical Content Writer',
    company: 'Medium',
    duration: 'June 2023 – Present',
    details: [
      'Writing insightful technical blogs focused on AI/ML, MLOps, and cloud-native tools.',
      'Sharing tutorials and deep dives to help developers and data scientists explore emerging technologies.',
    ],
  },
];
