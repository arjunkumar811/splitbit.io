import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-0 -z-10">
          <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl -mt-20 ml-20"></div>
        </div>
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">Insights, tips, and updates from our team of experts.</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Blog Post 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Future of Web Development in 2025</h3>
                <p className="text-gray-500 mb-2">March 15, 2025</p>
                <p className="text-gray-600 mb-4">
                  Exploring the latest trends and technologies shaping the future of web development.
                </p>
                <Link href="/blog/post-1" className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Blog Post 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How AR/VR is Transforming E-commerce</h3>
                <p className="text-gray-500 mb-2">March 10, 2025</p>
                <p className="text-gray-600 mb-4">
                  Discover how augmented and virtual reality are creating immersive shopping experiences.
                </p>
                <Link href="/blog/post-2" className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Blog Post 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SEO Strategies That Actually Work in 2025</h3>
                <p className="text-gray-500 mb-2">March 5, 2025</p>
                <p className="text-gray-600 mb-4">
                  Learn about effective SEO techniques that can help your business rank higher on search engines.
                </p>
                <Link href="/blog/post-3" className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Blog Post 4"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mobile App Development: Native vs Cross-Platform</h3>
                <p className="text-gray-500 mb-2">February 28, 2025</p>
                <p className="text-gray-600 mb-4">
                  A comprehensive comparison to help you choose the right approach for your mobile app.
                </p>
                <Link href="/blog/post-4" className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Blog Post 5"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Impact of AI on Digital Marketing</h3>
                <p className="text-gray-500 mb-2">February 20, 2025</p>
                <p className="text-gray-600 mb-4">
                  How artificial intelligence is revolutionizing digital marketing strategies and outcomes.
                </p>
                <Link href="/blog/post-5" className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Blog Post 6"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Web Accessibility: Why It Matters and How to Implement It</h3>
                <p className="text-gray-500 mb-2">February 15, 2025</p>
                <p className="text-gray-600 mb-4">
                  A guide to making your website accessible to all users, including those with disabilities.
                </p>
                <Link href="/blog/post-6" className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with the latest industry insights and our company news.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

