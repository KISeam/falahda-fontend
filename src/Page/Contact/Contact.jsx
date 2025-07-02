import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  useEffect(() => {
      window.scroll(0, 0);
    }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white rounded-xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-navy-900 font-poppins mb-6 text-gray-600">Send a Message</h2>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6 p-4 bg-green-50 text-green-900 rounded-md font-roboto"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-gray-600">
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 font-roboto">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gold-600 focus:ring-gold-600 sm:text-sm py-2.5 px-4 transition-all duration-200 ease-in-out font-roboto text-navy-900`}
                    placeholder="Your Full Name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600 font-roboto">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="text-gray-600">
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 font-roboto">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gold-600 focus:ring-gold-600 sm:text-sm py-2.5 px-4 transition-all duration-200 ease-in-out font-roboto text-navy-900`}
                    placeholder="Your Email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600 font-roboto">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-gray-600">
                <label htmlFor="subject" className="block text-sm font-medium text-navy-900 font-roboto">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.subject ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gold-600 focus:ring-gold-600 sm:text-sm py-2.5 px-4 transition-all duration-200 ease-in-out font-roboto text-navy-900`}
                  placeholder="Subject of Your Message"
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600 font-roboto">
                    {errors.subject}
                  </p>
                )}
              </div>
              <div className="text-gray-600">
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 font-roboto">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`mt-1 block w-full rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gold-600 focus:ring-gold-600 sm:text-sm py-2.5 px-4 transition-all duration-200 ease-in-out font-roboto text-navy-900`}
                  placeholder="Your Message"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600 font-roboto">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="mt-10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleSubmit}
                  className="w-full flex justify-center py-3 px-4 border border-[#41bfb8] rounded-md shadow-sm text-sm font-medium text-[#41bfb8] bg-navy-800 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-600 transition-all duration-200 ease-in-out font-roboto cursor-pointer "
                >
                  Submit Message
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-navy-900 font-poppins mb-6 text-gray-600">Contact Information</h2>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-lg font-medium text-navy-900 font-roboto">Global Headquarters</h3>
                <p className="mt-2 text-sm text-gray-500 font-roboto">
                  123 Business Avenue, Suite 200<br />
                  City, State, ZIP Code 12345
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-navy-900 font-roboto">Phone</h3>
                <p className="mt-2 text-sm text-gray-500 font-roboto">
                  <a href="tel:01753924093" className="text-gold-600 hover:text-gold-700 transition-colors duration-200">
                    01753924093
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-navy-900 font-roboto">Email</h3>
                <p className="mt-2 text-sm text-gray-500 font-roboto">
                  <a href="mailto:sakkib0081@gmail.com" className="text-gold-600 hover:text-gold-700 transition-colors duration-200">
                    sakkib0081@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-navy-900 font-roboto">Business Hours</h3>
                <p className="mt-2 text-sm text-gray-500 font-roboto">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-navy-900 font-roboto">Connect With Us</h3>
                <div className="mt-2 flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="text-gray-500 hover:text-gold-600 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="text-gray-500 hover:text-gold-600 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="text-gray-500 hover:text-gold-600 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.691 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.691-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.618-6.782-6.98-6.979-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;