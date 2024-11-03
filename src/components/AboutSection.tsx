import { Lightbulb, Rocket, Users } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-11">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-100">
              About Us
            </h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg md:text-xl">
              KIIT E-Cell is{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                dedicated
              </span>{" "}
              to nurturing the{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                entrepreneurial spirit
              </span>{" "}
              among students.
            </p>
            <ul className="space-y-4 text-gray-700 dark:text-gray-400">
              <li className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
                <span className="text-base">Learn from industry experts and successful entrepreneurs</span>
              </li>
              <li className="flex items-start space-x-3">
                <Rocket className="h-6 w-6 text-red-500" />
                <span className="text-base">Innovate through workshops and hackathons</span>
              </li>
              <li className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-blue-500" />
                <span className="text-base">Transform ideas into successful ventures</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
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
  );
}
