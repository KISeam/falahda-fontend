import { useState } from "react";


import React from "react"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Partner = () => {
 const images = [
        { id: 1, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 2, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 3, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 4, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 5, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 6, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 7, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 8, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 9, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 10, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 11, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 12, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
        { id: 13, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 14, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 15, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 16, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 17, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 18, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 19, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 20, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 21, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 22, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 23, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 24, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
        { id: 25, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 26, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 27, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 28, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 29, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 30, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 31, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 32, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 33, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 34, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 35, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 36, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
        { id: 37, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 38, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 39, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 40, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 41, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 42, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 43, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 44, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 45, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 46, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 47, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 48, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('Our Concern');
    const [page, setPage] = useState(0);
    const imagesPerPage = 10;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setPage(0);
    };

    const handleNext = () => {
        const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
        if (page + 1 < totalPages) {
            setPage(prev => prev + 1);
        } else {
            setPage(0)
        }
    };

    const handlePrev = () => {
        if (page > 0) {
            setPage(prev => prev - 1);
        }
    };

    const filteredImages = images.filter(image => image.category === selectedCategory);
    const paginatedImages = filteredImages.slice(page * imagesPerPage, (page + 1) * imagesPerPage);
    const hasMoreImages = filteredImages.length > (page + 1) * imagesPerPage;


    return (
        <div className='  py-4 relative bg-[#ecfcfb] '>
            <div className='w-11/12 lg:w-10/12  shadow-md mx-auto border border-gray-200 p-12 rounded-2xl'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
                    <div className='w-full md:w-1/4'>
                        <div className='rounded-md'>
                            <p className='border-b pl-6 py-3 mb-3 outfit-semibold border-[#d1eae8] text-2xl md:text-[28px]'>We Are Working With</p>
                            <div className='flex flex-col gap-3 work pl-6 pb-8 pr-6'>
                                {['Our Concern', 'Colaboration With', 'Member Of'].map((cat, idx) => (
                                    <label key={idx} className="fieldset-label">
                                        <input
                                            type="radio"
                                            name="category"
                                            className="checkbox w-5 h-5 rounded-sm"
                                            checked={selectedCategory === cat}
                                            onChange={() => handleCategoryChange(cat)}
                                        />
                                        {cat}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-3/4 relative'>
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12'>
                            {paginatedImages.length > 0 ? (
                                paginatedImages.map((image, index) => (
                                    <motion.div
                                        key={image.id}
                                        className='flex items-center justify-center'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Image ${image.id}`}
                                            className="w-20 object-cover"
                                        />
                                    </motion.div>
                                ))
                            ) : (
                                <p>No images to display. Select a category.</p>
                            )}

                        </div>

                        {/* Pagination Buttons */}
                        <div>
                            {page > 0 && (
                                <button
                                    onClick={handlePrev}
                                    className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10  border border-gray-300 shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white transition duration-500"
                                >
                                    <FaChevronLeft className='cpr' size={18} />
                                </button>
                            )}

                            {hasMoreImages && (
                                <button
                                    onClick={handleNext}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white border border-gray-300 transition duration-500 cursor-pointer"
                                >
                                    <FaChevronRight className='cpr' size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;
