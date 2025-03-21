import type { ReactNode } from "react"
import OCConnectWrapper from "@/components/ocid-connect-wrapper"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "Open Campus - Connect with OCID",
  description: "Discover the benefits of Open Campus and connect with OCID",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <OCConnectWrapper sandboxMode={true}>{children}</OCConnectWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

