import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">©splitbit.io. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/credits" className="text-xs text-muted-foreground hover:underline">
            Credits
          </Link>
        </div>
      </div>
    </footer>
  )
}

