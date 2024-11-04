import {Lightbulb, Rocket, Users} from "lucide-react";
import Image from "next/image";
import {Suspense} from "react";
import {fetchHeroSectionData} from "@/lib/axios/fetchAboutUsData";

function AboutSectionSkeleton() {
  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-11 animate-pulse">
        <h2
          className="text-4xl font-bold tracking-tight text-center text-gray-800 dark:text-white sm:text-5xl md:text-6xl mb-12">
          About Us
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 items-center md:items-start">
          <div className="space-y-8 md:pt-6">
            <div className="bg-gray-300 dark:bg-gray-700 h-6 w-3/4 rounded-md mb-4"></div>
            <ul className="space-y-3">
              {[...Array(3)].map((_, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 bg-gray-300 dark:bg-gray-700 p-4 rounded-lg h-12 w-full"
                />
              ))}
            </ul>
          </div>
          <div
            className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </section>
  );
}

async function AboutSectionSuccess() {
  const data = await fetchHeroSectionData();

  if (data.error) {
    return (
      <section className="w-full py-12 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="container px-4 md:px-11">
          <p className="text-xl text-gray-700 dark:text-gray-300">{data.message}</p>
        </div>
      </section>
    );
  }

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
              {data.about[0] + " "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {data.about[1] + " "}
              </span>{" "}
              {data.about[2] + " "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                {data.about[3] + " "}
              </span>{" "}
              {data.about[4] + " "}
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li
                className="flex items-start space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors">
                <Lightbulb className="h-7 w-7 text-yellow-500"/>
                <span className="text-lg font-medium">
                  {data.points[0]}
                </span>
              </li>
              <li
                className="flex items-start space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors">
                <Rocket className="h-7 w-7 text-red-500"/>
                <span className="text-lg font-medium">
                  {data.points[1]}
                </span>
              </li>
              <li
                className="flex items-start space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors">
                <Users className="h-7 w-7 text-blue-500"/>
                <span className="text-lg font-medium">
                  {data.points[2]}
                </span>
              </li>
            </ul>
          </div>

          <div
            className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image
              src={`/${data.image}`}
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

export default async function AboutSection() {
  return (
    <Suspense fallback={<AboutSectionSkeleton/>}>
      <AboutSectionSuccess/>
    </Suspense>
  )
}
