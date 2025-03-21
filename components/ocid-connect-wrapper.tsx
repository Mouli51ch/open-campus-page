"use client"

import { type ReactNode, useEffect, useState } from "react"
import { OCConnect } from "@opencampus/ocid-connect-js"

interface OCConnectWrapperProps {
  children: ReactNode
  sandboxMode?: boolean
}

export default function OCConnectWrapper({ children, sandboxMode = true }: OCConnectWrapperProps) {
  // Start with a default state
  const [isReady, setIsReady] = useState(false)
  const [opts, setOpts] = useState({
    redirectUri: "http://localhost:3000/redirect", // Default for development
    referralCode: "PARTNER6",
  })

  useEffect(() => {
    // This runs only on the client side after component mounts
    if (typeof window !== "undefined") {
      // Get the current origin (domain) dynamically
      const origin = window.location.origin
      const redirectUri = `${origin}/redirect`

      console.log("Setting redirect URI to:", redirectUri)

      setOpts({
        redirectUri: redirectUri,
        referralCode: "PARTNER6",
      })

      setIsReady(true)
    }
  }, [])

  // Only render the OCConnect component when we're ready with the correct redirect URI
  if (!isReady) {
    return (
      <div className="min-h-screen bg-[#0c0e16] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#4e7bff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <OCConnect opts={opts} sandboxMode={sandboxMode}>
      {children}
    </OCConnect>
  )
}

