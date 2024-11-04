import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {fetchHeroSectionData} from "@/lib/axios/fetchHeroSectionData";
import {Suspense} from "react";

function HeroSectionFallback() {
  return (
    <div className="relative w-full px-4 md:px-6 flex flex-col items-center text-center text-white space-y-6">
      <div className="w-3/4 md:w-1/2 h-10 sm:h-12 md:h-14 bg-white/30 rounded animate-pulse"></div>

      <div className="w-5/6 md:w-2/3 h-5 sm:h-6 md:h-7 bg-white/30 rounded animate-pulse"></div>
      <div className="w-2/3 md:w-1/2 h-5 sm:h-6 md:h-7 bg-white/30 rounded animate-pulse"></div>

      <div className="h-12 w-32 sm:w-36 md:w-40 bg-white/20 rounded-full animate-pulse"></div>
    </div>
  );
}


async function HeroContent() {
  const heroData = await fetchHeroSectionData();

  return (
    <>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fadeIn">
        {heroData.headLine}
      </h1>
      <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl mb-6 animate-fadeIn">
        {heroData.innovation}
      </p>
      <Link href={"/#form"} className={"pt-6"}>
        <Button
          className="px-8 py-4 bg-gradient-to-r from-white to-blue-100 text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          size="lg"
        >
          {heroData.ctaLabel}
          <ArrowRight className="ml-2 h-5 w-5"/>
        </Button>
      </Link>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-32 bg-gradient-to-r from-blue-500 to-green-500 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#ffffff33,_transparent)]"></div>
      <div className="relative px-4 md:px-6 flex flex-col items-center text-center text-white">
        <Suspense fallback={<HeroSectionFallback/>}>
          <HeroContent/>
        </Suspense>
      </div>
    </section>
  );
}
