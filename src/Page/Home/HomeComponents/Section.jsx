import React, { useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";

const Section = () => {
  useEffect(() => {
    // Add scroll animation effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Images Section */}
          <motion.div
            className="relative w-full lg:w-5/12 animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <img
                className="w-full h-auto object-cover"
                src="https://wp2023.kodesolution.com/amiso/wp-content/uploads/2022/12/p2-400x532.jpg"
                alt="Team collaboration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -bottom-8 -right-8 z-20 w-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                className="w-full h-auto object-cover"
                src="https://wp2023.kodesolution.com/amiso/wp-content/uploads/2024/01/about2h4.jpg"
                alt="Design work"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </motion.div>

            <div className="absolute -top-8 -left-8 z-0 bg-blue-600 w-40 h-40 rounded-full opacity-10"></div>
            <div className="absolute bottom-20 -left-10 z-0 bg-blue-400 w-24 h-24 rounded-full opacity-20"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 animate-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-2 cpr font-semibold tracking-wider uppercase text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Welcome to Agency
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="cpr">NSDA Certified</span> Experienced
              Designers & Developers
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              System is a term used to refer to an organized collection of
              symbols and processes that may be used to operate on such symbols.
              Perspiciatis omnis natus error voupems accusa. Lorem ipsum dolor
              sit amet contetur adipi elit tempor.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <CgWebsite className="text-3xl cpr" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Web Solutions
                    </h3>
                    <p className="text-gray-600">
                      Web solutions duis aute irure dolor simply free in velit
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <CgWebsite className="text-3xl cpr" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Web Solutions
                    </h3>
                    <p className="text-gray-600">
                      Web solutions duis aute irure dolor simply free in velit
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section;
