import React from 'react';
import { User, Code, Palette, CheckCheck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: "Development",
      description:
        "Building scalable web applications with modern technologies",
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      description: "Creating out of the box intuitive user experiences",
    },
    {
      icon: <CheckCheck size={24} />,
      title: "Problem Solving",
      description: "Turning complex challenges into simple solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Who I Am</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated full-stack developer with over 5+ years of experience in creating 
                web applications and user interfaces. I have a passion for clean code, 
                user-centered design, and continuous learning.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                <p className="text-gray-600">Open to opportunities</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-600">English, Yoruba</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-2">Let's Work Together</h3>
              <p className="text-blue-100 mb-4">
                I'm always interested in new opportunities and exciting projects.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;