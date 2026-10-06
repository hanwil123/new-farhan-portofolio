"use client"

import { motion } from "framer-motion"
import { Badge } from "../components/ui/badge"
import { Calendar, Building2, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

const experiences = [
    {
    title: "Frontend Developer – CRM Dashboard Internal (Tensora) ",
    company: "Steradian Data Optima",
    period: "Jan 2026 - Jul 2026",
    location: "Onsite",
    description: [
      "Developed and maintained an internal CRM Dashboard (Tensora) using Vue.js, Quasar Framework, JavaScript, and REST API integration, building a unified interface for managing client, lead, and contact pipelines",
      "Built complete end-to-end CRUD functionalities across core CRM modules including Lead Management, Account Management, Contact Management, Opportunity Management, and Task Management",
      "Designed and implemented reusable and scalable UI components to improve maintainability anddevelopment efficiency across the platform",
      "Integrated frontend applications with backend REST APIs, ensuring accurate data synchronization and seamless user experience.",
      "Developed complex data forms with validation, filtering, searching, sorting, and pagination functionalities across all CRM modules.",
      "Implemented sales pipeline and opportunity tracking interfaces, enabling users to monitor deal stages, pipeline value, and sales activities efficiently.",
      "Built responsive dashboard views, tables, detail pages, and modal-based workflows following business requirements and UX standards.",
      "Collaborated closely with Product Managers, UI/UX Designers, Backend Developers, and QA Engineers throughout the full software development lifecycle.",
      "Optimized application performance and improved user experience through efficient state management and component reusability.",
    ],
    tags: ["Vue.js", "Quasar Framework", "Typescript", "REST API", "GIT", "Docker"],
  },
  {
    title: "Frontend Developer – Payroll New Qlola, Bank Rakyat Indonesia",
    company: "Steradian Data Optima",
    period: "Jul 2025 - Jan 2026",
    location: "Onsite",
    description: [
      "Developed and enhanced core features for the Payroll module in Qlola BRI, implementing several top-priority functionalities to improve employee data management and payroll operations.",
      "Built scalable and maintainable frontend components using modern frameworks, ensuring optimal performance and long-term reliability across the payroll system.",
      "Improved the accuracy and clarity of payroll reporting by enhancing data visualization and refining complex reporting logic for finance teams.",
      "Collaborated closely with the Product and Backend teams to design, validate, and deploy new payroll capabilities aligned with user and business requirements.",
      "Ensured data integrity and consistent performance across the payroll lifecycle by implementing robust state management, error handling, and UI consistency patterns.",
      "Contributed to overall system stability by identifying issues early, performing thorough testing, and supporting QA in bug resolution and feature verification.",
    ],
    tags: ["Micro Frontend", "React.js", "TypeScript", "Next.js", "Tailwind CSS", "REST API"],
  },
  {
    title: "Website Developer",
    company: "PLN Nusantara Renewables",
    period: "Oct 2024 - Feb 2025",
    type: "Partnership with Patria",
    location: "Remote",
    description: [
      "Built real-time dashboard for monitoring renewable energy investments across Indonesia",
      "Partnered with UX designers for optimal usability",
      "Implemented REST API integration for all features",
    ],
    tags: ["Next.js", "TailwindCSS", "ShadcnUI", "REST API"],
  },
  {
    title: "Android Developer – BRImo, Bank Rakyat Indonesia",
    company: "Steradian Data Optima",
    period: "Mar 2026 - Apr 2026",
    location: "Onsite, Full Time | Jakarta, Indonesia",
    description: [
      "Developed two major modules for BRImo, the official mobile banking application of Bank Rakyat Indonesia, using Kotlin, Jetpack Compose, Retrofit, and MVVM architecture.",
      "Built the SIGNAL module (Samsat Digital Nasional) end-to-end from scratch, enabling customers to pay vehicle tax digitally — covering customer number and regional area input, payment confirmation, PIN verification, and payment success detail screens.",
      "Developed the SBN (Surat Berharga Negara) module consisting of two sub-modules: SBN Registration (active and upcoming product listing, detail view, purchase simulation, terms & conditions, registration verification) and SBN Portfolio (displaying purchased SBN products with individual detail views).",
      "Collaborated with backend and product teams to ensure accurate data rendering and smooth user flow across all developed screens.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Retrofit", "MVVM", "Android SDK"],
  },
  {
    title: "Backend Developer – CRM Dashboard Internal (Tensora)",
    company: "Steradian Data Optima",
    period: "Jan 2026 - Mar 2026",
    location: "Onsite, Full Time | Jakarta, Indonesia",
    description: [
      "Developed and architected the internal CRM dashboard Tensora using Golang, Go Chi, GORM, and PostgreSQL, designed to monitor and manage incoming clients, leads, and contacts across the sales pipeline.",
      "Designed and implemented the database schema and relational structure for the Leads and Contacts modules, ensuring data integrity and scalability for future feature development.",
      "Built RESTful APIs for the Leads module covering full CRUD operations: lead creation, detail view, editing, deletion, and lead-to-contact conversion.",
      "Built RESTful APIs for the Contacts module supporting contact management with associated account linking, opportunity tracking, and engagement summary aggregation.",
      "Implemented pipeline and opportunity tracking logic on the backend, enabling real-time calculation of total pipeline value, win rate, and deal stage distribution displayed on the dashboard.",
      "Developed activity and engagement summary endpoints aggregating data such as total interactions, last email/call date, and upcoming tasks per lead and contact.",
      "Engineered role-based data ownership support, allowing leads and contacts to be assigned to specific owners with filtered access per user.",
    ],
    tags: ["Golang", "Go Chi", "GORM", "PostgreSQL", "REST API", "Docker", "Linux"],
  },

  {
    title: "Android Developer & Lab Assistant",
    company: "Lepkom Gunadarma University",
    period: "Sep 2024 - Mar 2025",
    location: "Depok, Indonesia",
    description: [
      "Developed Novel Nest Apps for online/offline book reading",
      "Designed intuitive reading experience",
      "Managed laboratory sessions and assisted students",
    ],
    tags: ["Flutter", "Laravel", "PostgreSQL"],
  },
  {
    title: "Backend Developer Intern",
    company: "Smarter Company",
    period: "Feb 2024 - Sep 2024",
    location: "Remote",
    description: [
      "Developed Smarter Education Website for college exam preparation",
      "Built backend systems using Laravel & Golang",
      "Collaborated with cross-functional teams for 6 months",
    ],
    tags: ["Laravel", "Golang", "PostgreSQL", "REST API"],
  },
  {
    title: "Frontend Developer",
    company: "Hackfest Project",
    period: "2023",
    description: [
      "Built student focus level detection web application",
      "Integrated TensorFlow.js for focus detection",
      "Implemented frontend features and API integration",
    ],
    tags: ["React.js", "TensorFlow.js", "Git", "API Integration"],
  },
]

const education = {
  degree: "Bachelor of Informatics Engineering",
  institution: "Gunadarma University",
  gpa: "3.82",
  period: "Current",
}

export default function Experience() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute h-full w-full bg-gradient-to-tr from-black via-black to-teal-500/20 opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="bg-gradient-to-r from-teal-200 via-white to-teal-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Work Experience
          </h1>
          <p className="mt-4 text-lg text-white">My professional journey and contributions</p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="border-white/10 bg-black/50 backdrop-blur-sm text-white">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-teal-500" />
              <div>
                <CardTitle className="text-xl text-white">{education.degree}</CardTitle>
                <p className="text-sm text-white">{education.institution}</p>
              </div>
              <Badge variant="secondary" className="ml-auto">
                GPA: {education.gpa}
              </Badge>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid gap-8 md:grid-cols-2 text-white">
          {experiences.map((experience, i) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-white/10 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{experience.title}</CardTitle>
                    <Badge variant="outline">
                      <Calendar className="mr-2 h-3 w-3" />
                      {experience.period}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-white">
                    <Building2 className="mr-2 h-4 w-4" />
                    {experience.company}
                    {experience.location && ` • ${experience.location}`}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-white">
                    {experience.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-white">
                    {experience.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

