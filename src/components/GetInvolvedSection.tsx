import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Suspense} from "react";
import {fetchGetInvolvedData} from "@/lib/axios/fetchGetInvolvedData";

function GetInvolvedSectionFallback() {
  return (
    <section
      id="get-involved"
      className="w-full py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container px-6 md:px-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="h-8 w-3/4 md:w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

          <div className="h-5 w-5/6 md:w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-5 w-2/3 md:w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

          <div className="h-10 w-32 bg-blue-200 dark:bg-blue-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

async function GetInvolvedSectionSuccess() {
  const data = await fetchGetInvolvedData();
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
    <section id={"get-involved"}
             className="w-full py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container px-6 md:px-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl md:text-6xl dark:text-white">
            Get Involved
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 md:text-xl dark:text-gray-300">
            {data.description}
          </p>
          <Link href={"/#form"}>
            <Button
              className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
              size="lg">
              {data.ctaLabel}
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}


export default function GetInvolvedSection() {
  return (
    <Suspense fallback={<GetInvolvedSectionFallback/>}>
      <GetInvolvedSectionSuccess/>
    </Suspense>
  )
}
