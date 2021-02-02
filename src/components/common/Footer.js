import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright © {year} Lambda Labs</p>
    </footer>
  );
};

export default Footer;
