import React from 'react';
import Carousel from '../component/Carousel';

export default function Services(): React.ReactElement {
    return (
        <div className='py-10 mx-[120px]'>
            <section className="h-screen flex justify-center items-center font-instrument-sans">
                <h1 className="text-[120px] font-semibold">Dreamer&rsquo;s Services</h1>
            </section>

            <section className='h-screen'>
                <h1 className='font-semibold text-[120px] font-instrument-sans'>From Vision to Reality</h1>
                <h3 className='font-instrument-sans text-[#444444] text-[40px]'>The Four Essential Steps to Success</h3>
                
                {/* cards carosal  */}
                <div className='mt-5'>
                    <Carousel/>
                </div>
            </section>
        </div>
    );
}