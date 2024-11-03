import {Lightbulb, Rocket, Users} from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-11">
        <h2
          className="text-4xl font-bold tracking-tight text-center text-gray-800 dark:text-white sm:text-5xl md:text-6xl mb-12">
          About Us
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 items-center md:items-start">
          <div className="space-y-8 md:pt-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed md:leading-relaxed px-2">
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
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li
                className="flex items-start space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors">
                <Lightbulb className="h-7 w-7 text-yellow-500"/>
                <span className="text-lg font-medium">Learn from industry experts and successful entrepreneurs</span>
              </li>
              <li
                className="flex items-start space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors">
                <Rocket className="h-7 w-7 text-red-500"/>
                <span className="text-lg font-medium">Innovate through workshops and hackathons</span>
              </li>
              <li
                className="flex items-start space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors">
                <Users className="h-7 w-7 text-blue-500"/>
                <span className="text-lg font-medium">Transform ideas into successful ventures</span>
              </li>
            </ul>
          </div>
          <div
            className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image
              src="/aboutImg.jpg"
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
