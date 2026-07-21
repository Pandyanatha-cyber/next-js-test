import FeaturedSection from "@/components/featured-section";
import HeroSection from "@/components/hero-section";

export default function home() {
    return (
    <div className="min-h-screen bg-background ">
       <main>
        <HeroSection/>
        <FeaturedSection/>
       </main>
    </div>
    );
}