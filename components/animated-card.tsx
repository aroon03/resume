"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  title: string
  description?: string
  className?: string
  headerClassName?: string
  children: React.ReactNode
  dateInfo?: string
}

export function AnimatedCard({
  title,
  description,
  className,
  headerClassName,
  children,
  dateInfo,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "border-none shadow-lg transition-all duration-300",
        isHovered ? "transform -translate-y-1 shadow-xl" : "",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className={cn("bg-gradient-to-r from-purple-600 to-blue-600", headerClassName)}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <CardTitle className="text-white">{title}</CardTitle>
            {description && <CardDescription className="text-white/80">{description}</CardDescription>}
          </div>
          {dateInfo && <div className="text-sm text-white/80">{dateInfo}</div>}
        </div>
      </CardHeader>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  )
}
