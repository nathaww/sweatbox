import { useRef, useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { GeneralFAQs, MemberFAQs } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FAQs = () => {
  let faqSection = useRef(null);
  const contentRefs = useRef({});
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (key) => {
    if (openIndex === key) {
      setOpenIndex(null);
    } else {
      setOpenIndex(key);
    }
  };

  useEffect(() => {
    if (openIndex !== null) {
      const content = contentRefs.current[openIndex];
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "expo.inOut" }
      );
    }

    Object.keys(contentRefs.current).forEach((key) => {
      if (key !== openIndex) {
        const content = contentRefs.current[key];
        gsap.fromTo(
          content,
          { height: "auto", opacity: 1 },
          {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "expo.inOut",
          }
        );
      }
    });
  }, [openIndex]);

  useGSAP(() => {
    gsap
      .timeline({
        defaults: {
          ease: "expo.inOut",
          duration: 1.4,
        },
        scrollTrigger: {
          trigger: faqSection,
          start: "top center",
        },
      })
      .from(".faqSectionH1, .faqSectionP", {
        opacity: 0,
        y: 100,
        stagger: 0.15,
      })
      .from(
        ".accord",
        {
          opacity: 0,
          y: 100,
          stagger: 0.05,
        },
        "-=1.2"
      );
  });

  return (
    <div
      id="faq"
      ref={(el) => (faqSection = el)}
      className="py-8 xs:py-8 ss:py-10 sm:py-10 lg:py-18 xl:py-20 w-full"
    >
      <div className="w-full">
        <div className="overflow-hidden">
          <p className="faqSectionH1 font-Akira font-bold pointer-events-none xxs:text-2xl xs:text-4xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] xs:leading-8 leading-[5rem] uppercase text-center text-white">
            Frequently asked questions
          </p>
        </div>

        <div className="w-full ss:w-11/12 sm:w-11/12 lg:w-11/12 mx-auto overflow-hidden">
          <div className="overflow-hidden my-6 xxs:my-6 xs:my-6 ss:my-6 sm:mt-4 sm:mb-12 lg:my-12 xl:my-16 pb-2">
            <p className="faqSectionP text-white font-Sora text-left pointer-events-none text-base xs:text-base ss:text-lg sm:text-xl lg:text-3xl xl:text-4xl ">
              General information
            </p>
          </div>

          {GeneralFAQs?.map((items, index) => {
            const key = `general-${index}`;
            return (
              <div
                key={items.question}
                className="accord border-b border-gray-200 w-full mt-4 p-4 rounded-xl bg-white text-black"
              >
                <button
                  className="flex items-center justify-between w-full p-4 focus:outline-none"
                  onClick={() => toggleAccordion(key)}
                >
                  <span className="text-base xs:text-base ss:text-xl sm:text-xl lg:text-xl xl:text-2xl font-Sora font-semibold text-gray-900">
                    {items?.question}
                  </span>
                  <FaPlus
                    className={`transform transition-transform duration-200 text-xl ${
                      openIndex === key ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  ref={(el) => (contentRefs.current[key] = el)}
                  className="overflow-hidden"
                  style={{
                    height: openIndex === key ? "auto" : "0",
                    opacity: openIndex === key ? 1 : 0,
                  }}
                >
                  <div className="p-4 text-gray-600 lg:text-base font-sora font-semibold">
                    {items?.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full ss:w-11/12 sm:w-11/12 lg:w-11/12 mx-auto overflow-hidden">
          <div className="overflow-hidden my-6 xxs:my-6 xs:my-6 ss:my-6 sm:mt-4 sm:mb-12 lg:my-12 xl:my-16 pb-2">
            <p className=" text-white font-Sora text-left pointer-events-none text-base xs:text-base ss:text-lg sm:text-xl lg:text-3xl xl:text-4xl ">
              Membership information
            </p>
          </div>

          {MemberFAQs?.map((items, index) => {
            const key = `member-${index}`;
            return (
              <div
                key={items.question}
                className="accord border-b border-gray-200 w-full mt-4 p-4 rounded-xl bg-white text-black"
              >
                <button
                  className="flex items-center justify-between w-full p-4 focus:outline-none"
                  onClick={() => toggleAccordion(key)}
                >
                  <span className="text-base xs:text-base ss:text-xl sm:text-xl lg:text-xl xl:text-2xl font-Sora font-semibold text-gray-900">
                    {items?.question}
                  </span>
                  <FaPlus
                    className={`transform transition-transform duration-200 text-xl ${
                      openIndex === key ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  ref={(el) => (contentRefs.current[key] = el)}
                  className="overflow-hidden"
                  style={{
                    height: openIndex === key ? "auto" : "0",
                    opacity: openIndex === key ? 1 : 0,
                  }}
                >
                  <div className="p-4 text-gray-600 lg:text-base font-sora font-semibold">
                    {items?.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
