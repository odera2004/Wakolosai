
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProductsSection } from "@/components/sections/featured-product-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedProductsSection />
      <CollectionSection />
      <FooterSection />
    </main>
  );
}
