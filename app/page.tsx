import ConnectButton from "@/components/connect-button"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, GraduationCap, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0e16] text-white">
      {/* Navigation */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-[#4e7bff] hover:text-[#5e8bff] transition">
              Open Campus
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-[#4e7bff] transition">
                Home
              </Link>
              <Link href="#features" className="text-gray-400 hover:text-white transition">
                Features
              </Link>
              <Link href="#benefits" className="text-gray-400 hover:text-white transition">
                Benefits
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition">
              <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
              </svg>
            </button>
           
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover{" "}
          <span className="bg-gradient-to-r from-[#4e7bff] to-[#a855f7] text-transparent bg-clip-text">
            Open Campus
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          A new way of learning and collaboration in higher education across multiple institutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ConnectButton />
          <a href="https://mintellect.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#1c2033] hover:bg-[#252a45] text-white border border-[#4e7bff]/30 px-8 py-6 text-lg rounded-md">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-start" id="benefits">
        {/* Benefits Section */}
        <div className="bg-[#0f1119] p-8 rounded-lg border border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Benefits of Open Campus</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1c2033] rounded-lg flex items-center justify-center text-[#4e7bff]">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Expanded Learning</h3>
                <p className="text-gray-400">
                  Access courses and resources from multiple institutions, expanding your educational horizons.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1c2033] rounded-lg flex items-center justify-center text-[#4e7bff]">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Diverse Perspectives</h3>
                <p className="text-gray-400">
                  Engage with students and faculty from various institutions, bringing diverse viewpoints to your
                  education.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1c2033] rounded-lg flex items-center justify-center text-[#4e7bff]">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Seamless Collaboration</h3>
                <p className="text-gray-400">
                  Work on cross-institutional projects with a single identity, making collaboration easier than ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[#0f1119] p-8 rounded-lg border border-gray-800" id="features">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1c2033] rounded-lg flex items-center justify-center text-[#4e7bff]">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Single Sign-On</h3>
                <p className="text-gray-400">
                  Use one credential (OCID) to access resources across multiple participating institutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1c2033] rounded-lg flex items-center justify-center text-[#4e7bff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Secure Access</h3>
                <p className="text-gray-400">
                  State-of-the-art security ensures your academic identity and data are protected.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1c2033] rounded-lg flex items-center justify-center text-[#4e7bff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Portable Learning</h3>
                <p className="text-gray-400">
                  Take your academic profile and achievements with you across institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

