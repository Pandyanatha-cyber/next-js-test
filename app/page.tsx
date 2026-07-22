import FeaturedSection from "@/components/featured-section";
import FeedSection from "@/components/feed-section";
import HeroSection from "@/components/hero-section";

export default function home() {
    return (
    <div className="min-h-screen bg-background ">
       <main>
        <HeroSection/>
        <FeaturedSection/>
        <FeedSection/>
       </main>
    </div>
    );
}