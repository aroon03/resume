import Image from "next/image"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import {
  personalInfo,
  summary,
  experience,
  skills,
  achievements,
  certificates,
  patents,
  education,
} from "@/lib/resume-data"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-bold uppercase tracking-wide text-[#2f7cb0] mb-4">
      {children}
    </h2>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 py-0 sm:py-8 print:bg-white print:py-0">
      {/* A4 / Letter sheet */}
      <div className="resume-sheet mx-auto w-full max-w-[850px] bg-white text-gray-800 shadow-lg print:shadow-none">
        {/* Header */}
        <header className="flex flex-col items-center gap-8 px-8 pt-10 pb-6 sm:flex-row sm:items-center">
          <div className="relative h-40 w-40 shrink-0 self-center overflow-hidden rounded-full border border-gray-200 bg-gray-100">
            <Image
              src={personalInfo.photo || "/placeholder.svg"}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h1 className="text-4xl font-bold leading-none text-gray-900 text-balance">
              {personalInfo.name}
            </h1>
            <p className="mt-2 text-xl text-gray-500">{personalInfo.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-justify">
              {summary}
            </p>
          </div>
        </header>

        {/* Contact bar */}
        <div className="border-y border-gray-200 bg-gray-100 px-8 py-3">
          <div className="flex flex-col flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-gray-700 sm:flex-row">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="h-4 w-4 text-[#2f7cb0]" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="h-4 w-4 text-[#2f7cb0]" />
              {personalInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#2f7cb0]" />
              {personalInfo.location}
            </span>
          </div>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 px-8 py-8 md:grid-cols-3">
          {/* Left column */}
          <div className="space-y-8 md:col-span-2">
            {/* Work Experience */}
            <section>
              <SectionHeading>Work Experience</SectionHeading>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                    <p className="text-lg text-gray-700">{job.company}</p>
                    <div className="mt-1 flex justify-between gap-4 text-sm italic text-gray-500">
                      <span>{job.period}</span>
                      <span className="text-right">{job.location}</span>
                    </div>
                    <ul className="mt-2 space-y-2">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-2 text-sm leading-relaxed text-gray-700">
                          <span className="mt-1 shrink-0 font-bold text-[#2f7cb0]">–</span>
                          <span>
                            {typeof bullet === "string" ? (
                              bullet
                            ) : (
                              <>
                                <span className="font-bold text-gray-900">{bullet.lead}</span> {bullet.text}
                              </>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionHeading>Education</SectionHeading>
              <div className="space-y-5">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-gray-700">{edu.institution}</p>
                    <div className="mt-1 flex justify-between gap-4 text-sm italic text-gray-500">
                      <span>{edu.period}</span>
                      <span className="text-right">{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Technical Skills */}
            <section>
              <SectionHeading>Technical Skills</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-badge rounded-md border border-[#2f7cb0] bg-[#2f7cb0] px-3 py-1 text-sm font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <SectionHeading>Achievements</SectionHeading>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <p key={index} className="text-sm leading-relaxed text-gray-700">
                    {achievement}
                  </p>
                ))}
              </div>
            </section>

            {/* Certificates */}
            <section>
              <SectionHeading>Certificates</SectionHeading>
              <div className="space-y-2">
                {certificates.map((certificate, index) => (
                  <div key={index} className="text-sm leading-relaxed text-gray-700">
                    {certificate.url ? (
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1 hover:underline"
                      >
                        {certificate.name}
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2f7cb0]" />
                      </a>
                    ) : (
                      certificate.name
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Patents */}
            <section>
              <SectionHeading>Patents</SectionHeading>
              <div className="space-y-2">
                {patents.map((patent, index) => (
                  <div key={index}>
                    <p className="text-sm text-gray-800">
                      {patent.id} - {patent.status}
                    </p>
                    <p className="text-sm italic leading-snug text-gray-500">
                      {patent.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
