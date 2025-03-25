import { motion } from "framer-motion";

export default function Project() {
    return (
        <motion.section 
            className="py-10 font-instrument-sans h-screen flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <section className="text-center">
                <motion.h1 
                    className="text-[130px] font-semibold mx-[300px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Let Alpheric take your project to the next level
                </motion.h1>
                <motion.h3 
                    className="text-[40px] text-[#444444] mx-[390px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    Your success story could be next! 🚀
                </motion.h3>
            </section>
        </motion.section>
    );
}