import Link from "next/link"
import { Logo } from "./logo"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about-us" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/what-we-do" className="text-sm font-medium transition-colors hover:text-primary">
            What we do
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

