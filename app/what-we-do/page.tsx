import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhatWeDo() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-0 -z-10">
          <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl -mt-20 ml-20"></div>
        </div>
        <div className="container">
          <h1 className="text-4xl font-bold mb-12">What we do</h1>
        </div>
      </section>

      {/* Web Applications */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Web Development"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-primary">Web</span> applications
              </h2>
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
              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Know More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">
                <span className="text-primary">Mobile</span> applications
              </h2>
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
              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Know More</Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Mobile Development"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AR/VR Applications */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="AR/VR Development"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-primary">AR/VR</span> applications
              </h2>
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
              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Know More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">
                <span className="text-primary">Search Engine</span> Optimization
              </h2>
              <p className="text-gray-600">
                We define, design and develop ideas that produce results like getting onto the top page of Google search
                results. We Can Help!
              </p>
              <p className="text-gray-600">
                Since no one size fits all, the Splitbit team believes in analyzing your business, target phrases and
                gaining insights about your brand. Upgrading your site and content considering these variables can
                assist your pages to rank better on Search engine.
              </p>
              <p className="text-gray-600">
                You must expect transparency while investing in your SEO process. At splitbit, we have easy plus
                actionable SEO audits that can help you track your goals. We opt for link-building campaigns to enhance
                your KPIs and fulfil your needs.
              </p>
              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Know More</Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="SEO Services"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

