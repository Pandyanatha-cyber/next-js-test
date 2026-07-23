import * as motion from "motion/react-client"

export default function AboutPage() {
    return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <h1 className="relative text-6xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground
            leading-tight mb-6">
                <motion.div
                initial={{opacity: 0, x: -12}}
                animate={{opacity: 1, x: 1}}
                transition={{duration: 1.2}}
                >
                <span>Hello!</span>
                </motion.div>
                
                <motion.div
                initial={{opacity: 0, x:-6}}
                animate={{opacity: 1, x: 1}}
                transition={{duration: 1.2, delay: 0.7}}>
                <span className="block ml-17">
                    I am <span className="text-primary italic">Arga</span>
                </span>
                </motion.div>
            </h1>
        </div>
    </section>
    )
}