import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ID1 from "../Assets/ID1.png";
import ID2 from "../Assets/ID2.png";
import ID3 from "../Assets/ID3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Online Registration Platform",
      description:
        "A web application that handles registration and payment for the registration. Features include Paystack API Integration, Check-in scanner, Real time data collection and intuitive UI design.",
      image: ID1,
      technologies: [
        "React",
        "Chakra UI",
        "Firebase db",
        "REST APIs",
        "Paystack Integration",
        "Figma",
      ],
      liveUrl: "https://youth-harvest.vercel.app/",
      githubUrl: "https://github.com/Tobiloba03/youth-harvest",
      featured: true,
    },
    {
      id: 2,
      title: "SheSafe App",
      description:
        "A check in task management application with real-time updates, timer functionality, Login And Signup authentication, database structure, Admin profile and Responders feed.",
      image: ID2,
      technologies: [
        "React",
        "Chakra UI",
        "Firebase",
        "Node.js",
        "Git",
        "Figma",
      ],
      liveUrl: "https://shesafe-sandy.vercel.app/",
      githubUrl: "https://github.com/Tobiloba03/shesafe",
      featured: true,
    },
    {
      id: 3,
      title: "Design Dribble Page",
      description:
        "Intuitive and responsive landing pages, scallable mobile apps designs, web app designs for my portfolio, showcasing my projects, skills, with smooth animations and modern UI components.",
      image:
        ID3,
      technologies: [
        "Figma",
        "Dribble",
        "UI/UX Design",
        "Prototyping",
        "Wireframing",
      ],
      liveUrl: "https://dribbble.com/Cuzzi_03",
      // githubUrl: "#",
      featured: false,
    },
    // {
    //   id: 4,
    //   title: "Social Media Analytics",
    //   description:
    //     "A comprehensive analytics platform for social media metrics with data visualization, reporting, and automated insights generation.",
    //   image:
    //     "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["Python", "Django", "React", "D3.js", "PostgreSQL"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Learning Management System",
    //   description:
    //     "An LMS platform with course creation, progress tracking, video streaming, and interactive quizzes for online education.",
    //   image:
    //     "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["Next.js", "Prisma", "AWS S3", "Stripe", "Tailwind CSS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Real Estate Platform",
    //   description:
    //     "A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent dashboard.",
    //   image:
    //     "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["React Native", "Firebase", "Google Maps API", "Node.js"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl?: string;
    featured: boolean;
  };
  
  const ProjectCard = ({
    project,
    featured = false,
  }: {
    project: Project;
    featured?: boolean;
  }) => (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-white space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-200 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={project.liveUrl}
              className="flex items-center space-x-1 text-blue-300 hover:text-blue-100 transition-colors duration-200"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
