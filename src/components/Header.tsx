import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="KIIT E-Cell Logo"
          className="h-8 w-8"
          height={32}
          width={32}
        />
        <span className="ml-2 text-lg font-bold">KIIT E-Cell</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Events
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Get Involved
        </Link>
      </nav>
    </header>
  )
}
