import { useState } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgMail } from "react-icons/cg";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import BackGroundGradient from "../BackGroundGradient";

function Navbar() {
  const [activeHam, setActiveHam] = useState(false);

  return (
    <>
      <motion.div
        className="absolute left-[20px] right-[20px] top-[20px] mx-auto flex h-[50px] max-w-[1000px] items-start justify-between rounded-lg bg-[#131319] p-2 px-4 font-bold text-white"
        animate={activeHam ? { height: 210 } : { height: 50 }}
        transition={{}}
      >
        <div className="relative flex w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <p className="opacity-4 bg-clip-text text-lg font-extrabold italic text-transparent text-white">
              SM
            </p>
            <div className="ml-5 hidden text-sm sm:block">
              <ul className="ml-5 flex items-center justify-center gap-7 font-normal sm:text-[18px]">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="work"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="links"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
                  >
                    {/* Links */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <a
              href=""
              className="cursor-pointer00 text-[20px] transition-colors duration-300 hover:text-yellow-400"
            >
              <CgMail />
            </a>
            <a
              href="https://github.com/sagarmanchakatla"
              className="cursor-pointer00 text-[20px] transition-colors duration-300 hover:text-yellow-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
              className="cursor-pointer00 text-[20px] transition-colors duration-300 hover:text-yellow-400"
            >
              <IoLogoLinkedin />
            </a>
            <div className="sm:hidden" onClick={() => setActiveHam(!activeHam)}>
              <RxHamburgerMenu />
            </div>
          </div>
          <motion.ul
            className="absolute top-[55px] flex flex-col items-start justify-center gap-4 text-sm opacity-0"
            animate={
              activeHam
                ? { opacity: 1, transition: 0.8 }
                : { opacity: 0, transition: 0.1 }
            }
          >
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="links"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-colors duration-300 hover:text-blue-400"
              ></Link>
            </li>
          </motion.ul>
          <BackGroundGradient />
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
