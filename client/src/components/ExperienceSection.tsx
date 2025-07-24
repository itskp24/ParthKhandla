export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'HCS',
      period: '2024 - Present',
      status: 'current',
      projects: [
        'E-Log Book Development',
        'PDL - Petrol Pump Management System',
        'HRMS - In-House Product',
        'Project TRMF - SEBI QCR',
        'QBO–QBD Migration Tool (Node.js)'
      ],
      color: 'text-indigo-400'
    },
    {
      title: 'Junior Software Engineer',
      company: 'HCS',
      period: '2023 - 2024',
      status: 'previous',
      projects: [
        'HRA - E-commerce Website',
        'Conversation Tool Development',
        'TallyToOdoo Integration'
      ],
      color: 'text-purple-400'
    },
    {
      title: 'Junior Software Engineer',
      company: 'HCS',
      period: '2022 - 2023',
      status: 'start',
      projects: [
        'JewellerERP Development',
        'TaxFAQ Web Application',
        'Storytelling with AI'
      ],
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded"></div>
        </div>

        {/* 3D Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="flex items-center justify-center">
                  <div className={`
                    w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10
                    ${exp.status === 'current' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse' : 
                      exp.status === 'previous' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 
                      'bg-gradient-to-r from-pink-500 to-red-500'}
                  `}></div>
                </div>

                {/* Experience Card */}
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                    <div className="glass-dark rounded-2xl p-8 neuro hover:scale-105 transition-all duration-500">
                      <div className={`flex items-center space-x-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.status === 'current' && (
                          <span className="px-3 py-1 bg-green-500 text-black rounded-full text-sm font-semibold">
                            Current
                          </span>
                        )}
                        {exp.status === 'start' && (
                          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                            Start
                          </span>
                        )}
                        <span className="text-gray-400">{exp.period}</span>
                      </div>
                      
                      <h3 className={`text-2xl font-space font-bold mb-2 ${exp.color}`}>
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                      
                      <div className="space-y-2 text-gray-400">
                        {exp.projects.map((project, projIndex) => (
                          <p key={projIndex}>• {project}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
