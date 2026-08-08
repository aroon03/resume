"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Project } from "@/types/resume"

interface ProjectsFormProps {
  data: Project[]
  updateData: (data: Project[]) => void
}

export function ProjectsForm({ data, updateData }: ProjectsFormProps) {
  const [projects, setProjects] = useState<Project[]>(
    data.length > 0
      ? data
      : [
          {
            id: uuidv4(),
            name: "",
            description: "",
            technologies: "",
            link: "",
          },
        ],
  )

  const handleChange = (id: string, field: keyof Project, value: string) => {
    const updatedProjects = projects.map((project) => (project.id === id ? { ...project, [field]: value } : project))
    setProjects(updatedProjects)
    updateData(updatedProjects)
  }

  const addProject = () => {
    const newProjects = [
      ...projects,
      {
        id: uuidv4(),
        name: "",
        description: "",
        technologies: "",
        link: "",
      },
    ]
    setProjects(newProjects)
    updateData(newProjects)
  }

  const removeProject = (id: string) => {
    const newProjects = projects.filter((project) => project.id !== id)
    setProjects(newProjects)
    updateData(newProjects)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Projects</h2>
        <Button type="button" variant="outline" size="sm" onClick={addProject}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {projects.map((project, index) => (
        <div key={project.id} className="p-4 border rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Project #{index + 1}</h3>
            {projects.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeProject(project.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`name-${project.id}`}>Project Name</Label>
            <Input
              id={`name-${project.id}`}
              value={project.name}
              onChange={(e) => handleChange(project.id, "name", e.target.value)}
              placeholder="E-commerce Website"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${project.id}`}>Description</Label>
            <Textarea
              id={`description-${project.id}`}
              value={project.description}
              onChange={(e) => handleChange(project.id, "description", e.target.value)}
              placeholder="Describe the project, your role, and its impact"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`technologies-${project.id}`}>Technologies Used</Label>
            <Input
              id={`technologies-${project.id}`}
              value={project.technologies}
              onChange={(e) => handleChange(project.id, "technologies", e.target.value)}
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`link-${project.id}`}>Project Link (Optional)</Label>
            <Input
              id={`link-${project.id}`}
              value={project.link}
              onChange={(e) => handleChange(project.id, "link", e.target.value)}
              placeholder="https://github.com/yourusername/project"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
