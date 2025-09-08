import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 87 },
        { name: "Chakra UI", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "Express.js", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Git", level: 95 },
      ],
    },
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Technology evolves rapidly, and so do I. I'm constantly exploring
              new tools, frameworks, and methodologies to stay at the forefront
              of development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "AI/ML",
                "Web3",
                "Cloud Architecture",
                "Mobile Development",
                "DevOps",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
