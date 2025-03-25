import { useRef, useState } from "react";
import videsectionImage from "../assets/design-asset-cropped.png";
import playButton from "../assets/play.png";

export default function Videoplayer() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handleVideoClick = (): void => {
        if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
            <div className="relative">
                <div >
                    <video
                        className="w-full rounded-[32px] md:rounded-2xl h-auto"
                        ref={videoRef}
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster={videsectionImage}
                        onClick={handleVideoClick}
                    />
                    {!isPlaying && (
                        <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full p-2 md:p-4 z-10"
                            onClick={handleVideoClick}
                        >
                            <img className="w-[60px] md:w-[100px]" src={playButton} alt="Play button" />
                        </button>
                    )}
                </div>
            </div>
    );
}