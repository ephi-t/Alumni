import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 rounded-t-3xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <h2 className="ml-3 text-xl font-bold">DBU Alumni</h2>
          </div>
          <p className="text-sm">
            Alumni Association provides and supports alumni programs and
            services, facilitates communication with alumni, and seeks to
            strengthen alumni bonds of fellowship.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-10">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Alumni
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Jop Post
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-gray-400">
                Donation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Addiss Ababa</p>
          <p>Phone: +2519123456</p>
          <p>
            Email:{" "}
            <a
              href="mailto:zaialumni@example.com"
              className="hover:text-gray-400"
            >
              Dbualumni@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
