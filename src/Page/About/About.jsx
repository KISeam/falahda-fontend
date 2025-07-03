import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
  return (
    <div className="font-sans bg-white">
      {/* Enhanced Hero Section without Image */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#41bfb8]/10 to-[#2e8e87]/10 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#41bfb8] text-white rounded-full mb-6">
            <span className="font-medium">Premium E-commerce Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Crafting Exceptional Shopping Journeys
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Since 2015, we've been redefining online retail with curated quality, sustainable practices, and unparalleled service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <button className="bg-[#41bfb8] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#38a8a1] transition duration-300 shadow-lg flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Our Collection
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { value: '250K+', label: 'Satisfied Customers' },
            { value: '98%', label: 'Positive Feedback' },
            { value: '24/7', label: 'Dedicated Support' },
            { value: '5M+', label: 'Products Delivered' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition duration-300 group">
              <p className="text-4xl font-bold text-[#41bfb8] mb-2 group-hover:-translate-y-1 transition-transform duration-300">{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  className={`px-8 py-3 rounded-full text-sm font-medium capitalize transition duration-300 cursor-pointer ${
                    activeTab === tab 
                      ? 'bg-[#41bfb8] text-white shadow-md' 
                      : 'text-gray-600 hover:text-[#41bfb8]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#e6f7f6] to-white p-1 rounded-xl shadow-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-video" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#41bfb8] w-32 h-32 rounded-xl shadow-xl"></div>
            </div>
            
            <div>
              {activeTab === 'mission' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    At Halo, our mission is to transform online shopping into an experience that delights at every touchpoint. 
                    We meticulously curate products that elevate everyday life while upholding uncompromising standards of 
                    quality, sustainability, and ethical business practices.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Curate exceptional products that inspire",
                      "Deliver seamless shopping experiences",
                      "Champion sustainable business practices",
                      "Foster meaningful customer relationships"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-[#e6f7f6] p-1 rounded-full mt-0.5 mr-3">
                          <svg className="h-5 w-5 text-[#41bfb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'vision' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We envision a world where commerce is a force for good—connecting creators with conscious consumers 
                    in a marketplace that values craftsmanship, sustainability, and human connection above all else.
                  </p>
                  <div className="bg-gradient-to-r from-[#e6f7f6] to-[#d0f0ee] p-6 rounded-xl border border-[#b8e0dd]">
                    <p className="text-[#2e8e87] italic font-medium">
                      "To become the most trusted destination for discerning shoppers seeking quality, 
                      authenticity, and exceptional service."
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'values' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: 'Integrity', desc: 'Transparency in all dealings' },
                      { title: 'Excellence', desc: 'Never settling for mediocrity' },
                      { title: 'Innovation', desc: 'Continuously improving' },
                      { title: 'Sustainability', desc: 'Responsible business practices' }
                    ].map((value, idx) => (
                      <div key={idx} className="p-5 border border-gray-100 rounded-lg bg-white hover:shadow-md transition duration-300 group">
                        <h3 className="font-bold text-[#41bfb8] text-lg mb-2 group-hover:-translate-y-1 transition-transform duration-300">{value.title}</h3>
                        <p className="text-sm text-gray-600">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Evolution</h2>
            <div className="h-1 w-24 bg-[#41bfb8] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              Milestones in Halo's journey as a premium e-commerce destination
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#41bfb8] to-[#2e8e87] hidden md:block"></div>
            
            {/* Mobile timeline line */}
            <div className="absolute left-8 transform h-full w-0.5 bg-gradient-to-b from-[#41bfb8] to-[#2e8e87] md:hidden"></div>
            
            <div className="space-y-16 md:space-y-12">
              {[
                { 
                  year: '2015', 
                  title: 'Company Founding', 
                  desc: 'Launched with 3 team members and 50 premium products',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                { 
                  year: '2017', 
                  title: 'Market Expansion', 
                  desc: 'Reached 10,000 customers and expanded product range to 500+ items',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  year: '2019', 
                  title: 'Global Presence', 
                  desc: 'Opened European distribution center and entered 5 new international markets',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  year: '2021', 
                  title: 'Digital Innovation', 
                  desc: 'Launched award-winning mobile app with 500k downloads in first year',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  year: '2023', 
                  title: 'Sustainability Leadership', 
                  desc: 'Achieved carbon-neutral operations and B Corp certification',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} items-center transition-all duration-300 hover:scale-[1.02]`}
                >
                  {/* Content container */}
                  <div className={`w-full md:w-5/12 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl ${idx % 2 === 0 ? 'md:mr-auto md:pr-8 md:pl-0' : 'md:ml-auto md:pl-8 md:pr-0'} md:py-0 py-6`}>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#e6f7f6] flex items-center justify-center text-[#2e8e87] mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-[#e6f7f6] text-[#2e8e87] rounded-full text-sm font-medium">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline marker */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-8 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#41bfb8] flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-[#41bfb8] rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Start and end markers */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#41bfb8] hidden md:block"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#2e8e87] hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Leadership</h2>
            <div className="h-1 w-20 bg-[#41bfb8] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              The visionary team driving Halo's success in the e-commerce industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alexandra Chen', role: 'CEO & Founder', bio: '10+ years in e-commerce innovation', social: ['twitter', 'linkedin'] },
              { name: 'Marcus Johnson', role: 'Chief Technology Officer', bio: 'Tech visionary with 15 years experience', social: ['linkedin'] },
              { name: 'Sophie Williams', role: 'Creative Director', bio: 'Award-winning brand strategist', social: ['twitter', 'linkedin'] },
              { name: 'David Kim', role: 'Operations Director', bio: 'Supply chain optimization expert', social: ['linkedin'] }
            ].map((member, idx) => (
              <div key={idx} className="group text-center bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-6">
                <div className="relative mx-auto w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      {member.social.includes('twitter') && (
                        <button className="bg-white rounded-full p-2 hover:bg-[#41bfb8] hover:text-white text-black transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </button>
                      )}
                      {member.social.includes('linkedin') && (
                        <button className="bg-white rounded-full p-2 hover:bg-[#41bfb8] hover:text-white text-black transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#41bfb8] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Experiences</h2>
            <div className="h-1 w-20 bg-[#41bfb8] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              What our customers say about their Halo journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                quote: "Halo transformed my shopping experience. The quality and customer service are unmatched in the industry.", 
                author: "Sarah Johnson", 
                role: "Loyal Customer",
                rating: 5
              },
              { 
                quote: "The attention to detail in both products and service makes Halo my go-to for all premium purchases.", 
                author: "Michael Chen", 
                role: "Business Owner",
                rating: 5
              },
              { 
                quote: "From packaging to product quality, Halo sets the standard for premium e-commerce experiences.", 
                author: "Priya Sharma", 
                role: "Interior Designer",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-[#41bfb8] text-5xl mb-4">"</div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-[#41bfb8] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#41bfb8] to-[#2e8e87] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Halo Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust us for premium shopping experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#2e8e87] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Premium Collection
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;