import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              Let's Create Something Amazing
            </h3>
            <p className="text-gray-300 max-w-2xl">
              I'm always open to discussing new opportunities, innovative
              projects, and creative collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:tobilobaogunberu@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Start a Conversation
            </a>
            <a
              href="/resume_oluwatobi_ogunberu (SD).pdf"
              download="resume_oluwatobi_ogunberu (SD).pdf"
              className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>

          <div className="w-full max-w-4xl bordr-t border-gray-700 pt-8">
            <div className="flex flex-col items-center space-y-4">
              {/* Top text */}
              <div className="flex items-center space-x-2 text-gray-300">
                {/* <span>Made with</span>
                <Heart size={16} className="text-red-500" /> */}
                <span>Ogunberu Oluwatobi Clement</span>
              </div>

              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2025. All rights reserved.
              </div>

              {/* Arrow button (centered) */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
