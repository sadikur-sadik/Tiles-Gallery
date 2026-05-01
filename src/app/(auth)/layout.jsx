import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const Layout = ({children}) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      
    </>
  );
};

export default Layout;