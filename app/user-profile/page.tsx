"use client"

import { useOCAuth } from "@opencampus/ocid-connect-js"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserProfilePage() {
  const { isInitialized, authState, ocAuth, OCId, ethAddress } = useOCAuth()
  const router = useRouter()

  useEffect(() => {
    if (isInitialized && !authState.isAuthenticated) {
      router.push("/")
    }
  }, [isInitialized, authState, router])

  const handleLogout = async () => {
    try {
      await ocAuth.logout({ returnUrl: window.location.origin })
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (!isInitialized) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!authState.isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Your OCID Profile</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>Your Open Campus ID details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">OCID:</h3>
            <p className="text-muted-foreground break-all">{OCId || "Not available"}</p>
          </div>

          {ethAddress && (
            <div>
              <h3 className="font-medium">ETH Address:</h3>
              <p className="text-muted-foreground break-all">{ethAddress}</p>
            </div>
          )}

          <div className="pt-4">
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

