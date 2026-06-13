export type Project = {
  // List view fields (used in cards/rows)
  id: string
  title: string
  description: string
  thumbnail: string
  background: string
  status: "completed" | "live" | "in-dev" | "upcoming" 
  category: "full-stack" | "embedded" | "data/ml" | "ai" | "misc"
  tags: string[]
  pageUrl: string
  githubUrl?: string
  demoUrl?: string
  featured: boolean
  currentlyBuilding: boolean

  // Detail page fields (only used on /projects/[id-name])
  overview: string
  runtime: string
  cast: { name: string; role: string; icon: string }[]
  scenes?: string[]        // screenshot paths
  trailer?: string        // video url
  directorNote?: string
}