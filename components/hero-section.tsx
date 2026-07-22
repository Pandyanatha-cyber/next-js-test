"use client";

import * as motion from 'motion/react-client'
import { Button } from './ui/button';
import { ArrowRight, Radiation, SeparatorVertical, Sigma, Zap } from 'lucide-react';
import { easeInOut } from 'motion';

export default function HeroSection() {
    return <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/*left content*/}
                <motion.div 
                initial={{opacity: 0, y: 20}} 
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="text-center lg:text-left"
                >
                     <h1 className="relative text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground
                     leading-tight mb-6">
                        <motion.div
                        initial={{opacity: 0, scale: 0.2}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "spring", stiffness: 200, damping: 10}}
                        >
                        <motion.div
                        animate={{ opacity: [0.2, 0.5, 0, 0.3, 1, 0.2]}}
                        transition={{ repeat: Infinity, duration: 2, ease: easeInOut}}
                        >
                        <Radiation className='absolute md:-top-12 md:-right-1 -top-40
                        left-1/2 -translate-x-1/2 -translate-y-12 h-72 w-72 pointer-events-none text-indigo-500/30 blur-[1px]
                        rotate-35'/>
                        </motion.div>
                        </motion.div>
                        I am <span className="text-primary italic">Atomic</span>
                     </h1>

                     <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                        hiidoi naa.. hito no kokoro toka nainka?
                     </p>

                     <motion.div 
                     initial={{opacity: 0, y: 20}} 
                     animate={{opacity: 1, y: 0}} 
                     transition={{duration: 0.8, delay: 0.2}}>
                        <Button size='lg' className='group'>
                        This button does not work {" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Button>
                     </motion.div>
                </motion.div>
                {/*Right Content*/}
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className='hidden lg:block'
                    >
                <div className="relative">
                    <div className="w-80 h-80 bg-linear-to-br from-primary/20 to-secondary/20
                    rounded-full blur-3xl absolute -top-10 -right-10"></div>
                    <div className="w-96 h-96 bg-linear-to-tl translate-x-15 from-secondary/30 to-primary/30
                    rounded-2xl transform rotate-6 shadow-2xl overflow-hidden"
                    style={{
                        backgroundImage: "url('/images/profile-bunny.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "64px 64px"
                    }}>
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    </section>
}