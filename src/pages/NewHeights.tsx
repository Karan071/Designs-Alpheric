import Asset from "../assets/contactImage.png";
import { motion } from "framer-motion";

export default function NewHeights() {
    return <div className="mx-[120px] my-20">
        <section className="h-screen flex items-center text-center mx-[200px]">
            <motion.h1 
                className="text-[120px] font-semibold font-instrument-sans"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                So, are you ready to take your business to new heights?
            </motion.h1>
        </section>

        {/* Contact Card */}
        <section className="min-h-screen py-20">
            <div className="bg-white rounded-[32px] shadow-2xl p-16">
                <div className="grid grid-cols-2 gap-12">
                    {/* left side */}
                    <div className="relative">
                        <img src={Asset} alt="asset" className="w-[800px] h-[912px] rounded-l-2xl" />
                        <div className="absolute inset-0 flex flex-col justify-start py-15 px-18 gap-14">
                            <motion.h1 
                                className="font-instrument-sans text-[54px] text-white"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                First things first... please share your contact details
                            </motion.h1>
                            <motion.h2 
                                className="font-instrument-sans text-[32px] text-white"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                This will help our team get in touch with you within <span className="font-bold">24 to 48 hours via email.</span>
                            </motion.h2>
                        </div>
                    </div>
                    
                    {/* right side */}
                    <div className="space-y-8">
                        <div className="space-y-4 font-instrument-sans">
                            <h1 className="text-4xl font-medium text-[30px]">First things first... please share your professional contact details</h1>
                            <h3 className="text-[#444444] text-[20px]">This will help our team get in touch with you within 24 to 48 hours via email.</h3>
                        </div>

                        <form className="space-y-6 font-instrument-sans">
                            <div className="space-y-2">
                                <label className="block text-[14px]">First Name <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    placeholder="Enter First Name"
                                    className="w-full p-4 border-b border-gray-300 bg-transparent focus:outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[14px]">Last Name <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    placeholder="Enter Last Name"
                                    className="w-full p-4 border-b border-gray-300 bg-transparent focus:outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[14px]">Mobile Number <span className="text-red-500">*</span></label>
                                <div className="flex gap-2">
                                    <select className="p-4 border-b border-gray-300 bg-transparent focus:outline-none">
                                        <option value="+91">🇮🇳 +91</option>
                                    </select>
                                    <input 
                                        type="tel" 
                                        placeholder="Enter Mobile Number"
                                        className="w-full p-4 border-b border-gray-300 bg-transparent focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[14px]">Email <span className="text-red-500">*</span></label>
                                <input 
                                    type="email"
                                    placeholder="Enter Email" 
                                    className="w-full p-4 border-b border-gray-300 bg-transparent focus:outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[14px]">Company <span className="text-red-500">*</span></label>
                                <input 
                                    type="text"
                                    placeholder="Enter Company" 
                                    className="w-full p-4 border-b border-gray-300 bg-transparent focus:outline-none"
                                />
                            </div>
                            <button className="w-32 font-urbanist bg-black text-white p-4 rounded-xl">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
}