import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WebApplications() {
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
                <span className="text-primary">Web</span> Applications
              </h1>
              <p className="text-gray-600">
                At Splitbit, our team utilises learnings from our vast experience and executes them all through the
                website composition.
              </p>
              <p className="text-gray-600">
                Splitbit has practical experience in web composition and improvement administrations. Our web encounters
                are high-performing, include stuffed and carefully extraordinary, intended to be easy to use, completely
                practical, extremely secure, and ready to scale as your venture develops.
              </p>
              <p className="text-gray-600">
                Regardless of whether you're toward the beginning of your start up venture, or have gotten somewhat way
                in yet need to get down on an essential time, we can assist you with getting your arrangements straight,
                and give you the best opportunity of accomplishment.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Web Development"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="React"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">React</h3>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Angular"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">Angular</h3>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Node.js"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">Node.js</h3>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="WordPress"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">WordPress</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to start your web project?</h2>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 px-8">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

