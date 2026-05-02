import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-950 p-20'>
      <div className='md:text-4xl text-2xl text-center text-white '>
        Tiles Gallery
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-6 mt-5">
        <nav className='flex justify-between items-center flex-col gap-3 mt-10 text-white'>
          <h6 className="font-bold text-2xl">Explore</h6>
          <a className="text-sm font-bold">Features</a>
          <a className="text-sm font-bold">Enterprise</a>
          <a className="text-sm font-bold">Security</a>
          <a className="text-sm font-bold">Pricing</a>
        </nav>
        <nav className='flex justify-between items-center flex-col gap-3 mt-10 text-white'>
          <h6 className="font-bold text-2xl">Legal</h6>
          <a className="text-sm font-bold">Terms of use</a>
          <a className="text-sm font-bold">Privacy policy</a>
          <a className="text-sm font-bold">Cookie policy</a>
        </nav>
        <nav className='flex justify-between items-center flex-col gap-3 mt-10 text-white'>
          <h6 className="font-bold text-2xl">Social</h6>
          <a className="text-sm font-bold">Twitter</a>
          <a className="text-sm font-bold">Instagram</a>
          <a className="text-sm font-bold">Facebook</a>
          <a className="text-sm font-bold">GitHub</a>
        </nav>


      </div>
      <div className="footer sm:footer-horizontal footer-center text-gray-400 p-4 mt-10">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
