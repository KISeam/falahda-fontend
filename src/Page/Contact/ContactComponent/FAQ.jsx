import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-5 w-11/12 lg:w-8/12 mx-auto mt-10">
                <div className=" rounded-2xl flex justify-center items-center">
                    <img className='shadow rounded-2xl w-200 lg:w-250 h-91' src="https://static.vecteezy.com/system/resources/previews/002/779/384/large_2x/faq-frequently-asked-questions-concept-people-ask-questions-and-receive-answers-support-center-illustration-flat-vector.jpg" alt="" />
                </div>
                <div className="w-11/12 mx-auto flex flex-col justify-center">
                    <div className="mb-5">
                        <h4 className='text-[#41bfb8] font-semibold'>Most Asked Question</h4>
                        <h1 className='text-4xl font-extrabold'>All You Need to Know About BdCalling Academy</h1>
                    </div>
                    <div className="">
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                            <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">How do I update my profile information?</div>
                            <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;