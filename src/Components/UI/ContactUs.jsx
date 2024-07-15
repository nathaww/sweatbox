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
        <div className="w-full px-10 py-20">
          <div
            id="contactUs"
            className="flex flex-col ss:flex-row sm:flex-row lg:flex-row w-full justify-between items-center p-4"
          >
            <div>
              <img
                alt="sweatbox logo"
                src="/Images/logo.png"
                className="headerLogo h-full w-16 xs:w-20 sm:w-20 lg:w-36 object-contain object-center"
              />
            </div>
            <div>
              <h1 className="text-3xl xs:text-4xl ss:text-5xl text-white font-Akira mb-6">
                Locations
              </h1>
              <p className="flex items-center gap-2 text-white font-Sora text-lg xs:text-xl ss:text-2xl mb-6">
                <FaMapLocationDot />
                Bole behind Sheger House
              </p>
              <p className="flex items-center gap-2 text-white font-Sora text-lg xs:text-xl ss:text-2xl mb-6">
                <FaMapLocationDot />
                Sarbet near South African Embassy
              </p>
            </div>
            <div>
              <h1 className="text-3xl xs:text-4xl ss:text-5xl text-white font-Akira mb-6">
                Contact details
              </h1>
              <p className="flex items-center gap-2 text-white font-Sora text-lg xs:text-xl ss:text-2xl mb-6">
                <FaMailBulk />
                Email: contact@sweatboxapg.com
              </p>
              <p className="flex items-center gap-2 text-white font-Sora text-lg xs:text-xl ss:text-2xl mb-6">
                <FaPhone />
                Phone: +251910657999, +251922863298
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
          <p className="text-white text-center text-lg xs:text-xl">
            Sweatbox Apg 2024. All rights reserved.
          </p>
        </div>
      </>
    );
  };
  
  export default ContactUs;
  