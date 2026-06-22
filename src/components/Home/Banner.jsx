import Image from "next/image";
import bannerImg from "../../assets/images/hero.png";
import { BsGooglePlay } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" mt-10 ">
      <h2 className="font-bold text-5xl text-center my-5">
        We Build <br /> <span className="text-purple-500">Productive Apps</span>
      </h2>
      <p className="text-gray-400 max-w-[89%] md:max-w-[50%] mx-auto my-5 text-center">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact
      </p>
      <div className="flex justify-center gap-2">
        <button className="btn btn-ghost "><BsGooglePlay /> Play Store</button>
        <button className="btn btn-natural"><FaAppStore /> App Store</button>
      </div>
      <div className="mt-10">
        <Image className="mx-auto" src={bannerImg} alt="PH Play Store" height={850} width={750} />
      </div>
    </div>
  );
};

export default Banner;
