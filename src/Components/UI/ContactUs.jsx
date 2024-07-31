import {
    FaFacebook,
    FaInstagram,
    FaMailBulk,
    FaPhone,
    FaTelegram,
    FaTiktok,
    FaYoutube,
  } from "react-icons/fa";
  import { FaMapLocationDot } from "react-icons/fa6";
  import { motion } from "framer-motion";
  
  const ContactUs = () => {
    const MagneticLink = ({ href, children }) => {
      return (
        <motion.a
          href={href}
          target="_blank"
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className="text-white text-4xl"
        >
          {children}
        </motion.a>
      );
    };
    return (
      <>
        <div className="w-full p-2 xss:p-2 xs:p-2 ss:px-10 ss:py-20 sm:px-2 sm:py-20 lg:px-10 lg:py-20">
          <div
            id="contactUs"
            className="flex flex-col ss:flex-col sm:flex-col lg:flex-row w-full justify-between gap-y-4 items-start p-4"
          >
            <div className="mb-6">
              <img
                alt="sweatbox logo"
                src="/Images/logo.png"
                className="headerLogo h-full w-20 xs:w-28 sm:w-20 lg:w-36 object-contain object-center"
              />
            </div>
            <div>
              <h1 className="text-xl xss:text-2xl xs:text-2xl ss:text-5xl sm:text-4xl text-white font-Akira mb-6">
                Locations
              </h1>
              <p className="flex items-center gap-2 text-white font-Sora text-sm xss:text-base xs:text-lg ss:text-2xl mb-6">
                <FaMapLocationDot />
                Bole behind Sheger House
              </p>
              <p className="flex items-center gap-2 text-white font-Sora text-sm xss:text-base xs:text-lg ss:text-2xl mb-6">
                <FaMapLocationDot />
                Sarbet near South African Embassy
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-xl xss:text-2xl xs:text-2xl ss:text-5xl sm:text-3xl text-white font-Akira mb-6">
                Contact details
              </h1>
              <p className="flex items-center gap-2 text-white font-Sora text-sm xss:text-base xs:text-lg ss:text-xl mb-6">
                <FaMailBulk />
                contact@sweatboxapg.com
              </p>
              <p className="flex items-center gap-2 text-white font-Sora text-sm xss:text-base xs:text-lg ss:text-xl mb-6">
                <FaPhone />
                +251910657999, +251922863298
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="overflow-hidden my-6">
              <p className="galleryH1 font-Akira font-bold pointer-events-none my-4 xxs:text-xl xs:text-2xl ss:text-3xl sm:text-4xl lg:text-5xl xl:text-5xl uppercase text-center text-secondary">
                Join our community
              </p>
            </div>
            <div className="flex justify-center items-center gap-x-6 xs:gap-x-8 ss:gap-x-10 sm:gap-x-12 lg:gap-x-14 w-full">
              <MagneticLink href="https://www.facebook.com/sweatbox.apg/">
                <FaFacebook className="text-white text-3xl xs:text-4xl" />
              </MagneticLink>
              <MagneticLink href="https://www.youtube.com/@fitness_for_habesha">
                <FaYoutube className="text-white text-3xl xs:text-4xl" />
              </MagneticLink>
              <MagneticLink href="https://www.tiktok.com/@sweatboxapg">
                <FaTiktok className="text-white text-3xl xs:text-4xl" />
              </MagneticLink>
              <MagneticLink href="https://t.me/sweatboxbole">
                <FaTelegram className="text-white text-3xl xs:text-4xl" />
              </MagneticLink>
              <MagneticLink href="https://www.instagram.com/sweatboxapg?igsh=bTA4MTA0M3RodjQ=">
                <FaInstagram className="text-white text-3xl xs:text-4xl" />
              </MagneticLink>
            </div>
          </div>
        </div>
        <div className="w-full p-8">
          <p className="text-white text-center text-sm xs:text-sm ss:text-lg sm:text-lg  lg:text-lg">
            Sweatbox APG 2024. All rights reserved.
          </p>
        </div>
      </>
    );
  };
  
  export default ContactUs;
  