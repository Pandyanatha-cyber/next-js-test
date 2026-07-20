"use client";

import * as motion from 'motion/react-client'
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

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
                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground
                     leading-tight mb-6">
                        Writing That <span className="text-primary italic">Resonates</span>
                     </h1>

                     <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                        I am too lazy to copy and paste the text
                     </p>

                     <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.2}}>
                        <Button size='lg' className='group'>
                        Read the lastest post{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Button>
                     </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
}