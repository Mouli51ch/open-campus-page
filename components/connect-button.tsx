"use client"

import { useOCAuth } from "@opencampus/ocid-connect-js"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function ConnectButton() {
  const { ocAuth, isInitialized, authState } = useOCAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Only check authentication state when SDK is initialized
    if (isInitialized) {
      try {
        // Get the actual authentication state from the SDK
        const state = ocAuth.getAuthState()
        setIsAuthenticated(!!state?.isAuthenticated && !!state?.accessToken)
        console.log("Auth state:", state)
      } catch (error) {
        console.error("Error checking auth state:", error)
      }
    }
  }, [isInitialized, ocAuth])

  const handleConnect = async () => {
    if (!isInitialized) return

    try {
      setIsLoading(true)
      setError(null)

      // Removed the getConfig() call that was causing the error

      // Use a simple state value
      await ocAuth.signInWithRedirect({ state: "opencampus" })
    } catch (error) {
      console.error("OCID connection error:", error)
      setError(error instanceof Error ? error.message : "Connection failed")
      setIsLoading(false)
    }
  }

  if (isAuthenticated) {
    return (
      <Button
        className="bg-gradient-to-r from-[#4e7bff] to-[#a855f7] hover:opacity-90 text-white px-8 py-6 text-lg rounded-md"
        variant="outline"
      >
        Connected to OCID
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <Button
        className="bg-gradient-to-r from-[#4e7bff] to-[#a855f7] hover:opacity-90 text-white px-8 py-6 text-lg rounded-md"
        onClick={handleConnect}
        disabled={!isInitialized || isLoading}
      >
        {isLoading ? "Connecting..." : "Connect with OCID"}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>

      {error && <div className="mt-2 text-red-500 text-sm">Error: {error}</div>}
    </div>
  )
}

