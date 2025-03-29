import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ARVRApplications() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-0 -z-10">
          <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl -mt-20 ml-20"></div>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">
                <span className="text-primary">AR/VR</span> Applications
              </h1>
              <p className="text-gray-600">
                Splitbit tackles the capability of cutting-edge application answers for assembled applications that
                collaborate all the more practice with this present reality.
              </p>
              <p className="text-gray-600">
                Virtual reality (VR) and augmented reality (AR) have exciting potential in face of advertising,
                web-based business. They create a new interactive user experience that enables your customers to know
                more about your product or service. AR transforms the commonplace.
              </p>
              <p className="text-gray-600">
                We enable you to tap into your customer's mobile devices to turn a static physical advert into a digital
                experience.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="AR/VR Development"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">AR/VR Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Retail</h3>
              <p className="text-gray-600">
                Virtual try-ons, interactive product visualizations, and immersive shopping experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Education</h3>
              <p className="text-gray-600">
                Interactive learning environments, virtual field trips, and 3D visualizations of complex concepts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Real Estate</h3>
              <p className="text-gray-600">
                Virtual property tours, interactive floor plans, and architectural visualizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to explore AR/VR for your business?</h2>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 px-8">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

