import DreamerSection from "../component/DreamerSection";
export default function Dream() {
    return (
        <div className="font-instrument-sans mx-[120px]">
            <section className="py-10 font-instrument-sans h-screen flex flex-col justify-center items-center ">
                <section className="text-center">
                    <h1 className="text-[140px] font-semibold mx-[150px]">How Do You Define Yourself?</h1>
                    <h3 className="text-[40px] text-[#444444] mx-[390px]">Let’s get to know each other to establish a mutual understanding of your goals and expectations.</h3>
                </section>
            </section>

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
