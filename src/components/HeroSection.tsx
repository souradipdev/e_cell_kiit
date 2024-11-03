'use client'

import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Empowering Innovators of Tomorrow
          </h1>
          <p className="mx-auto max-w-[700px] text-lg sm:text-xl">
            KIIT E-Cell fosters a culture of innovation, providing aspiring entrepreneurs with resources, mentorship,
            and hands-on opportunities to turn ideas into impactful ventures.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg"> // To be added
            Join KIIT E-Cell
            <ArrowRight className="ml-2 h-4 w-4"/>
          </Button>
        </div>
      </div>
    </section>
  )
}
