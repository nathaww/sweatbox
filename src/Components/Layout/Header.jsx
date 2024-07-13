import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const nav = [
    {
      name: "Home",
      link: "/",
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
      .from(".nav", {
        opacity: 0,
        y: -80,
        stagger: 0.01,
        duration: 1,
      }, 0.2);
  });

  return (
    <div className="flex flex-row justify-between items-center text-white h-20 xs:h-20 lg:h-36 xl:h-36">
      <div className="">
        <img
          alt="sweatbox logo"
          src="/Images/logo.png"
          className="headerLogo h-full w-16 xs:w-20 sm:w-20  lg:w-36 object-contain object-center"
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
            >
              <div className="nav">
                {item.name.split("").map((l, i) => {
                  return (
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
                  );
                })}
              </div>
              <div className="absolute inset-0 text-secondary">
                {item.name.split("").map((l, i) => {
                  return (
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
                  );
                })}
              </div>
            </motion.a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
