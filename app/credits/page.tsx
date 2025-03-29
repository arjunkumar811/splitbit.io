import Link from "next/link"

export default function Credits() {
  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container">
          <h1 className="text-4xl font-bold mb-12">Credits</h1>
          <div className="prose max-w-none">
            <p>©splitbit.io. All rights reserved.</p>
            <h2>Image Credits</h2>
            <p>All illustrations used on this website are placeholder images for demonstration purposes.</p>
            <h2>Technology Stack</h2>
            <p>This website is built using:</p>
            <ul>
              <li>Next.js - React framework</li>
              <li>Tailwind CSS - Utility-first CSS framework</li>
              <li>Shadcn UI - UI component library</li>
              <li>Vercel - Hosting and deployment</li>
            </ul>
            <h2>Contact</h2>
            <p>
              For any inquiries regarding this website, please contact us at{" "}
              <Link href="mailto:develop@splitbit.io" className="text-primary hover:underline">
                develop@splitbit.io
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

