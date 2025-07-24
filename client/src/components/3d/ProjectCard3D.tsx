import { useState } from 'react';

interface ProjectCard3DProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    color: string;
  };
  delay?: number;
}

export default function ProjectCard3D({ project, delay = 0 }: ProjectCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        glass-dark rounded-2xl overflow-hidden neuro 
        transition-all duration-500 transform-3d
        hover:scale-105 hover:rotate-y-6
        ${isHovered ? 'shadow-2xl shadow-indigo-500/20' : ''}
      `}>
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className={`
              w-full h-48 object-cover transition-transform duration-500
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          />
          <div className={`
            absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent
            opacity-0 transition-opacity duration-300
            ${isHovered ? 'opacity-100' : ''}
          `} />
        </div>
        
        <div className="p-6">
          <h3 className={`text-xl font-space font-bold mb-2 ${project.color}`}>
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className={`
                  px-2 py-1 rounded text-xs font-medium
                  transition-all duration-300
                  ${isHovered ? 'animate-pulse' : ''}
                `}
                style={{
                  background: index % 2 === 0 ? 'hsl(220, 70%, 50%)' : 'hsl(280, 70%, 50%)',
                  color: 'white'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <button className={`font-semibold transition-colors duration-300 ${project.color} hover:opacity-80`}>
              <i className="fas fa-external-link-alt mr-2"></i>
              View Details
            </button>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                <i className="fab fa-github text-sm"></i>
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                <i className="fas fa-external-link-alt text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
