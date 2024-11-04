import {Suspense} from "react";
import {fetchEventData} from "@/lib/axios/fetchEventData";
interface Event {
  name: string;
  description: string;
}


function EventSectionFallback() {
  return (
    <section
      id="events"
      className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container px-6 md:px-10">
        <h2
          className="text-4xl font-extrabold tracking-tight text-center text-gray-800 dark:text-white sm:text-5xl md:text-6xl mb-12">
          Events & Programs
        </h2>
        <div className="flex flex-col gap-8 items-center">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-950 p-6 space-y-4 w-full max-w-6xl"
            >
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-2/3 animate-pulse mb-4"/>
              <p className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse"/>
              <p className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 animate-pulse"/>
              <p className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3 animate-pulse"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

async function EventSectionSuccess() {
  const data = await fetchEventData();

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
    <section
      id="events"
      className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container px-6 md:px-10">
        <h2
          className="text-4xl font-extrabold tracking-tight text-center text-gray-800 dark:text-white sm:text-5xl md:text-6xl mb-12"
        >
          Events & Programs
        </h2>
        <div className="flex flex-col gap-10 items-center">
          {data.map((event: Event, index: number) => (
            <div
              key={index}
              className="transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-950 p-8 space-y-4 w-full max-w-6xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide leading-tight">
                {event.name}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EventsSection() {

  return (
    <Suspense fallback={<EventSectionFallback/>}>
      <EventSectionSuccess/>
    </Suspense>
  );
}
