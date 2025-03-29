import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-0 -z-10">
          <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl -mt-20 ml-20"></div>
        </div>
        <div className="container">
          <h1 className="text-4xl font-bold mb-12">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            We've worked with clients across various industries to deliver exceptional digital solutions. Here's a
            showcase of our recent projects.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Project 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">XPAI</h3>
                <p className="text-gray-600 mb-4">
                  Building & Integrating AI driven IOT solutions for smart home automation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">AI</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">IoT</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Web App</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Project 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">MythLok</h3>
                <p className="text-gray-600 mb-4">
                  SEO partner for MythLok, helping them achieve top rankings for competitive keywords.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Content Strategy</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Analytics</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Project 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Regal Atithi</h3>
                <p className="text-gray-600 mb-4">
                  Built vacation booking flow powered by Angular, Node and AWS Cloud services.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Angular</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">AWS</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Project 4"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TRL Technologies</h3>
                <p className="text-gray-600 mb-4">
                  Developed company website with WordPress powering the content management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">WordPress</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">UI/UX</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Responsive</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Project 5"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Civic Interiors</h3>
                <p className="text-gray-600 mb-4">
                  SEO partner for a leading interior designer in Kerala, helping their growth journey.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Local SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Content Marketing</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Project 6"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AR Shopping Experience</h3>
                <p className="text-gray-600 mb-4">
                  Developed an AR-based mobile app for a retail client to enhance shopping experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">AR</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Mobile App</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">React Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to start your project?</h2>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 px-8">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

