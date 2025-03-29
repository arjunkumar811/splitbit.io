import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MobileApplications() {
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
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Mobile Development"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">
                <span className="text-primary">Mobile</span> Applications
              </h1>
              <p className="text-gray-600">
                Splitbit has laid down a good foundation for itself as one of the main web and versatile application
                improvement organizations that represent considerable authority in creating imaginative applications for
                web and mobile platforms.
              </p>
              <p className="text-gray-600">
                At Splitbit, our team uses data-driven technologies to create software that runs on mobile devices. We
                have a team of hardworking app developers who have vast expertise. We create high performing and
                life-changing mobile experiences.
              </p>
              <p className="text-gray-600">
                Our app development process is simple yet effective. From idea to launch, we cover design, development,
                testing, and marketing to enhance user engagement.
              </p>
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
                alt="React Native"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">React Native</h3>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Flutter"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">Flutter</h3>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Swift"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">Swift</h3>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Kotlin"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-medium">Kotlin</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to start your mobile app project?</h2>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 px-8">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

