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
    return <div>
        <div className="mt-10">
            {cardDetails.map((card, i) => (
                <div key={i} className="mb-32 last:mb-0">
                    <div className="flex">
                        {/* left section */}
                        <div className="w-1/2">
                            <div className="flex justify-center items-center">
                                <img src={card.imageUrl} alt="images" className="w-[594px] h-[668px] object-cover rounded-[36px] shadow-sm" />
                            </div>
                        </div>
                        {/* right section */}
                        <div className="w-1/2 p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div>
                                    <img className="w-16 h-16 rounded-[16px] object-cover" src={card.profile} alt="" />
                                </div>
                                <div>
                                    <h1 className="text-[32px] font-semibold font-urbanist">{card.employeeName}</h1>
                                    <h3 className="text-[32px] text-[#444444] font-urbanist">{card.designation}</h3>
                                </div>
                            </div>
                            {/* paragraph */}
                            <div className="mb-6">
                                <p className="text-[32px] text-[#444444] font-urbanist">{card.jobDescription}</p>
                            </div>
                            {/* tag */}
                            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                                {card.tags}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}