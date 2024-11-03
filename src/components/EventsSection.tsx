export default function EventsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container px-6 md:px-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-center text-gray-800 dark:text-white sm:text-5xl md:text-6xl mb-12">
          Events & Programs
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-950"
            >
              <div className="w-full h-52 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
