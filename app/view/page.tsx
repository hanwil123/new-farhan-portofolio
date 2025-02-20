"use client"

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowRight } from "lucide-react"
import Link from "next/link"
// import Image from "next/image"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute h-full w-full bg-gradient-to-tr from-black via-black to-teal-500/20 opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <main className="container relative mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            {/* <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-teal-500/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portofolio-Farhan-Wildan-Nugraha-02-20-2025_09_45_PM.png-DRq9uALlaHd7xmCfcYP59Y0WR9NNPF.jpeg"
                alt="Farhan Wildan"
                className="h-full w-full object-cover"
              />
            </div> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-r from-teal-200 via-white to-teal-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            Creative Developer & Digital Craftsman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Hi, Im Farhan Wildan. A passionate Fullstack Developer specializing in creating exceptional digital
            experiences through clean code and innovative design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-6"
          >
            <div className="flex gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-transparent" />
              <h3 className="relative text-base font-semibold leading-7 text-gray-300">{stat.label}</h3>
              <p className="relative mt-4">
                <span className="text-4xl font-bold tracking-tight text-white">{stat.value}</span>
                {stat.unit && <span className="text-sm text-gray-400"> {stat.unit}</span>}
              </p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}

const stats = [
  {
    label: "Projects Completed",
    value: "4",
    unit: "+",
  },
  {
    label: "Experience",
    value: "2",
    unit: "years",
  },
  {
    label: "Hackathon Participation",
    value: "1",
    unit: "event",
  },
]

