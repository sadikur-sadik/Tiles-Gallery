import { HiOutlineBadgeCheck, HiOutlineCollection, HiOutlineArrowNarrowRight } from 'react-icons/hi';

import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">

      <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">

       
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 animate__animated animate__fadeInRight">

          <div className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-b-4 border-blue-800 hover:-translate-y-2">
            <div className="w-14 h-14 bg-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors duration-300">
              <HiOutlineBadgeCheck className="text-3xl text-blue-800 group-hover:text-white" />
            </div>
            <h4 className="text-5xl font-extrabold text-slate-900 mb-2">12+</h4>
            <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Years Excellence</p>
          </div>

   
          <div className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-b-4 border-blue-800 hover:-translate-y-2 sm:mt-12">
            <div className="w-14 h-14 bg-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors duration-300">
              <HiOutlineCollection className="text-3xl text-blue-800 group-hover:text-white" />
            </div>
            <h4 className="text-5xl font-extrabold text-slate-900 mb-2">500+</h4>
            <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Premium Designs</p>
          </div>
        </div>

     
        <div className="md:w-1/2 space-y-8 animate__animated animate__fadeInLeft">
          <div className="flex items-center gap-2">
            <span className="w-12 h-1 bg-blue-800 rounded-full"></span>
            <span className="text-blue-800 font-bold tracking-widest uppercase text-sm">Our Legacy</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Crafting Spaces with <br />
            <span className="text-blue-800">Timeless Elegance</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            At <span className="font-bold text-slate-800">Tiles Gallery</span>, we believe every surface tells a story.
            From the raw beauty of Terracotta to the sophisticated veins of Italian Marble, we source
            the globe&apos;s finest materials to transform your house into a masterpiece.
          </p>

          <button className="group relative flex items-center gap-3 px-8 py-4 bg-blue-800 text-white rounded-full font-bold overflow-hidden hover:bg-transparent hover:text-blue-800 border border-blue-800 hover:shadow-lg">
            <span className="relative z-10">Learn Our Story</span>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};




export default About;