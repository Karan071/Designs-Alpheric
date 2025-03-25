import DreamerSection from "../component/DreamerSection";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Dream() {
    // Add scroll progress tracking
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    return (
        <div className="font-instrument-sans mx-[120px]">
            <motion.section 
                style={{ opacity, scale }}
                className="py-10 font-instrument-sans h-screen flex flex-col justify-center items-center"
            >
                <motion.section 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="text-[140px] font-semibold mx-[150px]"
                    >
                        How Do You Define Yourself?
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.4
                        }}
                        className="text-[40px] text-[#444444] mx-[390px]"
                    >
                        Let's get to know each other to establish a mutual understanding of your goals and expectations.
                    </motion.h3>
                </motion.section>
            </motion.section>

            {/* Start new page for Dreamers section */}
            <motion.section 
                className="mb-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                    type: "spring",
                    stiffness: 50,
                    damping: 20
                }}
            >
                <motion.h1 
                    className="text-[100px] font-semibold"
                    initial={{ opacity: 0, rotateX: 90 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2
                    }}
                >
                    For Dreamers
                </motion.h1>
                <motion.h3 
                    className="text-[40px] text-[#444444]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.4
                    }}
                >
                    Dream big, and let us help you make it real. Your vision is <br/> our mission, crafted with love and creativity. 💡✨
                </motion.h3>
            </motion.section>

            {/* Slider section */}
            <motion.section 
                className="mt-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    type: "spring",
                    stiffness: 50,
                    damping: 20
                }}
            >
                <DreamerSection/>
            </motion.section>
        </div>
    );
}
