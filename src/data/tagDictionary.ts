export const TAG_COLORS: Record<string, string> = {
  // JavaScript ecosystem — yellow/amber
  "JavaScript":     "bg-amber-500/30 text-amber-200 border-amber-500/50",
  "TypeScript":     "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "Node.js":        "bg-emerald-500/30 text-emerald-200 border-emerald-500/50",
  "React":          "bg-cyan-500/30 text-cyan-200 border-cyan-500/50",
  "Next.js":        "bg-zinc-500/30 text-zinc-200 border-zinc-500/50",
  "Tailwind CSS":   "bg-teal-500/30 text-teal-200 border-teal-500/50",
  "Vue":            "bg-emerald-500/30 text-emerald-200 border-emerald-500/50",

  // Python ecosystem — blue/yellow
  "Python":         "bg-yellow-500/30 text-yellow-200 border-yellow-500/50",
  "FastAPI":        "bg-teal-500/30 text-teal-200 border-teal-500/50",
  "Django":         "bg-green-500/30 text-green-200 border-green-500/50",
  "Flask":          "bg-zinc-500/30 text-zinc-200 border-zinc-500/50",
  "Numpy":          "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "Pandas":         "bg-purple-500/30 text-purple-200 border-purple-500/50",
  "Sci-kit Learn":  "bg-orange-500/30 text-orange-200 border-orange-500/50",
  "Matplotlib":     "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "Jupyter Notebook": "bg-orange-500/30 text-orange-200 border-orange-500/50",
  "Ollama":         "bg-zinc-500/30 text-zinc-200 border-zinc-500/50",
  "HuggingFace":    "bg-yellow-500/30 text-yellow-200 border-yellow-500/50",
  "ChromaDB":       "bg-purple-500/30 text-purple-200 border-purple-500/50",

  // Java ecosystem — orange/red
  "Java":           "bg-orange-500/30 text-orange-200 border-orange-500/50",
  "Java Swing":     "bg-rose-500/30 text-rose-200 border-rose-500/50",
  "JUnit":          "bg-red-500/30 text-red-200 border-red-500/50",
  "JUnit5":         "bg-red-500/30 text-red-200 border-red-500/50",
  "Spring Boot":    "bg-green-500/30 text-green-200 border-green-500/50",

  // Databases
  "PostgreSQL":     "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "MySQL":          "bg-orange-500/30 text-orange-200 border-orange-500/50",
  "MongoDB":        "bg-green-500/30 text-green-200 border-green-500/50",
  "Redis":          "bg-red-500/30 text-red-200 border-red-500/50",
  "SQLite":         "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "Firebase":       "bg-amber-500/30 text-amber-200 border-amber-500/50",
  "Supabase":       "bg-emerald-500/30 text-emerald-200 border-emerald-500/50",

  // DevOps / Cloud
  "AWS":            "bg-amber-500/30 text-amber-200 border-amber-500/50",
  "Docker":         "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "Git":            "bg-orange-500/30 text-orange-200 border-orange-500/50",
  "GitHub":         "bg-zinc-500/30 text-zinc-200 border-zinc-500/50",
  "Vercel":         "bg-zinc-500/30 text-zinc-200 border-zinc-500/50",
  "Linux":          "bg-yellow-500/30 text-yellow-200 border-yellow-500/50",

  // Embedded / Hardware
  "Rust":           "bg-orange-500/30 text-orange-200 border-orange-500/50",
  "C":              "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "C++":            "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "Arduino":        "bg-teal-500/30 text-teal-200 border-teal-500/50",
  "Raspberry Pi":   "bg-rose-500/30 text-rose-200 border-rose-500/50",
  "ROS":            "bg-blue-500/30 text-blue-200 border-blue-500/50",
  "MQTT":           "bg-purple-500/30 text-purple-200 border-purple-500/50",

  // Data / ML
  "TensorFlow":     "bg-orange-500/30 text-orange-200 border-orange-500/50",
  "PyTorch":        "bg-red-500/30 text-red-200 border-red-500/50",
  "OpenAI":         "bg-teal-500/30 text-teal-200 border-teal-500/50",
  "Kraggle":        "bg-blue-500/30 text-blue-200 border-blue-500/50",
}

// Fallback for unknown tags
export const DEFAULT_TAG_COLOR = "bg-zinc-500/30 text-zinc-200 border-zinc-500/50"