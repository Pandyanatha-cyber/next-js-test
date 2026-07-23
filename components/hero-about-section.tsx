import * as motion from "motion/react-client" 

export default function HeroAboutSection() {
    return (
    <div className="relative overflow-hidden">
        <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/*the uhh.. glow*/}
            <div className="w-80 h-80 bg-linear-to-br from-primary/20 to-secondary/20
                rounded-full blur-3xl absolute -top-10 right-12">
            </div>

        <motion.div
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1, delay: 1}}
        className="lg:absolute inset-0 pointer-events-none"
        >
            {/*Boxes*/}
            <div className="w-45 h-45 bg-linear-to-tl translate-x-15 lg:translate-x-22 lg:translate-y-20 from-secondary/30 to-primary/30
                    rounded-2xl transform lg:-rotate-6 rotate-6 shadow-2xl overflow-hidden">
                    <img src="/images/naoya-zenin.png" alt="You aren't Toji!" className="hidden lg:block"/>
                    <img src="/images/profile-bunny.png"/>
            </div>
            <div className="w-45 h-45 bg-linear-to-tl translate-x-250 translate-y-30 from-secondary/30 to-primary/30
                    rounded-2xl transform rotate-6 shadow-2xl overflow-hidden hidden lg:block hover:scale-105">
                <img src="images/move-bluelock.jpg" alt="MOVE!"/>        
            </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
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
    </div>
    )
}