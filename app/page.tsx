"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Users, Award, ArrowRight, Search, Filter, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-700/50 mix-blend-overlay z-10" />
            <div className="absolute inset-0 backdrop-blur-sm z-0">
              <img src="/hero-bg4.jpg?height=1080&width=1920" alt="" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge variant="outline" className="px-3 py-1 text-sm bg-background/80 backdrop-blur-sm">
                    Next Hackathon in <CountdownTimer />
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  🚀 Code. Compete. <span className="text-primary">Conquer!</span>
                </h1>
                <p className="text-xl text-muted-foreground text-white">
                  Join our community of developers and participate in exciting hackathons to showcase your skills, learn
                  new technologies, and win amazing prizes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/auth/register">Join Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/hackathons">Browse Hackathons</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 space-y-2">
                <label htmlFor="search" className="text-sm font-medium">
                  Search Hackathons
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="search" placeholder="Search by name, technology, or keyword..." className="pl-10" />
                </div>
              </div>
              <div className="w-full md:w-48 space-y-2">
                <label htmlFor="technology" className="text-sm font-medium">
                  Technology
                </label>
                <Select>
                  <SelectTrigger id="technology">
                    <SelectValue placeholder="All Technologies" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Technologies</SelectItem>
                    <SelectItem value="mern">MERN Stack</SelectItem>
                    <SelectItem value="ai">AI/ML</SelectItem>
                    <SelectItem value="blockchain">Blockchain</SelectItem>
                    <SelectItem value="fullstack">Full Stack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48 space-y-2">
                <label htmlFor="duration" className="text-sm font-medium">
                  Duration
                </label>
                <Select>
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Any Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Duration</SelectItem>
                    <SelectItem value="24">24 Hours</SelectItem>
                    <SelectItem value="48">48 Hours</SelectItem>
                    <SelectItem value="72">72 Hours</SelectItem>
                    <SelectItem value="week">1 Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48 space-y-2">
                <label htmlFor="difficulty" className="text-sm font-medium">
                  Difficulty
                </label>
                <Select>
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Hackathons */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Featured Hackathons</h2>
                <p className="text-muted-foreground mt-2">Discover our most popular hackathons and challenges</p>
              </div>
              <Button variant="ghost" className="mt-4 md:mt-0" asChild>
                <Link href="/hackathons">
                  View all hackathons <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8 p-1 bg-muted/70 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="ai"
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  AI/ML
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  Web Dev
                </TabsTrigger>
                <TabsTrigger
                  value="blockchain"
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  Blockchain
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  Mobile
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <HackathonCard
                    title="AI Innovation Challenge"
                    description="Solve real-world AI problems using Python, TensorFlow, and OpenCV"
                    image="/placeholder.svg?height=200&width=400"
                    startDate="Monthly"
                    duration="48 hours"
                    teamSize="1-4"
                    difficulty="Intermediate"
                    href="/hackathons/ai-innovation-challenge"
                  />
                  <HackathonCard
                    title="MERN Stack Hackathon"
                    description="Build a full-stack MERN app with real-time features"
                    image="/placeholder.svg?height=200&width=400"
                    startDate="Bi-weekly"
                    duration="72 hours"
                    teamSize="1-3"
                    difficulty="Intermediate"
                    href="/hackathons/mern-stack-hackathon"
                  />
                  <HackathonCard
                    title="Full-Stack Challenge"
                    description="Develop a scalable full-stack app using Next.js and Firebase"
                    image="/placeholder.svg?height=200&width=400"
                    startDate="Monthly"
                    duration="48 hours"
                    teamSize="1-4"
                    difficulty="Intermediate"
                    href="/hackathons/full-stack-challenge"
                  />
                  <HackathonCard
                    title=".NET MVC Enterprise Hackathon"
                    description="Build an enterprise-grade app using .NET MVC and SQL Server"
                    image="/placeholder.svg?height=200&width=400"
                    startDate="Monthly"
                    duration="72 hours"
                    teamSize="2-5"
                    difficulty="Advanced"
                    href="/hackathons/dotnet-mvc-enterprise-hackathon"
                  />
                  <HackathonCard
                    title="Blockchain Hackathon"
                    description="Create and deploy smart contracts on Ethereum using Solidity"
                    image="/placeholder.svg?height=200&width=400"
                    startDate="Quarterly"
                    duration="72 hours"
                    teamSize="1-3"
                    difficulty="Advanced"
                    href="/hackathons/blockchain-hackathon"
                  />
                </div>
              </TabsContent>
              <TabsContent value="ai" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <HackathonCard
                    title="AI Innovation Challenge"
                    description="Solve real-world AI problems using Python, TensorFlow, and OpenCV"
                    image="/placeholder.svg?height=200&width=400"
                    startDate="Monthly"
                    duration="48 hours"
                    teamSize="1-4"
                    difficulty="Intermediate"
                    href="/hackathons/ai-innovation-challenge"
                  />
                </div>
              </TabsContent>
              {/* Other tabs content would be similar */}
            </Tabs>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose Hackathon Hub?</h2>
              <p className="text-muted-foreground mt-4">
                We provide the best platform for developers to learn, compete, and grow their skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="h-8 w-8 text-primary" />}
                title="Learn by Doing"
                description="Gain hands-on experience by building real projects under time constraints, the best way to master new technologies."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Connect with Peers"
                description="Network with like-minded developers, form teams, and collaborate on exciting projects together."
              />
              <FeatureCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Win Prizes"
                description="Showcase your skills, get recognized, and win exciting prizes and opportunities from our sponsors."
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">What Our Participants Say</h2>
              <p className="text-muted-foreground mt-4">Hear from developers who have participated in our hackathons</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Alex Johnson"
                role="Full Stack Developer"
                company="TechCorp"
                image="/placeholder.svg?height=100&width=100"
                testimonial="Participating in the MERN Stack Hackathon was an incredible experience. I learned so much in just 72 hours and made connections that led to my current job."
              />
              <TestimonialCard
                name="Sarah Chen"
                role="AI Engineer"
                company="DataMinds"
                image="/placeholder.svg?height=100&width=100"
                testimonial="The AI Innovation Challenge pushed me to think outside the box. The mentorship and resources provided were invaluable for my growth as an AI developer."
              />
              <TestimonialCard
                name="Michael Rodriguez"
                role="Blockchain Developer"
                company="ChainWorks"
                image="/placeholder.svg?height=100&width=100"
                testimonial="Hackathon Hub's Blockchain Hackathon gave me the opportunity to showcase my skills to industry leaders. The feedback I received was priceless."
              />
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Our Partners</h2>
              <p className="text-muted-foreground mt-4">
                We collaborate with leading tech companies to bring you the best hackathon experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PartnerCard
                name="Muhammad Arsalan"
                title="MERN Stack Dev"
                company="Saylani Tech"
                image="/arsalan.jpg?height=200&width=200"
              />
              <PartnerCard
                name="Sarah Johnson"
                title="Co-Founder"
                company="DataWise Analytics"
                image="/arsalan.jpg?height=200&width=200"
              />
              <PartnerCard
                name="Michael Chen"
                title="Founder"
                company="CodeCraft Innovations"
                image="/arsalan.jpg?height=200&width=200"
              />
              <PartnerCard
                name="Emily Rodriguez"
                title="CEO"
                company="FutureTech Systems"
                image="/arsalan.jpg?height=200&width=200"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Start Your Hackathon Journey?</h2>
              <p className="mt-4 text-primary-foreground/80">
                Join our community today and participate in exciting hackathons to showcase your skills
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/auth/register">Sign Up Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/hackathons">Browse Hackathons</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  function calculateTimeRemaining() {
    const nextHackathonDate = new Date("2024-12-31T23:59:59")
    const now = new Date()
    const difference = nextHackathonDate.getTime() - now.getTime()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  return (
    <span className="font-mono">
      {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
    </span>
  )
}

function HackathonCard({
  title,
  description,
  image,
  startDate,
  duration,
  teamSize,
  difficulty,
  href,
}: {
  title: string
  description: string
  image: string
  startDate: string
  duration: string
  teamSize: string
  difficulty: string
  href: string
}) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-muted hover:border-primary/20 relative bg-gradient-to-br from-background to-background/80">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10" />

      <div className="aspect-video relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border border-primary/10">
            {difficulty}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2 transform group-hover:translate-y-[-5px] transition-transform duration-300">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 flex-grow transform group-hover:translate-y-[-5px] transition-transform duration-300">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4 text-primary" />
          <span>Starts: {startDate}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4 text-primary" />
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4 text-primary" />
          <span>Team Size: {teamSize}</span>
        </div>
      </CardContent>

      <CardFooter className="transform group-hover:translate-y-[-5px] transition-transform duration-300">
        <Button
          className="w-full bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary"
          asChild
        >
          <Link href={href}>View Details</Link>
        </Button>
      </CardFooter>

      <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300"></div>
    </Card>
  )
}

function TestimonialCard({
  name,
  role,
  company,
  image,
  testimonial,
}: {
  name: string
  role: string
  company: string
  image: string
  testimonial: string
}) {
  return (
    <Card className="group bg-gradient-to-br from-background to-background/80 overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted hover:border-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10" />

      <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
        <MessageSquare className="h-16 w-16" />
      </div>

      <CardHeader className="pb-2 relative z-10">
        <div className="flex items-center gap-4 transform group-hover:translate-y-[-5px] transition-transform duration-300">
          <Avatar className="h-14 w-14 border-2 border-primary/20 shadow-md">
            <AvatarImage
              src={image}
              alt={name}
              className="transform group-hover:scale-110 transition-transform duration-500"
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription className="text-primary">
              {role}, {company}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 transform group-hover:translate-y-[-5px] transition-transform duration-300">
        <p className="text-muted-foreground italic">"{testimonial}"</p>
      </CardContent>

      <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300"></div>
    </Card>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="group bg-gradient-to-br from-background to-background/80 overflow-hidden hover:shadow-xl transition-all duration-300 border border-muted hover:border-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10" />

      <CardHeader className="pb-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-primary/10 shadow-md">
          {icon}
        </div>
        <CardTitle className="text-xl transform group-hover:translate-y-[-5px] transition-transform duration-300">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="transform group-hover:translate-y-[-5px] transition-transform duration-300">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>

      <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300"></div>
    </Card>
  )
}

function PartnerCard({
  name,
  title,
  company,
  image,
}: {
  name: string
  title: string
  company: string
  image: string
}) {
  return (
    <Card className="bg-gradient-to-br from-background to-background/80 overflow-hidden group hover:shadow-xl transition-all duration-300 border border-muted hover:border-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10" />

      <div className="p-6 flex flex-col items-center transform group-hover:translate-y-[-5px] transition-transform duration-300">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-primary/20 shadow-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <h3 className="text-xl font-bold text-center mb-1">{name}</h3>
        <p className="text-primary font-medium text-center mb-3">{title}</p>
        <p className="text-muted-foreground text-sm text-center">{company}</p>
      </div>

      <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300"></div>
    </Card>
  )
}

