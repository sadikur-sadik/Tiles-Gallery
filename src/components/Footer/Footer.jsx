import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-950'>
      <div className='md:text-4xl text-2xl text-center text-white my-10'>
        Tiles Gallery
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-4">
        <nav className='flex justify-between items-center flex-col gap-3 text-white'>
          <h6 className="">Explore</h6>
          <a className="">Features</a>
          <a className="">Enterprise</a>
          <a className="">Security</a>
          <a className="">Pricing</a>
        </nav>
        <nav className='flex justify-between items-center flex-col gap-3 text-white'>
          <h6 className="">Legal</h6>
          <a className="">Terms of use</a>
          <a className="">Privacy policy</a>
          <a className="">Cookie policy</a>
        </nav>
        <nav className='flex justify-between items-center flex-col gap-3 text-white'>
          <h6 className="">Social</h6>
          <a className="">Twitter</a>
          <a className="">Instagram</a>
          <a className="">Facebook</a>
          <a className="">GitHub</a>
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
