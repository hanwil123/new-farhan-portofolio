"use client"

import { motion } from "framer-motion"
// import { ExternalLink, Github } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "../components/ui/badge"
// import { Button } from "../components/ui/button"

const projects = [
    {
      title: "Weather Web",
      description: "Real-time weather application with detailed forecasts and interactive maps",
      image: "/weather.jpg",
      demoUrl: "https://han-weather-web.vercel.app/",
      githubUrl: "https://github.com/yourusername/weather-web",
      tags: ["React", "TailwindCSS", "Weather API"],
    },
    {
      title: "Quran Online",
      description: "Digital Quran platform with translations and audio recitations",
      image: "/webquran.jpg",
      demoUrl: "https://new-quran.vercel.app/",
      githubUrl: "https://github.com/yourusername/quran-online",
      tags: ["Next.js", "TailwindCSS", "API Integration"],
    },
    {
      title: "Chat Website",
      description: "Real-time chat application with modern UI",
      image: "/chat.jpg",
      demoUrl: "",
      githubUrl: "https://github.com/hanwil123/next-chat-ts",
      tags: ["TypeScript", "Next.js", "WebSocket"],
    },
    {
      title: "Novel Nest Dashboard",
      description: "Administrative dashboard for Novel Nest platform",
      image: "/dashboard.jpg",
      demoUrl: "",
      githubUrl: "",
      tags: ["React", "TailwindCSS", "Dashboard"],
    },
    {
      title: "Novel Nest Apps",
      description: "Mobile application for novel readers",
      image: "/novel-nest.jpg",
      demoUrl: "",
      githubUrl: "https://github.com/hanwil123/JurnalBuku-Apps",
      tags: ["Flutter", "Mobile", "Books"],
    },
    {
      title: "PLN NR Dashboard",
      description: "Monitoring dashboard for PLN NR",
      image: "/Dashboard_PLNNR.png",
      demoUrl: "",
      githubUrl: "https://github.com/hanwil123/Project_PLN_NR",
      tags: ["React", "Dashboard", "Analytics"],
    },
  ]

export default function Projects() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute h-full w-full bg-gradient-to-tr from-black via-black to-teal-500/20 opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="bg-gradient-to-r from-teal-200 via-white to-teal-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Featured Projects
          </h1>
          <p className="mt-4 text-lg text-white">A collection of my work and contributions to the digital world</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image }
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="relative space-y-4 p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-white">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-white">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* <div className="flex gap-4 pt-4">
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

