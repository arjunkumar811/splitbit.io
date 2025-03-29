import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10">
          <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl -mt-20 ml-20"></div>
        </div>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              Hi there, we are <span className="text-gray-700">splitbit.io</span>
            </h1>
            <p className="text-lg text-gray-600">
              Take your business to new levels with our <span className="text-primary font-medium">smart digital</span>{" "}
              services.
            </p>
            <div>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90">Find out more</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="JavaScript"
                width={80}
                height={80}
                className="rounded-lg shadow-sm"
              />
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="React"
                width={80}
                height={80}
                className="rounded-lg shadow-sm"
              />
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Flutter"
                width={80}
                height={80}
                className="rounded-lg shadow-sm"
              />
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="WordPress"
                width={80}
                height={80}
                className="rounded-lg shadow-sm"
              />
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="AWS"
                width={80}
                height={80}
                className="rounded-lg shadow-sm"
              />
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Figma"
                width={80}
                height={80}
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Making Development Simple Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-2">
            Making development <span className="text-primary">simple</span>
          </h2>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gray-700">What makes us stand out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image src="/placeholder.svg?height=150&width=150" alt="Transparency" width={150} height={150} />
              </div>
              <h3 className="text-xl font-medium mb-2">Transparency</h3>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image src="/placeholder.svg?height=150&width=150" alt="On-time delivery" width={150} height={150} />
              </div>
              <h3 className="text-xl font-medium mb-2">On-time delivery</h3>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Prompt Communication"
                  width={150}
                  height={150}
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Prompt Communication</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Target oriented"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-700">Target oriented</h2>
              <p className="text-gray-600">
                We focus on delivering results that matter to your business. Our approach is data-driven and strategic.
              </p>
              <div>
                <Link href="/what-we-do">
                  <Button className="bg-primary hover:bg-primary/90">Connect now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Was Part Of */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gray-700">Our team was part of</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image src="/placeholder.svg?height=80&width=200" alt="XPAI" width={200} height={80} className="mb-4" />
              <p className="text-gray-600">Building & Integrating AI driven IOT</p>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=80&width=200"
                alt="MythLok"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-gray-600">As an SEO partner, we helped Mythlok.</p>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=80&width=200"
                alt="TRL Technologies"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-gray-600">Developed the company website with wordpress powering the contents</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">Still thinking? what do you have to lose?</h2>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg h-auto">Connect now</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

