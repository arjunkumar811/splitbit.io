import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Careers() {
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
              <h1 className="text-4xl font-bold">Join Our Team</h1>
              <p className="text-xl text-gray-600">
                We're looking for talented individuals who are passionate about technology and innovation.
              </p>
              <Link href="#open-positions">
                <Button className="bg-primary hover:bg-primary/90">View Open Positions</Button>
              </Link>
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

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Splitbit?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Innovative Projects</h3>
              <p className="text-gray-600">
                Work on cutting-edge technologies and challenging projects that make a real impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and career advancement with regular training and mentorship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible work arrangements and a supportive environment that values your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Senior React Developer</h3>
                  <p className="text-gray-500">Full-time • Remote</p>
                </div>
                <Link href="/careers/senior-react-developer">
                  <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                </Link>
              </div>
              <p className="text-gray-600 mb-4">
                We're looking for an experienced React developer to join our team and help build innovative web
                applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">TypeScript</span>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Mobile App Developer</h3>
                  <p className="text-gray-500">Full-time • Hybrid</p>
                </div>
                <Link href="/careers/mobile-app-developer">
                  <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                </Link>
              </div>
              <p className="text-gray-600 mb-4">
                Join our mobile development team to create innovative and user-friendly mobile applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">React Native</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Flutter</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">iOS/Android</span>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">SEO Specialist</h3>
                  <p className="text-gray-500">Full-time • On-site</p>
                </div>
                <Link href="/careers/seo-specialist">
                  <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                </Link>
              </div>
              <p className="text-gray-600 mb-4">
                We're seeking an SEO specialist to help our clients improve their search engine rankings and online
                visibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">SEO</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Content Strategy</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-2">Application Review</h3>
                  <p className="text-gray-600">
                    Our team reviews your application and resume to assess your qualifications and experience.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
                  <p className="text-gray-600">
                    A video call to discuss your background, skills, and interest in the position.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-2">Technical Assessment</h3>
                  <p className="text-gray-600">
                    Depending on the role, you may be asked to complete a technical test or project.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-2">Final Interview</h3>
                  <p className="text-gray-600">Meet with the team and discuss your potential role in more detail.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    5
                  </div>
                  <h3 className="text-xl font-bold mb-2">Offer</h3>
                  <p className="text-gray-600">If successful, you'll receive an offer to join our team!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

