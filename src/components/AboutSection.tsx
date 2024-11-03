import { Lightbulb, Rocket, Users } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
              KIIT E-Cell is <span className="font-semibold text-blue-600 dark:text-blue-400">dedicated</span> to nurturing the <span className="font-semibold text-green-600 dark:text-green-400">entrepreneurial spirit</span> among students.
            </p>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <span>Learn from industry experts and successful entrepreneurs</span>
              </li>
              <li className="flex items-center space-x-2">
                <Rocket className="h-5 w-5 text-red-500" />
                <span>Innovate through workshops and hackathons</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>Transform ideas into successful ventures</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Students collaborating on a project"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
