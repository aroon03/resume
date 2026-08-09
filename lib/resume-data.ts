// ============================================================================
// RESUME CONTENT
// Update everything about your resume here. No layout/styling code needed.
// ============================================================================

export const personalInfo = {
  name: "Aroon Ponnusamy",
  title: "Principal Software Engineer",
  photo:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1704673536647-tglp0Q86alvmgv9fSj1BzuiKsmhiWZ.jpeg",
  email: "aroon.ponnusamy@gmail.com",
  phone: "4792762208",
  location: "Bentonville, AR",
}

export const summary =
  "Visionary Principal Engineer leveraging over two decades of technical leadership in Healthcare and Retail to build high-performance, large-scale architectures. Recognized expert in microservice API design and Service-Oriented Architecture (SOA), with deep expertise in optimizing platforms, modernizing legacy infrastructure, and engineering seamless enterprise integrations."

// A bullet can be a plain string, or an object with a bold lead-in prefix.
export type Bullet = string | { lead: string; text: string }

export type ExperienceItem = {
  title: string
  company: string
  period: string
  location: string
  bullets: Bullet[]
}

export const experience: ExperienceItem[] = [
  {
    title: "Principal Software Engineer",
    company: "Walmart Inc.,",
    period: "09/2013 - Present",
    location: "Bentonville, AR",
    bullets: [
      "Architected and led the contingency platform strategy for the organization's largest private recruiting system, ensuring high availability and seamless business continuity.",
      "Headed frontend engineering for SamsClub.com's core e-commerce Membership and Login platforms, optimizing user authentication and digital onboarding flows.",
      'Lead the "One Patient Record" initiative, orchestrating the integration of 260 million patient profiles across 5,000+ US locations; established robust data pipelines, data cleansing protocols, and an IBM MDM integration to deliver a unified, 360-degree customer view.',
      {
        lead: "Patented Innovation:",
        text: "Patented and engineered a zero-code Enterprise Instant API solution capable of dynamically generating fully customizable, multi-method REST APIs on demand.",
      },
      "Designed and deployed a real-time analytics system for prescriber data using the ELK Stack (Elasticsearch, Logstash, Kibana) from proof-of-concept research through production implementation.",
      "Led cross-functional engineering teams across critical Health & Wellness initiatives, including Patient Safety systems, legacy-to-DataPower ESB migrations, and omni-channel (.com/mobile) platform integrations.",
    ],
  },
  {
    title: "Systems Analyst",
    company: "UST Global Inc.,",
    period: "11/2006 - 02/2013",
    location: "Chennai, India and Bentonville, AR",
    bullets: [
      "Led the onsite team in numerous Walmart projects, including the elimination of Social Security Numbers, the creation of an HR data warehouse for international operations, the integration of mainframe HR systems and Kenexa Recruiter BrassRing Applicant Tracking System for the Logistics Hourly Solutions Release 3, and Annual Enrollment.",
      "Served as the offshore technical lead for the scalability project for Blue Cross Blue Shield, focused on improving the performance of the ISG STAR and WGS 2.0 systems. This included reducing batch failures on the mainframe, decreasing online downtime, and ultimately aiming for 24/7 online availability.",
    ],
  },
]

// Flat list of technical skills, rendered as pills.
export const skills: string[] = [
  "AI Agent Development", "AI Workflows", "MCP Server",
  "NodeJS",
  "ReactJS",
  "Cosmos DB",
  "Python",
  "Cypress/Playwright",
  "Scala Scripting",
  "Figma",
  "GraphQL",
  "REST",
  "Dockers",
  "K8s",
  "Datapower",
  "APIM",
  "ServiceMesh",
  "DB2",
  "ELK Stack",
  "IBM MDM",
  "Kafka",
  "Dynatrace",
  "Graphana",
  "Power BI",
  "Looker",
  "Mainframe Technologies",
]

export const achievements: string[] = [
  "Won 1st place in Hackathon 2016 for Omni Channel Category in Walmart",
  "Awarded 2nd place in Code@thon 2017 for Technology Driven Change in Walmart",
  'Awarded several times for "Best Performance" and "Customer Focused" with UST Global',
]

export type Certificate = {
  name: string
  url?: string
}

export const certificates: Certificate[] = [
  {
    name: "Microsoft Certified: Azure Data Scientist Associate",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/",
  },
]

export type Patent = {
  id: string
  status: string
  description: string
}

export const patents: Patent[] = [
  {
    id: "US20220414091A1",
    status: "Granted",
    description:
      "Systems and methods for generating dynamic instructions for database querying and data retrieval",
  },
  {
    id: "US20180349866A1",
    status: "Granted",
    description:
      "Systems, Devices, and Methods for Generating Personalized Electronic Documents",
  }
]

export type EducationItem = {
  degree: string
  institution: string
  period: string
  location: string
}

export const education: EducationItem[] = [
  {
    degree: "MBA in Technology Management",
    institution: "Anna University",
    period: "06/2007 - 03/2009",
    location: "Tamil Nadu, India",
  },
  {
    degree: "Bachelors in Information Technology",
    institution: "Anna University",
    period: "06/2000 - 03/2006",
    location: "Tamil Nadu, India",
  },
]
