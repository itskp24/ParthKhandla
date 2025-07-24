import ProjectCard3D from './3d/ProjectCard3D';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Log Book',
      description: 'Digital logging system for efficient record management and tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'JavaScript', 'Node.js'],
      color: 'text-green-400'
    },
    {
      title: 'HRA E-commerce',
      description: 'Full-featured e-commerce platform with modern user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'Redux', 'Node.js'],
      color: 'text-purple-400'
    },
    {
      title: 'JewellerERP',
      description: 'Enterprise resource planning system for jewelry business management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'TallyTDL', 'Prisma'],
      color: 'text-amber-400'
    },
    {
      title: 'HRMS',
      description: 'Human Resource Management System for streamlined HR operations.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'Node.js', 'Database'],
      color: 'text-cyan-400'
    },
    {
      title: 'TaxFAQ Web App',
      description: 'Comprehensive tax information and FAQ management system.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'JavaScript', 'API'],
      color: 'text-red-400'
    },
    {
      title: 'Storytelling with AI',
      description: 'AI-powered storytelling platform with interactive narrative generation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React.js', 'AI/ML', 'APIs'],
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard3D
              key={project.title}
              project={project}
              delay={index * 100}
            />
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-full font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 animate-glow">
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
