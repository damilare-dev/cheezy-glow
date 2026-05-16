import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { GallerySection, AtmosphereSection, ReviewsSection, Footer } from "./index";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cheezy Variety Store" },
      {
        name: "description",
        content: "See the store atmosphere, gallery, and neighborhood reviews for Cheezy Variety.",
      },
      { property: "og:title", content: "Cheezy Variety Gallery" },
      {
        property: "og:description",
        content: "Browse Cheezy Variety’s store gallery and learn what customers love about our neighborhood shop.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <GallerySection />
        <AtmosphereSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
