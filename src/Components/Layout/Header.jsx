import { useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nav = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Service",
      link: "#service",
    },
    {
      name: "Gallery",
      link: "#gallery",
    },
    {
      name: "About Us",
      link: "#aboutUs",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
    {
      name: "Contact Us",
      link: "#contactUs",
    },
  ];

  useGSAP(() => {
    gsap
      .timeline({
        defaults: {
          ease: "expo.inOut",
        },
      })
      .from(".headerLogo", {
        opacity: 0,
        y: -80,
        duration: 1,
      })
      .from(
        ".nav",
        {
          opacity: 0,
          y: -80,
          stagger: 0.01,
          duration: 1,
        },
        0.2
      );
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-row justify-between items-center text-white h-20 xs:h-20 lg:h-36 xl:h-36">
      <div className="">
        <img
          alt="sweatbox logo"
          src="/Images/logo.png"
          className="headerLogo h-full w-16 xs:w-20 sm:w-20 lg:w-36 object-contain object-center"
        />
      </div>
      <div className="lg:flex xl:flex hidden justify-center gap-x-8 items-center">
        {nav.map((item) => (
          <div key={item.name} className="text-sm font-Sora">
            <motion.a
              initial="initial"
              whileHover="hovered"
              className="relative overflow-hidden block whitespace-nowrap"
              href={item.link}
              onClick={handleLinkClick}
            >
              <div className="nav">
                {item.name.split("").map((l, i) => (
                  <motion.span
                    className="inline-block"
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                    transition={{
                      duration: 0.25,
                      delay: 0.025 * i,
                      ease: "easeInOut",
                    }}
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
              <div className="absolute inset-0 text-secondary">
                {item.name.split("").map((l, i) => (
                  <motion.span
                    className="inline-block"
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    transition={{
                      duration: 0.25,
                      delay: 0.025 * i,
                      ease: "easeInOut",
                    }}
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
            </motion.a>
          </div>
        ))}
      </div>
      <div className="lg:hidden xl:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50"
          >
            {nav.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={handleLinkClick}
                className="text-white text-2xl mb-6 font-Akira"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
