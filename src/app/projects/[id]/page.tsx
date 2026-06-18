import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) notFound()

  return (
    <main>
      <h1>{project.projectName}</h1>
    </main>
  )
}