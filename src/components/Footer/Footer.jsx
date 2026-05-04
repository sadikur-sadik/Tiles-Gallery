import Link from 'next/link';
import React from 'react';
import { FaBriefcase, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaPhoneAlt, FaRocket, FaShieldAlt, FaTags, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-blue-950 p-20'>
      <div className='md:text-4xl text-2xl text-center text-white '>
        Tiles Gallery
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-6 mt-5">
        <nav className='flex justify-between items-center flex-col gap-3 mt-10 text-white'>
          <h6 className="font-bold text-2xl">Explore</h6>
          <a className="text-sm font-bold flex items-center gap-2"><FaRocket />Features</a>
          <a className="text-sm font-bold flex items-center gap-2"><FaBriefcase/>Enterprise</a>
          <a className="text-sm font-bold flex items-center gap-2"><FaShieldAlt/>Security</a>
          <a className="text-sm font-bold flex items-center gap-2"><FaTags />Pricing</a>
        </nav>
        <nav className='flex justify-between items-center flex-col gap-3 mt-10 text-white'>
          <h6 className="font-bold text-2xl">Social</h6>
          <a className="text-sm font-bold flex items-center gap-2"><FaTwitter />Twitter</a>
          <a className="text-sm font-bold flex items-center gap-2"><FaInstagram/> Instagram</a>
          <a className="text-sm font-bold flex items-center gap-2"><FaFacebook />Facebook</a>
          <a className="text-sm font-bold flex items-center gap-2"><FaGithub/>GitHub</a>
        </nav>
        <nav className='flex justify-between items-center flex-col gap-3 mt-10 text-white'>
          <h6 className="font-bold text-2xl text-center">Contact Us</h6>
          <a className="text-sm font-bold flex items-center gap-2"><FaEnvelope/>Email</a>
          <a  className="text-sm font-bold flex items-center gap-2"><FaPhoneAlt/>Phone</a>
          <a className="text-sm font-bold flex items-center gap-2"><FaWhatsapp />WhatsApp</a>
          
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
