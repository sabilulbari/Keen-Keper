import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Top Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">KeenKeeper</h1>
          <p className="text-[#fafafa9b] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-medium text-lg sm:text-xl text-[#FAFAFA]">Social Links</h3>
          <div className="flex gap-4">
            {[FaInstagram, FaFacebook, FaXTwitter].map((Icon, index) => (
              <div
                key={index}
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200"
              >
                <Icon className="text-[#244D3F] text-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-500/40" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#fafafa9b] text-sm sm:text-base">
          <p className="text-center md:text-left">© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
