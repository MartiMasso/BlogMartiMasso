import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Hybrid Propulsion System',
      description: 'Development of a hybrid propulsion system for small satellites, optimizing fuel efficiency and orbital trajectory control.',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['MATLAB', 'SolidWorks', 'CFD', 'Control Systems'],
      category: 'aerospace',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Quantum Dynamics Simulator',
      description: 'Computational simulator for studying complex quantum systems, implementing quantum Monte Carlo algorithms.',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'NumPy', 'Quantum Computing', 'Machine Learning'],
      category: 'physics',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Orbital Analysis Platform',
      description: 'Software for orbital trajectory analysis and prediction, used in NASA missions for space route optimization.',
      image: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C++', 'OpenGL', 'Orbital Mechanics', 'Data Visualization'],
      category: 'research',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Startup: AeroTech Solutions',
      description: 'Company focused on developing autonomous navigation technologies for drones and unmanned aerial vehicles.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AI/ML', 'Computer Vision', 'Embedded Systems', 'IoT'],
      category: 'startup',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Startup: Quantum Dynamics Corp',
      description: 'Development of quantum algorithms for industrial process optimization and advanced materials simulation.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Quantum Computing', 'Qiskit', 'Optimization', 'Materials Science'],
      category: 'startup',
      github: '#',
      demo: '#'
    }
  ];

  const categories = [
    { id: 'todos', name: 'All' },
    { id: 'aerospace', name: 'Aerospace' },
    { id: 'physics', name: 'Physics' },
    { id: 'research', name: 'Research' },
    { id: 'startup', name: 'Startups' }
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills and experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
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

export default Projects;