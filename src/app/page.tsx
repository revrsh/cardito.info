import Image from "next/image";
import someImage from '../assets/ever_dream_this_man.png'

export default function Home() {
  return (
    <div className="flex flex-col md:gap-[70px] gap-[40px] min-h-screen items-center bg-white font-sans pt-[70px] pb-[70px]">
      <div className="md:w-[618px] w-[346px] flex flex-col items-center justify-center">
        <p className="text-[#000000] md:text-[50px] text-[28px] font-bold">EVER DREAM THIS MAN?</p>
        <p className="text-[#333333] md:text-[25px] text-[20px] font-medium italic text-justify hyphens-auto break-words leading-tight">Every night, throughout Cardito, hundreds of people dream about this face</p>
      </div>
      <Image src={someImage} alt="" className="md:w-[300px] w-[220px]" />
      <p className="text-[#000000] md:text-[20px] text-[18px] font-medium">email: <span className="underline">help@cardito.info</span></p>
    </div>
  );
}
