
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 KIIT E-Cell. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <Link href="#"><Facebook className="h-5 w-5" /></Link>
        <Link href="#"><Twitter className="h-5 w-5" /></Link>
        <Link href="#"><Instagram className="h-5 w-5" /></Link>
        <Link href="#"><Linkedin className="h-5 w-5" /></Link>
      </div>
    </footer>
  )
}
