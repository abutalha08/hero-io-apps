import { useState } from "react";
import logoImg from "../../assets/images/logo.png";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", text: "Home" },
    { path: "/apps", text: "Apps" },
    { path: "/installedApps", text: "Installation" },
    { path: "/dashboard", text: "Dashboard" },
  ];

  return (
    <nav className="shadow bg-white">
      <div className="flex justify-between items-center py-3 px-4 max-w-7xl mx-auto">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="logo" className="w-9 h-9" />

          <h2 className="text-2xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 items-center">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
              {item.text}
            </MyNavLink>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none flex items-center gap-2 px-5 py-2 rounded-lg shadow-md transition-all duration-200">
            <FaGithub />
            <span>Contribute</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <MyNavLink
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </MyNavLink>
            ))}
          </ul>

          <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none flex items-center gap-2 w-full justify-center px-5 py-2 rounded-lg">
            <FaGithub />
            Contribute
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;