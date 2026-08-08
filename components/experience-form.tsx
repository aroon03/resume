"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Experience } from "@/types/resume"

interface ExperienceFormProps {
  data: Experience[]
  updateData: (data: Experience[]) => void
}

export function ExperienceForm({ data, updateData }: ExperienceFormProps) {
  const [experiences, setExperiences] = useState<Experience[]>(
    data.length > 0
      ? data
      : [
          {
            id: uuidv4(),
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
          },
        ],
  )

  const handleChange = (id: string, field: keyof Experience, value: any) => {
    const updatedExperiences = experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    setExperiences(updatedExperiences)
    updateData(updatedExperiences)
  }

  const addExperience = () => {
    const newExperiences = [
      ...experiences,
      {
        id: uuidv4(),
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ]
    setExperiences(newExperiences)
    updateData(newExperiences)
  }

  const removeExperience = (id: string) => {
    const newExperiences = experiences.filter((exp) => exp.id !== id)
    setExperiences(newExperiences)
    updateData(newExperiences)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <Button type="button" variant="outline" size="sm" onClick={addExperience}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {experiences.map((experience, index) => (
        <div key={experience.id} className="p-4 border rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Experience #{index + 1}</h3>
            {experiences.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(experience.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`company-${experience.id}`}>Company</Label>
              <Input
                id={`company-${experience.id}`}
                value={experience.company}
                onChange={(e) => handleChange(experience.id, "company", e.target.value)}
                placeholder="Example Corp"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`position-${experience.id}`}>Position</Label>
              <Input
                id={`position-${experience.id}`}
                value={experience.position}
                onChange={(e) => handleChange(experience.id, "position", e.target.value)}
                placeholder="Software Engineer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`location-${experience.id}`}>Location</Label>
            <Input
              id={`location-${experience.id}`}
              value={experience.location}
              onChange={(e) => handleChange(experience.id, "location", e.target.value)}
              placeholder="New York, NY (or Remote)"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`startDate-${experience.id}`}>Start Date</Label>
              <Input
                id={`startDate-${experience.id}`}
                type="month"
                value={experience.startDate}
                onChange={(e) => handleChange(experience.id, "startDate", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${experience.id}`}>End Date</Label>
              <Input
                id={`endDate-${experience.id}`}
                type="month"
                value={experience.endDate}
                onChange={(e) => handleChange(experience.id, "endDate", e.target.value)}
                disabled={experience.current}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id={`current-${experience.id}`}
              checked={experience.current}
              onCheckedChange={(checked) => {
                handleChange(experience.id, "current", checked === true)
                if (checked === true) {
                  handleChange(experience.id, "endDate", "")
                }
              }}
            />
            <Label htmlFor={`current-${experience.id}`}>I currently work here</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${experience.id}`}>Description</Label>
            <Textarea
              id={`description-${experience.id}`}
              value={experience.description}
              onChange={(e) => handleChange(experience.id, "description", e.target.value)}
              placeholder="Describe your responsibilities and achievements"
              rows={4}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
