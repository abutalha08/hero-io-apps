import bannerImg from "../../assets/images/hero.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-white pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
            We Build <br />
            <span className="text-purple-500">Productive</span> Apps
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            At HERO.IO, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. Our goal is to turn
            your ideas into digital experiences that truly make an impact.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto flex justify-center items-center gap-3 px-6 py-3 border border-gray-200 rounded-xl hover:shadow-lg transition"
          >
            <FaGooglePlay className="text-2xl text-green-500" />
            <span className="font-semibold text-gray-800">
              Google Play
            </span>
          </a>

          <a
            href="#"
            className="w-full sm:w-auto flex justify-center items-center gap-3 px-6 py-3 border border-gray-200 rounded-xl hover:shadow-lg transition"
          >
            <FaApple className="text-2xl text-blue-500" />
            <span className="font-semibold text-gray-800">
              App Store
            </span>
          </a>
        </div>

        {/* Banner Image */}
        <div className="mt-14 flex justify-center">
          <img
            src={bannerImg}
            alt="App Showcase"
            className="w-full max-w-5xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;