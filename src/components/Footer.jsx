import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto bg-primary bg-[url('/wave.svg')] bg-no-repeat bg-cover bg-bottom">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-400 hover:text-blue-600 transition"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin size={28} />
          </a>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;


