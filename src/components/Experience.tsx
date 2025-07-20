import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('academic');

  const academicExperience = [
    {
      title: 'Ph.D. in Aerospace Engineering',
      institution: 'MIT - Massachusetts Institute of Technology',
      period: '2018 - 2022',
      description: 'Specialization in advanced space propulsion and orbital control systems.',
      achievements: [
        'Thesis: "Optimization of Hybrid Propulsion Systems"',
        'Publication in Journal of Spacecraft and Rockets',
        'NASA USRP Academic Excellence Fellowship'
      ]
    },
    {
      title: 'M.S. in Theoretical Physics',
      institution: 'Stanford University',
      period: '2016 - 2018',
      description: 'Focus on quantum mechanics and particle physics with computational applications.',
      achievements: [
        'Summa Cum Laude',
        'Research in particle accelerators',
        'Collaboration with CERN'
      ]
    },
    {
      title: 'B.S. in Aerospace Engineering',
      institution: 'Caltech - California Institute of Technology',
      period: '2012 - 2016',
      description: 'Comprehensive training in aerodynamics, space structures, and navigation systems.',
      achievements: [
        'Magna Cum Laude - GPA: 3.9/4.0',
        'President of Astronautics Club',
        'Final project: CubeSat Design'
      ]
    }
  ];

  const professionalExperience = [
    {
      title: 'Co-founder & CTO',
      institution: 'AeroTech Solutions & Quantum Dynamics Corp',
      period: '2022 - Present',
      description: 'Leading technological development of two startups focused on autonomous navigation and quantum computing.',
      achievements: [
        'Raised $2.5M in seed funding',
        'Team of 15 specialized engineers',
        '3 patents pending approval'
      ]
    },
    {
      title: 'Senior Researcher',
      institution: 'NASA Jet Propulsion Laboratory',
      period: '2020 - 2022',
      description: 'Research in advanced propulsion systems for Mars missions and deep space exploration.',
      achievements: [
        'Technical lead on Mars Sample Return project',
        'Development of autonomous navigation algorithms',
        'Collaboration with international teams'
      ]
    },
    {
      title: 'Postdoctoral Researcher',
      institution: 'NASA Ames Research Center',
      period: '2018 - 2020',
      description: 'Research in hypersonic aerodynamics and atmospheric entry systems for planetary missions.',
      achievements: [
        'Published 8 papers in indexed journals',
        'Development of advanced CFD models',
        'Mentor to 5 doctoral students'
      ]
    }
  ];

  const currentData = activeTab === 'academic' ? academicExperience : professionalExperience;
  const currentIcon = activeTab === 'academic' ? GraduationCap : Briefcase;

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic and professional journey in the world of technology
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('academic')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'academic'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <GraduationCap size={20} />
              <span>Academic</span>
            </button>
            <button
              onClick={() => setActiveTab('professional')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'professional'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Briefcase size={20} />
              <span>Professional</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>
          
          <div className="space-y-12">
            {currentData.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className="flex items-center space-x-2 text-blue-600">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{item.period}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-blue-600 font-medium mb-3">
                      {item.institution}
                    </p>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className={`flex items-center space-x-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <Award size={14} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {React.createElement(currentIcon, { size: 20 })}
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;