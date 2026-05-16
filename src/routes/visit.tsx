import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { LottoSection, VisitSection, Footer } from "./index";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Cheezy Variety Store" },
      {
        name: "description",
        content: "Find Cheezy Variety’s hours, location, and contact details in Cambridge, Ontario.",
      },
      { property: "og:title", content: "Visit Cheezy Variety" },
      {
        property: "og:description",
        content: "Plan your visit to Cheezy Variety with hours, phone number, lotto counter details, and directions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <LottoSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
