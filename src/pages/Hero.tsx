import girl from "../assets/girls.png";
import alphericGif from "../assets/alpheric-gif.gif";
import Videoplayer from "../component/Videoplayer";

export default function Hero() {
    return <section className="py-35 bg-[radial-gradient(ellipse_50%_100%_at_top_right,#EDE6FE_10%,#FFFFFF_100%)]">
        <div className="relative mx-[120px]">
            <div>
                <h1 className="font-instrument-sans text-[140px]/40 font-semibold">
                    Pinpointing <img className="inline-block bg-[#5AC8DC] rounded-[66px] h-[120px] w-[194px] align-middle" src={girl} alt="asset girl" /> your digital needs
                </h1>
            </div>
            <p className="text-[#444444] text-[35px] max-w-[1125px] font-instrument-sans mt-5">
                You&rsquo;re already heading in the right direction, and we&rsquo;re here to take you further. Let&rsquo;s work together to fine-tune your vision and achieve the outcomes you&rsquo;ve been striving for. We&rsquo;re excited to help you make it happen!
            </p>
            <div className="absolute right-30 top-6">
                <img className="h-[140px]" src={alphericGif} alt="alpheric gif" />
            </div>
            {/* video player */}
            <div className="mt-5">
                <Videoplayer />
            </div>
        </div>
    </section>
}