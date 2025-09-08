import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software engineer",
      company: "Tulolag Petroleum Energy Ltd",
      location: "Lagos, Nigeria",
      period: "2021 - Present",
      description: [
        "Spearheaded the adoption of modern IT solutions, streamlining company operations and improving overall efficiency",
        "Supervised the implementation of secure data management systems to enhance organizational data integrity",
        "Managed and maintained the company's IT infrastructure, ensuring seamless operations and minimal downtime",
        "Directed technology-driven projects, enabling the business to adapt to emerging energy sector trends",
      ],
      technologies: ["FullStack Developer", "UI/UX Designer", "TeamLead"],
    },
    {
      title: "Software Intern",
      company: "Sterling Bank Headquarters",
      location: "Lagos, Nigeria",
      period: "Jan '23 — Jun '23",
      description: [
        "Collaborated with cross-functional teams to develop and maintain responsive web applications using ReactJS and ChakraUI.",
        "Designed and optimized user interfaces for improved accessibility and seamless user experiences.",
        "Enhanced API routes and developed new endpoints, improving application functionality and performance.",
        "Conducted debugging and resolved issues to ensure smooth performance across multiple devices",
      ],
      technologies: [
        "Frontend Developer",
        "UI/UX Designer",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      title: "Software Intern",
      company: "NIIT Technologies",
      location: "Remote",
      period: "2022 - 2023",
      description: [
        "Gained hands-on experience in building web applications using ReactJS and NodeJS.",
        "Built and tested RESTful APIs, ensuring secure and efficient data flow between client and server.",
        "Learned best practices for responsive design, improving the adaptability of web applications",
        "Collaborated on small group projects to simulate real-world development workflows",
      ],
      technologies: ["ReactJS", "NodeJS", "JavaScript", "CyberSecurity", "MySql",],
    },
  ];

  const education = [
    {
      degree: "Bachelors in Software Engineering",
      school: "Babcock University",
      location: "Ogun State, Nigeria",
      period: "2020 - 2024",
      description:
        "Graduated Babcock University with a second class upper in Software Engineering.",
    },
  ];

  const certifications = [
    {
      title: "FIGMA UI UX DESIGN ESSENTIALS",
      issuer: "UDEMY",
      date: "OCT '24",
      credentialId: "UC-4ea8c881-ec6e-4348-a274-6180df3eb5be",
    },
    {
      title: "Figma UI UX Design Advanced",
      issuer: "UDEMY",
      date: "JAN '25",
      credentialId: "UC-17f2d5fe-4e38-45e9-aa0a-b595faf8ab2d",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey and academic background that shaped my expertise.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-blue-200 h-full"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} pl-12 md:pl-8`}>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                        <div className="flex items-center space-x-4 text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Building size={16} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-blue-600 mt-1">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                <div className="space-y-2 text-gray-600 mb-3">
                  <div className="flex items-center space-x-2">
                    <Building size={16} />
                    <span>{edu.school}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="font-medium text-blue-600">{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                  <div className="space-y-1 text-gray-600">
                    <p><strong>Issuer:</strong> {cert.issuer}</p>
                    <p><strong>Date:</strong> {cert.date}</p>
                    <p><strong>Credential ID:</strong> {cert.credentialId}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;