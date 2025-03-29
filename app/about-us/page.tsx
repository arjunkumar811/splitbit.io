import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-0 -z-10">
          <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl -mt-20 ml-20"></div>
        </div>
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">We are</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600">
                splitbit.io, with a motto of <span className="font-medium">Making development simple</span> makes us a
                hassle-free development partner for your web designing and development process.
              </p>
              <p className="text-gray-600">
                Along with web development, we provide digital marketing services for clients all over the world. We can
                grow your website and business with SEO, social media marketing, and performance marketing. From web
                development and paid promoting, to social media and SEO, every move we make is strategic, purposeful,
                and data-driven.
              </p>
              <p className="text-gray-600">
                Our <span className="text-primary font-medium">competitive approach</span> always pays off.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Team working"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Our process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image src="/placeholder.svg?height=80&width=150" alt="Atlassian Jira" width={150} height={80} />
              <h3 className="text-xl font-medium">Atlassian Jira</h3>
              <p className="text-gray-600">A dedicated board will be setup to track the tasks related to the app</p>
            </div>
            <div className="space-y-4">
              <Image src="/placeholder.svg?height=80&width=150" alt="Email Communication" width={150} height={80} />
              <h3 className="text-xl font-medium">Email Communication</h3>
              <p className="text-gray-600">A daily / weekly updates of the application through email.</p>
            </div>
            <div className="space-y-4">
              <Image src="/placeholder.svg?height=80&width=150" alt="Daily Standups" width={150} height={80} />
              <h3 className="text-xl font-medium">Daily Standups</h3>
              <p className="text-gray-600">
                A daily standup will be done to discuss about the progress and blockers if any.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Our clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image src="/placeholder.svg?height=80&width=200" alt="Civic Interiors" width={200} height={80} />
              <p className="text-gray-600">
                We have been a part of civic interiors, a leading interior designer in Kerala, growth journey as their
                SEO partner
              </p>
            </div>
            <div className="space-y-4">
              <Image src="/placeholder.svg?height=80&width=200" alt="Regal Atithi" width={200} height={80} />
              <p className="text-gray-600">
                Helped in building vacation booking flow for Regal Atithi, powered by Angular, Node and AWS Cloud
                services
              </p>
            </div>
            <div className="space-y-4">
              <Image src="/placeholder.svg?height=80&width=200" alt="TRL Technologies" width={200} height={80} />
              <p className="text-gray-600">Developed the company website with wordpress powering the contents</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

