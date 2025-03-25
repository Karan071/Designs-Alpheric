import React, { useRef } from 'react';
import Carousel from '../component/Carousel';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Services(): React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 15,
        stiffness: 30,
        mass: 0.5
    });

    // Transform values for first section
    const titleScale = useTransform(smoothProgress, [0, 0.2], [0.8, 1]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(smoothProgress, [0, 0.2], [100, 0]);

    // Transform values for second section
    const heading1X = useTransform(smoothProgress, [0.3, 0.5], [-100, 0]);
    const heading1Opacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
    const heading2X = useTransform(smoothProgress, [0.4, 0.6], [100, 0]);
    const heading2Opacity = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);

    return (
        <div ref={containerRef} className='py-10 mx-[120px]'>
            <motion.section 
                className="h-screen flex justify-center items-center font-instrument-sans"
                style={{
                    scale: titleScale,
                    opacity: titleOpacity,
                    y: titleY
                }}
            >
                <motion.h1 
                    className="text-[120px] font-semibold relative"
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.span
                        initial={{ backgroundSize: "0% 5px" }}
                        whileHover={{ backgroundSize: "100% 5px" }}
                        style={{
                            backgroundImage: "linear-gradient(black, black)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left bottom",
                            transition: "background-size 0.3s ease"
                        }}
                    >
                        Dreamer&rsquo;s Services
                    </motion.span>
                </motion.h1>
            </motion.section>

            <section className='h-screen'>
                <motion.h1 
                    className='font-semibold text-[120px] font-instrument-sans'
                    style={{
                        x: heading1X,
                        opacity: heading1Opacity
                    }}
                >
                    From Vision to Reality
                </motion.h1>
                <motion.h3 
                    className='font-instrument-sans text-[#444444] text-[40px]'
                    style={{
                        x: heading2X,
                        opacity: heading2Opacity
                    }}
                >
                    The Four Essential Steps to Success
                </motion.h3>
                
                <motion.div 
                    className='mt-5'
                    style={{
                        opacity: useTransform(smoothProgress, [0.5, 0.7], [0, 1]),
                        scale: useTransform(smoothProgress, [0.5, 0.7], [0.95, 1])
                    }}
                >
                    <Carousel/>
                </motion.div>
            </section>
        </div>
    );
}