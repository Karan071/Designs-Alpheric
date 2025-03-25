import React from 'react';
import Carousel from '../component/Carousel';
import { motion } from 'framer-motion';

export default function Services(): React.ReactElement {
    return (
        <div className='py-10 mx-[120px]'>
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="h-screen flex justify-center items-center font-instrument-sans"
            >
                <motion.h1 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-[120px] font-semibold"
                >
                    Dreamer&rsquo;s Services
                </motion.h1>
            </motion.section>

            <section className='h-screen'>
                <h1 className='font-semibold text-[120px] font-instrument-sans'>From Vision to Reality</h1>
                <h3 className='font-instrument-sans text-[#444444] text-[40px]'>The Four Essential Steps to Success</h3>
                
                {/* cards carosal  */}
                <div className='mt-5'>
                    <Carousel/>
                </div>
            </section>
        </div>
    );
}