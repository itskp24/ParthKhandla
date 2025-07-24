import HeroCanvas from './3d/HeroCanvas';

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a simple resume download or redirect
    window.open('mailto:p.khandla123@gmail.com?subject=Resume Request&body=Hi Parth, I would like to request your resume.', '_blank');
  };

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          {/* Main Title */}
          <div className="floating">
            <h1 className="text-6xl md:text-8xl font-space font-bold mb-6">
              <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                PARTH
              </span>
              <br />
              <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400">
                KHANDLA
              </span>
            </h1>
          </div>

          {/* Code Block */}
          <div className="code-block max-w-2xl mx-auto mb-8 floating" style={{ animationDelay: '0.5s' }}>
            <div className="text-green-400 mb-2">// Frontend Developer</div>
            <div className="text-gray-300">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">developer</span> = {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">name</span>:{' '}
              <span className="text-green-300">'Parth Khandla'</span>,
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">skills</span>: [
              <span className="text-green-300">'React.js'</span>,{' '}
              <span className="text-green-300">'JavaScript'</span>,{' '}
              <span className="text-green-300">'Node.js'</span>],
              <br />
              &nbsp;&nbsp;<span className="text-yellow-400">passion</span>:{' '}
              <span className="text-green-300">'Creating Amazing Web Experiences'</span>
              <br />
              {'};'}
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 floating" style={{ animationDelay: '1s' }}>
            Passionate Frontend Developer specializing in React.js with expertise in both class and functional components.
            Building the future of web, one component at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center floating" style={{ animationDelay: '1.5s' }}>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </button>
            <button
              onClick={handleViewWork}
              className="px-8 py-4 border-2 border-indigo-500 rounded-full font-semibold hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-eye mr-2"></i>
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating absolute top-20 left-10 text-indigo-400 opacity-30 transform rotate-12">
          <i className="fab fa-react text-4xl"></i>
        </div>
        <div className="floating absolute top-40 right-20 text-yellow-400 opacity-30 transform -rotate-12" style={{ animationDelay: '1s' }}>
          <i className="fab fa-js-square text-4xl"></i>
        </div>
        <div className="floating absolute bottom-40 left-20 text-green-400 opacity-30 transform rotate-45" style={{ animationDelay: '2s' }}>
          <i className="fab fa-node-js text-4xl"></i>
        </div>
        <div className="floating absolute bottom-20 right-10 text-purple-400 opacity-30 transform -rotate-6" style={{ animationDelay: '0.5s' }}>
          <span className="text-2xl font-mono">&lt;/&gt;</span>
        </div>
      </div>

      {/* 3D Hero Canvas */}
      <HeroCanvas />
    </section>
  );
}
