export default function EventsSection() {
  return (
    <section id="events"
             className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container px-6 md:px-10">
        <h2
          className="text-4xl font-extrabold tracking-tight text-center text-gray-800 dark:text-white sm:text-5xl md:text-6xl mb-12">
          Events & Programs
        </h2>
        <div className="flex flex-col gap-8 items-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-950 p-6 space-y-4 w-full"
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
  );
}
