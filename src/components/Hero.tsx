import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-blue-200 text-lg sm:text-xl font-medium text-center">
              Hello, My name is
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                OGUNBERU OLUWATOBI
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with
            modern technologies. I build scalable applications and design
            intuitive user interfaces.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 LEFT-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-200 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
