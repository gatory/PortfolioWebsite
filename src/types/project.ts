import { StatusBadgeProps } from "@/components/StatusBadge"

export type Project = {
  // List view fields (used in cards/rows)
  id: string
  category: "full-stack" | "embedded" | "data" | "ai / machine learning" | "misc"
  featured: boolean
  currentlyBuilding: boolean
  projectName: string
  route?: string;
  githubUrl?: string
  thumbnail?: string
  background?: string,
  bgColor?: string,
  icon?: string,
  status: StatusBadgeProps["status"]
  description: string
  tags?: string[]
  
  // Detail page fields (only used on /projects/[id-name])
  overview: string
  demoUrl?: string
  runtime: string
  cast: { name: string; role: string; icon: string }[]
  scenes?: string[]        // screenshot paths
  trailer?: string        // video url
  directorNote?: string
}