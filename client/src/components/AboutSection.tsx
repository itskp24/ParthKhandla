export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="glass-dark rounded-2xl p-8 neuro">
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                🚀 Passionate and dedicated Frontend Developer with a strong foundation in React.js,
                having started my journey mastering class components before transitioning to modern
                functional components with React 18.
              </p>
              <p>
                💡 This dual expertise allows me to work flexibly across both legacy and modern codebases.
                I am always eager to explore and implement the latest features and patterns to write
                clean, efficient, and future-proof code.
              </p>
              <p>
                🎯 Currently working as a Software Engineer at HCS, contributing to various projects
                from e-commerce platforms to enterprise management systems.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-indigo-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Personal Info Cards */}
          <div className="space-y-4">
            <div className="glass-dark rounded-xl p-6 neuro hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-gray-400">BE - Computer Engineering</p>
                  <p className="text-sm text-gray-500">CGPA: 8.9 (2019-2022)</p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-6 neuro hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-400">Ahmedabad, India</p>
                  <p className="text-sm text-gray-500">Available for Remote Work</p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-6 neuro hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Specialization</h3>
                  <p className="text-gray-400">Frontend Development</p>
                  <p className="text-sm text-gray-500">React.js & Modern Web Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
