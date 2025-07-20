import React from 'react';
import { Rocket, Atom, Telescope, Award, Building, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my passion for technology and my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am an aerospace engineer and physicist passionate about exploring the limits of scientific 
              and technological knowledge. My experience spans from advanced research at NASA 
              to developing disruptive technologies through entrepreneurship.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My mission is to push the frontier of human knowledge, developing solutions 
              that positively impact space exploration, fundamental physics, and 
              technological innovation for the benefit of humanity.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Rocket size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-700">Aerospace Engineering</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Atom size={16} className="text-purple-600" />
                </div>
                <span className="text-gray-700">Theoretical and Applied Physics</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Telescope size={16} className="text-indigo-600" />
                </div>
                <span className="text-gray-700">NASA Research</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Building size={16} className="text-green-600" />
                </div>
                <span className="text-gray-700">Technology Entrepreneurship</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-500/20 rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-4">Areas of Specialization</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Rocket size={16} className="mr-2" />
                    Aerospace
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>Space Propulsion</li>
                    <li>Orbital Dynamics</li>
                    <li>Control Systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Atom size={16} className="mr-2" />
                    Physics
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>Quantum Mechanics</li>
                    <li>Relativity</li>
                    <li>Astrophysics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Telescope size={16} className="mr-2" />
                    Research
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>Data Analysis</li>
                    <li>Mathematical Modeling</li>
                    <li>Numerical Simulation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Lightbulb size={16} className="mr-2" />
                    Innovation
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>Product Development</li>
                    <li>Project Management</li>
                    <li>Technology Transfer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;