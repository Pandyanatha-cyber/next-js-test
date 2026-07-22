import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { List } from "lucide-react";

export default function Navigation() {
    return <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b 
    border-border/50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/*logo*/}
                <div className="shrink-0">
                    <h1 className="text-xl font-serif font-bold text-foreground">
                        Ethereal
                    </h1>
                </div>
                {/*Desktop Navigation*/}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground
                        hover:text-foreground transition-colors duration-200">
                            {item.name}</Link>
                    ))}
                </div>

                <div className="flex items-center space-x-5">
                <ThemeToggle/>

                <div className="md:hidden flex items-center">
                    <List className="h-6 w-6 text-foreground cursor-pointer"/> 
                </div>
                </div>

            </div>
        </div>
    </nav>
}