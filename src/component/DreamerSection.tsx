import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// profile images
import profile1 from "../assets/dream/profile/image(1).png";
import profile2 from "../assets/dream/profile/image(4).png";
import profile3 from "../assets/dream/profile/image(5).png";

// images
import image1 from "../assets/dream/images/image(2).png";
import image2 from "../assets/dream/images/image(3).png";
import image3 from "../assets/dream/images/image(6).png";



const cardDetails = [
    {
        imageUrl: image2,
        profile: profile2,
        employeeName: "Emily Davis",
        designation: "Head of Smart Farming Solutions - UX",
        jobDescription: "“We needed a user experience that could handle the complexity of AgriTech solutions while staying intuitive and user-friendly. Alpheric nailed it—turning our ideas into a design that resonates with our users and stakeholders alike.”",
        tags: "🚜 AgriTech"
    },
    {
        imageUrl: image1,
        profile: profile1,
        employeeName: "Lucas Adams",
        designation: "CEO of an Online Language School - UX Product Design",
        jobDescription: "“In a competitive EdTech landscape, standing out is crucial. Alpheric's expertise in UX design helped us create a unique, standout product that sets us apart from the competition.”",
        tags: "📚 EdTech"
    },
    {
        imageUrl: image3,
        profile: profile3,
        employeeName: "Evelyn Walker",
        designation: "Chief Technology Officer - Landing Page",
        jobDescription: "“We needed a high-impact landing page to launch our product and capture early adopters. Alpheric created a page that not only introduces the product perfectly but also simplifies pre-registration, ensuring a strong start.”",
        tags: " ☁️ Cloud Computing"
    },
    
];

export default function DreamerSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    return <div ref={containerRef} className="relative h-[300vh]">
        {/* Sticky container for animated cards */}
        <div className="flex sticky top-5 h-screen items-center overflow-hidden">
            <div className="relative w-full">
                {cardDetails.map((card, index) => (
                    <DreamerCard
                        key={index}
                        card={card}
                        scrollYProgress={scrollYProgress}
                        index={index}
                        totalCards={cardDetails.length}
                    />
                ))}
            </div>
        </div>
    </div>
}

interface DreamerCardProps {
    card: {
        imageUrl: string;
        profile: string;
        employeeName: string;
        designation: string;
        jobDescription: string;
        tags: string;
    };
    scrollYProgress: MotionValue<number>;
    index: number;
    totalCards: number;
}


// functoin for card
function DreamerCard({ card, scrollYProgress, index, totalCards }: DreamerCardProps) {
    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 15,
        restDelta: 0.001,
    });

    const chunk = 1 / totalCards;
    const start = index * chunk;
    const end = (index + 1) * chunk;
    const overlapFactor = 0.3;

    const fadeInStart = Math.max(0, start - (chunk * overlapFactor));
    const fadeInEnd = start + (chunk * 0.2);
    const fadeOutStart = end - (chunk * 0.2);
    const fadeOutEnd = Math.min(1, end + (chunk * overlapFactor));

    const imageOpacity = useTransform(
        smoothScrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    const textFadePortion = 0.4 * chunk;
    const textY = useTransform(
        smoothScrollYProgress,
        [start, start + textFadePortion, end - textFadePortion, end],
        [300, 0, 0, -550]
    );

    const textOpacity = useTransform(
        smoothScrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    const baseTransition = {
        duration: 2.5,
        ease: "easeInOut",
        delay: 0.2,
    };

    return (
        <div className="absolute inset-0 flex items-center overflow-visible">
            {/* Left section */}
            <div className="w-1/2">
                <motion.div
                    style={{ opacity: imageOpacity }}
                    transition={baseTransition}
                    className="flex justify-center items-center"
                >
                    <img src={card.imageUrl} alt="images" className="w-[594px] h-[668px] object-cover rounded-[36px] shadow-sm" />
                </motion.div>
            </div>

            {/* Right section */}
            <div className="w-1/2 p-8">
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    transition={baseTransition}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div>
                            <img className="w-16 h-16 rounded-[16px] object-cover" src={card.profile} alt="" />
                        </div>
                        <div>
                            <h1 className="text-[32px] font-semibold font-urbanist">{card.employeeName}</h1>
                            <h3 className="text-[32px] text-[#444444] font-urbanist">{card.designation}</h3>
                        </div>
                    </div>
                    <div className="mb-6">
                        <p className="text-[32px] text-[#444444] font-urbanist">{card.jobDescription}</p>
                    </div>
                    <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                        {card.tags}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}