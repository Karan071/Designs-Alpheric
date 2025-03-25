import { MoveRight } from "lucide-react";
import asset1 from "../assets/carousel/asset1.png";
import asset2 from "../assets/carousel/asset2.png";
import asset3 from "../assets/carousel/asset3.png";
import asset4 from "../assets/carousel/asset4.png";
import React from "react";

const cardData = [
    {
        imageUrl: asset1,
        cardTitle: "Validate Your Idea",
        onButtonClick: "https://picsum.photos/",
        description: "Test your concept with real users, gather feedback, and ensure market demand before investing resources."
    },
    {
        imageUrl: asset2,
        cardTitle: "Build a Prototype",
        onButtonClick: "https://picsum.photos/",
        description: "Quickly develop a functional prototype to refine your vision, attract early adopters, and validate feasibility."
    },
    {
        imageUrl: asset3,
        cardTitle: "Create a Strategic Roadmap",
        onButtonClick: "https://picsum.photos/",
        description: "Outline clear goals, timelines, and milestones to stay on track and scale effectively."
    },
    {
        imageUrl: asset4,
        cardTitle: "Get Expert Mentorship",
        onButtonClick: "https://picsum.photos/",
        description: "Gain insights from industry experts, avoid common pitfalls, and accelerate your journey to success."
    },

];

export default function Carousel() {
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    const carouselRef = React.useRef<HTMLDivElement>(null);

    const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    const onDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; 
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto px-4 py-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory hide-scrollbar"
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={onDrag}
        >
            {cardData.map((items, index) => (
                <div key={index} className="space-y-4  snap-center">
                    <div className="relative rounded-2xl overflow-hidden">
                        <div className="h-[492px] w-[849px]">
                            <img
                                src={items.imageUrl}
                                alt="carousel images"
                                className="w-[849px] h-[492px] object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 flex justify-between items-end p-6 bg-gradient-to-b from-transparent to-black/50">
                            <p className="font-urbanist font-medium text-[64px] text-white">{items.cardTitle}</p>
                            <div className="flex justify-end items-center">
                                <button
                                    onClick={() => window.open(items.onButtonClick, '_blank')}
                                    className="bg-white/54 p-3 rounded-[60px] hover:bg-white/70 transition-colors"
                                >
                                    <MoveRight className="w-30 h-15" />
                                </button>
                            </div>

                        </div>
                    </div>
                    <p className="text-black text-[40px] font-urbanist font-semibold">{items.description}</p>
                </div>
            ))}
        </div>
    );
}