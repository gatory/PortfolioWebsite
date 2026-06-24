import Footer from '@/components/Footer'
import Navbar from '@/components/recruiter/Navbar'
import HeroSection from '@/components/recruiter/projects/HeroSection'
import RecommendationSection from '@/components/recruiter/projects/RecommendationSection'
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
      <Navbar />
      <HeroSection project={project} />
      <RecommendationSection project={project} />
      <Footer />
    </main>
  )
}