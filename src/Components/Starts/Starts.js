import React from 'react';

const Starts = () => {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-lg px-4 md:px-2 mx-auto">

                    <div className="mb-8 md:mb-12">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Work by the numbers</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">I would like to give you a unique photography experience, built to serve you best and capture your special moments for you and your families creatively and beautifully.</p>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 bg-indigo-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8">

                        <div className="flex flex-col items-center">
                            <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">200</div>
                            <div className="text-indigo-200 text-sm sm:text-base">Fashion shoot</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">500+</div>
                            <div className="text-indigo-200 text-sm sm:text-base">Commercial</div>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">1000+</div>
                            <div className="text-indigo-200 text-sm sm:text-base">Weeding</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">A couple</div>
                            <div className="text-indigo-200 text-sm sm:text-base">Coffee breaks</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Starts;