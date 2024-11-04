"use client"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Form() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-teal-400 to-green-500">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <form
            id={"form"}
            className="p-10 backdrop-blur-md bg-white bg-opacity-20 rounded-2xl shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl font-extrabold mb-8 text-white text-center">
              Join KIIT E-Cell
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-white mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="bg-white bg-opacity-70 text-white placeholder-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-md font-medium text-white mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-white bg-opacity-70 text-white placeholder-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-md font-medium text-white mb-2">
                  Contact Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 1234567890"
                  required
                  className="bg-white bg-opacity-70 text-white placeholder-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="linkedin" className="block text-md font-medium text-white mb-2">
                  LinkedIn Profile
                </label>
                <Input
                  id="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/johndoe"
                  required
                  className="bg-white bg-opacity-70 text-white placeholder-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="interests" className="block text-md font-medium text-white mb-2">
                  Areas of Interest
                </label>
                <Input
                  id="interests"
                  placeholder="e.g., AI, Blockchain, Fintech"
                  className="bg-white bg-opacity-70 text-white placeholder-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
