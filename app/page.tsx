import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import BlogSection from "@/components/BlogSection";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});
const ScrollStory = dynamic(() => import("@/components/ScrollStory"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDestinations />
        <ScrollStory />
        <BlogSection />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
