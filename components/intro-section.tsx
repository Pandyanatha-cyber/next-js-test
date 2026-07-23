import { easeInOut } from "motion"
import * as motion from "motion/react-client"

export default function IntroSection() {
    return (
    <section className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <motion.div
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.8}}
        >
            <div className="flex">
                <h2 className="font-serif text-2xl md:text-2xl lg:text-3xl font-bold"
                >Introduction</h2>
            </div>
        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        >
            <div className="my-5 text-muted-foreground">
                <p>My name is <span className="text-foreground">Arka Arganta Pandyanatha</span>, a student currently studying in 
                    Swinbune University of Technology.</p>
            </div>
        </motion.div>
    </section>
    )
}