import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function OpenCampusPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Open Campus</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a new way of learning and collaboration in higher education
          </p>
        </header>

        <div className="flex justify-center mb-12">
          <Button className="px-8 py-6 text-lg gap-2 group" size="lg">
            Connect with OCID
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Open Campus</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Expanded Learning Opportunities</h3>
              <p className="text-muted-foreground">
                Access courses and resources from multiple institutions, expanding your educational horizons beyond a
                single campus.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Flexible Learning Paths</h3>
              <p className="text-muted-foreground">
                Create personalized learning journeys that align with your specific goals and interests across different
                disciplines.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Diverse Perspectives</h3>
              <p className="text-muted-foreground">
                Engage with students and faculty from various institutions, bringing diverse viewpoints to your
                educational experience.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Seamless Collaboration</h3>
              <p className="text-muted-foreground">
                Work on cross-institutional projects with a single identity, making collaboration easier than ever
                before.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Simplified Access</h3>
              <p className="text-muted-foreground">
                Use one credential (OCID) to access resources across multiple participating institutions without
                managing multiple accounts.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Enhanced Networking</h3>
              <p className="text-muted-foreground">
                Build connections with a broader academic community, expanding your professional network beyond
                institutional boundaries.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to join Open Campus?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Connect with OCID today and unlock a world of educational opportunities across multiple institutions.
          </p>
          <Button className="px-8 py-6 text-lg gap-2 group" size="lg">
            Connect with OCID
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

