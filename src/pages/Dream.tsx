import DreamerSection from "../component/DreamerSection";
import { motion } from "framer-motion";

export default function Dream() {
    return (
        <div className="font-instrument-sans mx-[120px]">
            <motion.section 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration:3 }}
                className="py-10 font-instrument-sans h-screen flex flex-col justify-center items-center"
            >
                <motion.section 
                    className="text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-[140px] font-semibold mx-[150px]"
                    >
                        How Do You Define Yourself?
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-[40px] text-[#444444] mx-[390px]"
                    >
                        Let's get to know each other to establish a mutual understanding of your goals and expectations.
                    </motion.h3>
                </motion.section>
            </motion.section>

            {/* Start new page for Dreamers section */}
            <section className="mb-4">
                <h1 className="text-[100px] font-semibold">For Dreamers</h1>
                <h3 className="text-[40px] text-[#444444]">Dream big, and let us help you make it real. Your vision is <br/> our mission, crafted with love and creativity. 💡✨</h3>
            </section>

            {/* Slider section */}
            <section className="mt-4">
                <DreamerSection/>
            </section>
        </div>
    );
}
