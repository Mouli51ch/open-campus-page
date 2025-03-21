"use client"

import { LoginCallBack, useOCAuth } from "@opencampus/ocid-connect-js"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function CustomErrorComponent() {
  const { authState } = useOCAuth()
  const [errorDetails, setErrorDetails] = useState<string>("Unknown error")

  useEffect(() => {
    // Extract more detailed error information if available
    if (authState?.error) {
      setErrorDetails(authState.error.message || JSON.stringify(authState.error))
      console.error("Auth error details:", authState.error)
    }

    // Check URL parameters for error information
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const errorParam = urlParams.get("error")
      const errorDescParam = urlParams.get("error_description")

      if (errorParam) {
        setErrorDetails(`${errorParam}${errorDescParam ? `: ${errorDescParam}` : ""}`)
        console.error("URL error params:", { error: errorParam, description: errorDescParam })
      }
    }
  }, [authState])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6">
      <h2 className="text-2xl font-bold mb-4">Authentication Error</h2>
      <p className="text-muted-foreground mb-4">Error during authentication: {errorDetails}</p>
      <pre className="bg-[#0f1119] p-4 rounded-md text-sm mb-4 max-w-full overflow-auto">
        {JSON.stringify(authState?.error || {}, null, 2)}
      </pre>
      <button
        onClick={() => (window.location.href = "/")}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Return to Home
      </button>
    </div>
  )
}

function CustomLoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg">Processing authentication response...</p>
    </div>
  )
}

export default function RedirectPage() {
  const router = useRouter()
  const [error, setError] = useState<any>(null)

  const loginSuccess = () => {
    console.log("Login successful, redirecting to home")
    router.push("/")
  }

  const loginError = (error: any) => {
    console.error("Login error:", error)
    setError(error)
  }

  // Add debugging for URL parameters
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Redirect URL:", window.location.href)
      console.log("URL params:", window.location.search)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0c0e16] text-white p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">OCID Authentication</h1>

      {error ? (
        <div className="bg-red-900/20 border border-red-800 rounded-md p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Authentication Failed</h2>
          <p className="text-gray-300 mb-2">There was an error processing your authentication:</p>
          <pre className="bg-[#0f1119] p-4 rounded-md text-sm overflow-auto">{JSON.stringify(error, null, 2)}</pre>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            Return to Home
          </button>
        </div>
      ) : (
        <LoginCallBack
          errorCallback={loginError}
          successCallback={loginSuccess}
          customErrorComponent={<CustomErrorComponent />}
          customLoadingComponent={<CustomLoadingComponent />}
        />
      )}
    </div>
  )
}

