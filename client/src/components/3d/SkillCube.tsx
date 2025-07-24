import { useState } from 'react';

interface SkillCubeProps {
  skill: {
    name: string;
    icon: string;
    level: number;
    color: string;
  };
  delay?: number;
}

export default function SkillCube({ skill, delay = 0 }: SkillCubeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="skill-cube group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        glass-dark rounded-2xl p-6 text-center neuro 
        transition-all duration-500 transform-3d
        hover:scale-110 hover:rotate-y-12
        ${isHovered ? 'animate-pulse' : ''}
      `}>
        <div 
          className={`text-4xl mb-4 transition-all duration-300 ${skill.color}`}
          style={{
            animation: isHovered ? 'bounce 0.6s ease-in-out' : 'none'
          }}
        >
          <i className={skill.icon}></i>
        </div>
        <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className={`bg-gradient-to-r h-2 rounded-full transition-all duration-1000 ${
              isHovered ? 'animate-pulse' : ''
            }`}
            style={{
              width: `${skill.level}%`,
              background: `linear-gradient(90deg, ${skill.color.replace('text-', 'hsl(').replace('-400', ', 70%, 60%)')}, ${skill.color.replace('text-', 'hsl(').replace('-400', ', 70%, 40%)')})`
            }}
          />
        </div>
      </div>
    </div>
  );
}
