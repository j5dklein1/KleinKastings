import { Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen font-sans text-industrial-800 bg-industrial-50">
      <ScrollToTop />
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || !isHome ? 'bg-industrial-900 shadow-lg' : 'bg-transparent'
        }`}
        style={{ height: '120px' }}
      >
        <div className="container mx-auto px-4 md:px-6 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1773117168614_edited.png?imageMogr2/format/webp"
                alt="Klein Kastings"
                style={{ height: '100px', width: 'auto', maxWidth: '420px', objectFit: 'contain', objectPosition: 'left center' }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-heading text-lg tracking-wider hover:text-accent transition-colors ${
                    isHome && !isScrolled ? 'text-white' : 'text-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="/contact" 
                className="bg-accent hover:bg-accent-hover text-black font-bold py-2 px-6 rounded-sm transition-all transform hover:scale-105 font-heading tracking-wide"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-industrial-900 bg-opacity-95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white text-3xl font-heading tracking-widest hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/contact"
            className="bg-accent text-black px-8 py-3 rounded-sm font-heading text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request a Quote
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-industrial-900 text-white pt-16 pb-8 border-t-4 border-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <img
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1773117168614_edited.png?imageMogr2/format/webp"
                alt="Klein Kastings"
                style={{ height: '80px', width: 'auto', maxWidth: '320px', objectFit: 'contain', objectPosition: 'left center' }}
              />
              <p className="text-gray-400 max-w-sm">
                Precision aluminum foundry services for the modern manufacturing world. From concept to casting, we deliver quality and reliability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-heading mb-6 text-accent">Quick Links</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-300 hover:text-white hover:translate-x-2 transition-transform inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-heading mb-6 text-accent">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="text-accent shrink-0 mt-1" size={20} />
                  <a href="https://maps.google.com/?q=275+Roosevelt+St,+Conklin,+MI+49403" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    275 Roosevelt St.<br />Conklin, MI 49403
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Phone className="text-accent shrink-0" size={20} />
                  <a href="tel:6168908901" className="hover:text-white transition-colors">
                    (616) 890-8901
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <Mail className="text-accent shrink-0" size={20} />
                  <a href="mailto:jason@kleinkastings.com" className="hover:text-white transition-colors">
                    jason@kleinkastings.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Klein Kastings, Inc. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed by Wegic</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
