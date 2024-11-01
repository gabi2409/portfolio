import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <User className="w-12 h-12 text-indigo-600 mx-auto" />
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">À propos de moi</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Passionné(e) par le développement web et les nouvelles technologies
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Qui suis-je ?</h3>
            <p className="text-gray-600">
              [Votre description personnelle ici]
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compétences</h3>
            <div className="space-y-4">
              {['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript'].map((skill) => (
                <div key={skill} className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                  <span className="ml-4 min-w-[100px] text-gray-600">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;