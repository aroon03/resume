"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import type { Skill } from "@/types/resume"

interface SkillsFormProps {
  data: Skill[]
  updateData: (data: Skill[]) => void
}

export function SkillsForm({ data, updateData }: SkillsFormProps) {
  const [skills, setSkills] = useState<Skill[]>(data.length > 0 ? data : [{ id: uuidv4(), name: "", level: 3 }])

  const handleChange = (id: string, field: keyof Skill, value: any) => {
    const updatedSkills = skills.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill))
    setSkills(updatedSkills)
    updateData(updatedSkills)
  }

  const addSkill = () => {
    const newSkills = [...skills, { id: uuidv4(), name: "", level: 3 }]
    setSkills(newSkills)
    updateData(newSkills)
  }

  const removeSkill = (id: string) => {
    const newSkills = skills.filter((skill) => skill.id !== id)
    setSkills(newSkills)
    updateData(newSkills)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Skills</h2>
        <Button type="button" variant="outline" size="sm" onClick={addSkill}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Skill
        </Button>
      </div>

      {skills.map((skill) => (
        <div key={skill.id} className="p-4 border rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2 flex-1 mr-4">
              <Label htmlFor={`skill-${skill.id}`}>Skill</Label>
              <Input
                id={`skill-${skill.id}`}
                value={skill.name}
                onChange={(e) => handleChange(skill.id, "name", e.target.value)}
                placeholder="JavaScript, Project Management, etc."
              />
            </div>

            {skills.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(skill.id)}
                className="text-destructive hover:text-destructive mt-6"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor={`level-${skill.id}`}>Proficiency Level</Label>
              <span className="text-sm text-muted-foreground">
                {skill.level === 1 && "Beginner"}
                {skill.level === 2 && "Elementary"}
                {skill.level === 3 && "Intermediate"}
                {skill.level === 4 && "Advanced"}
                {skill.level === 5 && "Expert"}
              </span>
            </div>
            <Slider
              id={`level-${skill.id}`}
              value={[skill.level]}
              min={1}
              max={5}
              step={1}
              onValueChange={(value) => handleChange(skill.id, "level", value[0])}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
