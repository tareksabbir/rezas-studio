import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/icons8-wedding-couple-66.png';
import img2 from '../../Assets/icons8-wedding-couple-66(1).png';
import img3 from '../../Assets/icons8-wedding-couple-66(2).png';
import img4 from '../../Assets/icons8-wedding-64.png';
import img5 from '../../Assets/icons8-wedding-64(1).png';
import img6 from '../../Assets/icons8-wedding-64(2).png';


const Services = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-6 md:px-16 mx-auto">

                <div class="mb-10 md:mb-16">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our competitive advantage</h2>

                    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>


                <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">

                    <div class="flex flex-col items-center">
                        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-indigo-200 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                            <img src={img1} alt="" />
                        </div>

                        <h3 class="text-lg md:text-xl font-semibold text-center mb-2">Commercial</h3>
                        <p class="text-gray-500 text-center mb-2">Whatever size your company, I can help improve its image, promote its values and increase customer engagement.</p>
                        <Link to='/' class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</Link>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-indigo-200 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                            <img src={img2} alt="" />
                        </div>

                        <h3 class="text-lg md:text-xl font-semibold text-center mb-2">Portrait</h3>
                        <p class="text-gray-500 text-center mb-2">Portrait sessions are an expression of who you are. The images we create together should reflect what makes you, you.</p>
                        <Link to='/' class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</Link>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-indigo-200 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                            <img src={img3} alt="" />
                        </div>

                        <h3 class="text-lg md:text-xl font-semibold text-center mb-2">New Born</h3>
                        <p class="text-gray-500 text-center mb-2">Newborn sessions capture those precious first moments of your baby.</p>
                        <Link to='/' class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</Link>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-indigo-200 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                            <img src={img4} alt="" />
                        </div>

                        <h3 class="text-lg md:text-xl font-semibold text-center mb-2">Family</h3>
                        <p class="text-gray-500 text-center mb-2">Family sessions honour your love and connection to one another.</p>
                        <Link to='/' class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</Link>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-indigo-200 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                            <img src={img5} alt="" />
                        </div>

                        <h3 class="text-lg md:text-xl font-semibold text-center mb-2">Fashion</h3>
                        <p class="text-gray-500 text-center mb-2">From image making to stylists. I will always source the right talent for the shoot.</p>
                        <Link to='/' class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</Link>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-indigo-200 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                            <img src={img6} alt="" />
                        </div>

                        <h3 class="text-lg md:text-xl font-semibold text-center mb-2">Weeding</h3>
                        <p class="text-gray-500 text-center mb-2">From the getting ready shots,little and all the in-between moments. I promise I will be there</p>
                        <Link to='/' class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;