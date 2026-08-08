"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Education } from "@/types/resume"

interface EducationFormProps {
  data: Education[]
  updateData: (data: Education[]) => void
}

export function EducationForm({ data, updateData }: EducationFormProps) {
  const [educations, setEducations] = useState<Education[]>(
    data.length > 0
      ? data
      : [
          {
            id: uuidv4(),
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
  )

  const handleChange = (id: string, field: keyof Education, value: string) => {
    const updatedEducations = educations.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    setEducations(updatedEducations)
    updateData(updatedEducations)
  }

  const addEducation = () => {
    const newEducations = [
      ...educations,
      {
        id: uuidv4(),
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]
    setEducations(newEducations)
    updateData(newEducations)
  }

  const removeEducation = (id: string) => {
    const newEducations = educations.filter((edu) => edu.id !== id)
    setEducations(newEducations)
    updateData(newEducations)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Education</h2>
        <Button type="button" variant="outline" size="sm" onClick={addEducation}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Education
        </Button>
      </div>

      {educations.map((education, index) => (
        <div key={education.id} className="p-4 border rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Education #{index + 1}</h3>
            {educations.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeEducation(education.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`institution-${education.id}`}>Institution</Label>
            <Input
              id={`institution-${education.id}`}
              value={education.institution}
              onChange={(e) => handleChange(education.id, "institution", e.target.value)}
              placeholder="University of Example"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`degree-${education.id}`}>Degree</Label>
              <Input
                id={`degree-${education.id}`}
                value={education.degree}
                onChange={(e) => handleChange(education.id, "degree", e.target.value)}
                placeholder="Bachelor of Science"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`field-${education.id}`}>Field of Study</Label>
              <Input
                id={`field-${education.id}`}
                value={education.field}
                onChange={(e) => handleChange(education.id, "field", e.target.value)}
                placeholder="Computer Science"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`startDate-${education.id}`}>Start Date</Label>
              <Input
                id={`startDate-${education.id}`}
                type="month"
                value={education.startDate}
                onChange={(e) => handleChange(education.id, "startDate", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${education.id}`}>End Date (or Expected)</Label>
              <Input
                id={`endDate-${education.id}`}
                type="month"
                value={education.endDate}
                onChange={(e) => handleChange(education.id, "endDate", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${education.id}`}>Description (Optional)</Label>
            <Textarea
              id={`description-${education.id}`}
              value={education.description}
              onChange={(e) => handleChange(education.id, "description", e.target.value)}
              placeholder="Relevant coursework, achievements, etc."
              rows={3}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
