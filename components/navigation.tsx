import { navItems } from "@/lib/constants";
import Link from "next/link";

export default function Navigation() {
    return <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b 
    border-border/50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/*logo*/}
                <div className="shrink-0">
                    <h1 className="text-xl font-serif font-bold text-foreground">
                        Resonance
                    </h1>
                </div>
                {/*Desktop Navigation*/}
                <div>
                    {navItems.map(item => (
                        <Link key={item.name} href={item.href}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    </nav>
}