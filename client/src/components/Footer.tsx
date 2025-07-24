export default function Footer() {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-space font-bold mb-4 glow-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            &lt;PK/&gt;
          </div>
          <p className="text-gray-400 mb-6">
            Building the future of web, one component at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 Parth Khandla. All rights reserved. Made with ❤️ and React.js
          </div>
        </div>
      </div>
    </footer>
  );
}
