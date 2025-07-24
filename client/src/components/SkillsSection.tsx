import SkillCube from './3d/SkillCube';

export default function SkillsSection() {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 90, color: 'text-yellow-400' },
    { name: 'React.js', icon: 'fab fa-react', level: 95, color: 'text-cyan-400' },
    { name: 'Redux', icon: 'fas fa-layer-group', level: 85, color: 'text-purple-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 80, color: 'text-green-400' },
    { name: 'Prisma ORM', icon: 'fas fa-database', level: 75, color: 'text-indigo-400' },
    { name: 'Tally TDL', icon: 'fas fa-file-code', level: 70, color: 'text-orange-400' }
  ];

  const additionalSkills = [
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'REST APIs', 
    'Responsive Design', 'Web Performance', 'Testing'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded"></div>
        </div>

        {/* 3D Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCube
              key={skill.name}
              skill={skill}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-space font-bold text-center mb-8 text-gray-300">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={skill}
                className="glass-dark px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
