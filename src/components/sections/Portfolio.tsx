import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Projet 3',
      description: 'Description du projet 3',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Code className="w-12 h-12 text-indigo-600 mx-auto" />
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-4 text-xl text-gray-600">Découvrez mes derniers projets</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;