'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ListTodo, PlusCircle, Zap } from 'lucide-react'
import Link from 'next/link'  // Add this import

export function BlockPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6" />
          <span className="sr-only">TaskBot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#install">
            Install
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Meet TaskBot: Your Slack Task Tracker
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline your workflow and boost productivity with our intuitive Slack-integrated task management bot.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <PlusCircle className="w-6 h-6 mb-2" />
                    Create Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Quickly add new tasks directly from your Slack conversations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <ListTodo className="w-6 h-6 mb-2" />
                    Manage Lists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Organize tasks into lists for better project management.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <CheckCircle className="w-6 h-6 mb-2" />
                    Track Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Mark tasks as complete and monitor your team's progress.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-decimal list-inside">
              <li className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                <h3 className="font-bold mb-2">Install TaskBot</h3>
                <p>Add TaskBot to your Slack workspace with just a few clicks.</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                <h3 className="font-bold mb-2">Create Tasks</h3>
                <p>Use simple slash commands to create and assign tasks in any channel.</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                <h3 className="font-bold mb-2">Stay Organized</h3>
                <p>Manage your tasks, set due dates, and track progress all within Slack.</p>
              </li>
            </ol>
          </div>
        </section>
        <section id="install" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Productivity?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Install TaskBot in your Slack workspace and start managing your tasks more efficiently today.
                </p>
              </div>
              <Button size="lg">
                <Zap className="mr-2 h-4 w-4" />
                Add to Slack
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TaskBot. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}