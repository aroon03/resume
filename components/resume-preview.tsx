import type { ResumeData } from "@/types/resume"

interface ResumePreviewProps {
  data: ResumeData
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const { personalInfo, education, experience, skills, projects } = data

  // Check if there's any data to display
  const hasPersonalInfo = personalInfo.name || personalInfo.title
  const hasContent =
    hasPersonalInfo || education.length > 0 || experience.length > 0 || skills.length > 0 || projects.length > 0

  if (!hasContent) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        <p>Start filling out the form to see your resume preview here.</p>
      </div>
    )
  }

  return (
    <div className="font-serif text-sm">
      {/* Header */}
      {hasPersonalInfo && (
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold">{personalInfo.name || "Your Name"}</h1>
          {personalInfo.title && <p className="text-lg">{personalInfo.title}</p>}

          <div className="flex flex-wrap justify-center gap-x-4 mt-2 text-sm">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.website && <span>{personalInfo.website}</span>}
          </div>
        </header>
      )}

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Summary</h2>
          <p>{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Experience</h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.position}</h3>
                  <span className="text-sm">
                    {exp.startDate &&
                      new Date(exp.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                    {" - "}
                    {exp.current
                      ? "Present"
                      : exp.endDate &&
                        new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="italic">{exp.company}</p>
                  {exp.location && <p className="text-sm">{exp.location}</p>}
                </div>
                {exp.description && <p className="mt-1 text-sm whitespace-pre-line">{exp.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <span className="text-sm">
                    {edu.startDate &&
                      new Date(edu.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                    {" - "}
                    {edu.endDate &&
                      new Date(edu.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </span>
                </div>
                <p className="italic">
                  {edu.degree}
                  {edu.field ? `, ${edu.field}` : ""}
                </p>
                {edu.description && <p className="mt-1 text-sm">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.id} className="px-2 py-1 bg-gray-100 rounded text-sm">
                {skill.name}
                {skill.level > 0 && <span className="ml-1 text-gray-500">{Array(skill.level).fill("•").join("")}</span>}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Projects</h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{project.name}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
                {project.technologies && <p className="italic text-sm">{project.technologies}</p>}
                {project.description && <p className="mt-1 text-sm">{project.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
