"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const routes = [
  {
    href: "/",
    label: "Home",
  },
//   {
//     href: "/about",
//     label: "About",
//   },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/experience",
    label: "Experience",
  },
//   {
//     href: "/contact",
//     label: "Contact",
//   },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl"
    >
      <nav className="container mx-auto flex h-16 items-center px-6">
        <Link href="/" className="text-lg font-bold text-white">
          FWN
        </Link>
        <div className="ml-auto flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "relative text-sm transition-colors",
                pathname === route.href ? "text-white" : "text-gray-400 hover:text-white",
              )}
            >
              {route.label}
              {pathname === route.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-[21px] left-0 right-0 h-px bg-gradient-to-r from-teal-500/0 via-teal-500 to-teal-500/0"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}

