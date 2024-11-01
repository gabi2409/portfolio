import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Développeur Full Stack',
      company: 'Entreprise A',
      period: '2020 - Présent',
      description: 'Description de vos responsabilités et réalisations',
    },
    {
      title: 'Développeur Front-end',
      company: 'Entreprise B',
      period: '2018 - 2020',
      description: 'Description de vos responsabilités et réalisations',
    },
    // Ajoutez d'autres expériences
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Briefcase className="w-12 h-12 text-indigo-600 mx-auto" />
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Expériences</h2>
          <p className="mt-4 text-xl text-gray-600">Mon parcours professionnel</p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } flex items-center md:justify-between`}
              >
                <div className="flex items-center order-1 w-full md:w-5/12">
                  <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;