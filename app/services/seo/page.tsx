import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SEO() {
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
                alt="SEO Services"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">
                <span className="text-primary">Search Engine</span> Optimization
              </h1>
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
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our SEO Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Audit</h3>
              <p className="text-gray-600">Comprehensive analysis of your website and competitors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Strategy</h3>
              <p className="text-gray-600">Develop a customized SEO plan based on audit findings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Implementation</h3>
              <p className="text-gray-600">Execute on-page and off-page optimization</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Reporting</h3>
              <p className="text-gray-600">Regular updates and transparent performance metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to improve your search rankings?</h2>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 px-8">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

