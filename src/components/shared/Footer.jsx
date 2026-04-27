import logoImg from "../../assets/images/logo.png";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#061A33] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="logo" className="w-10 h-10" />
            <span className="font-bold text-lg tracking-wide">
              HERO.IO
            </span>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <h3 className="text-sm font-medium text-gray-300">
              Social Links
            </h3>

            <div className="flex items-center gap-3">

              {/* Twitter/X */}
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black
                hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black
                hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black
                hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} - All right reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;