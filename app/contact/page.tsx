"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    phone: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      service: "",
      phone: "",
      email: "",
    })
    alert("Message sent! We'll get back to you soon!")
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-0 -z-10">
          <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl -mt-20 ml-20"></div>
        </div>
        <div className="container">
          <h1 className="text-4xl font-bold mb-12">Ready to discuss your project?</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Hi, My Name is</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">I am looking for help with a</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Application</SelectItem>
                      <SelectItem value="mobile">Mobile Application</SelectItem>
                      <SelectItem value="arvr">AR/VR Application</SelectItem>
                      <SelectItem value="seo">SEO Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">My phone number is</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+91888888888"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">You can mail me at</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="yourmail@address.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90 w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-medium mb-4 flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  Email
                </h2>
                <p className="text-gray-600">develop@splitbit.io</p>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-4 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Registered Office
                </h2>
                <address className="not-italic text-gray-600">
                  Unit No 203, 2nd Floor Suite # 779,
                  <br />
                  SBR CV Towers, Sector-I, Sy No 64,HUDA
                  <br />
                  Techno Enclave, Madhapur,
                  <br />
                  Hyderabad - 500081
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

