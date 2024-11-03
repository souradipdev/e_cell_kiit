import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function GetInvolvedSection() {
  return (
    <section id={"get-involved"}
             className="w-full py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container px-6 md:px-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl md:text-6xl dark:text-white">
            Get Involved
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 md:text-xl dark:text-gray-300">
            Join us in shaping the future of entrepreneurship. Whether you're a student, mentor, or industry expert,
            there's a place for you in our community.
          </p>
          <Link href={"/#form"}>
            <Button
              className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
              size="lg">
              Explore Opportunities
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}
