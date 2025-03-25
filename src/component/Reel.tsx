import { useRef, useState, useEffect } from "react";
import { X, VolumeOff, Volume2 } from "lucide-react"
import reelPoster from "../assets/reelPoster.png";

export default function Reels() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isShowingPanel, setIsShowingPanel] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.autoplay = true;
            videoRef.current.playsInline = true;
            videoRef.current.loop = true;
            videoRef.current.play().catch(error => {
                console.error("Error attempting to play:", error);
            });
        }
    }, []);

    const handleVolumeToggle = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.muted = false;
                videoRef.current.volume = 1;
            } else {
                videoRef.current.muted = true;
                videoRef.current.volume = 0;
            }
            setIsMuted(!isMuted);
        }
    };
    return (
        <>
            {isShowingPanel && (
                <div className="fixed bottom-12 md:bottom-25 md:right-8 bg-slate-900 text-white rounded-3xl sm:rounded-4xl h-[280px] sm:h-[350px] md:h-[409px] w-[180px] sm:w-[200px] md:w-[230px] z-50">
                    <div className="relative">
                        <video
                            src="https://rondesignlab.com/video/common/intercom.mp4"
                            className="w-full object-cover rounded-3xl sm:rounded-4xl"
                            ref={videoRef}
                            poster={reelPoster}
                            autoPlay
                            playsInline
                            muted
                        />
                        <button
                            onClick={() => setIsShowingPanel(false)}
                            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-lg sm:rounded-xl text-black z-10 hover:bg-black hover:text-white flex justify-center items-center p-1"
                        >
                            <X size={16} className="sm:hidden" />
                            <X size={25} className="hidden sm:block" />
                        </button>

                        <button
                            onClick={handleVolumeToggle}
                            className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-lg sm:rounded-xl text-black z-10 hover:bg-black hover:text-white flex justify-center items-center p-1"
                        >
                            {isMuted ? (
                                <>
                                    <VolumeOff size={16} className="sm:hidden" />
                                    <VolumeOff size={25} className="hidden sm:block" />
                                </>
                            ) : (
                                <>
                                    <Volume2 size={16} className="sm:hidden" />
                                    <Volume2 size={25} className="hidden sm:block" />
                                </>
                            )}
                        </button>

                        <button
                            onClick={() => {
                                window.scrollTo({
                                    top: document.documentElement.scrollHeight || document.body.scrollHeight,
                                    behavior: "smooth"
                                });
                            }}
                            className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-[130px] sm:w-[173px] h-[36px] sm:h-[46px] bg-black text-white font-medium rounded-[63px] py-1 sm:py-2 text-sm sm:text-xl hover:bg-white transition hover:text-black">
                            Let's Talk 👋
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}