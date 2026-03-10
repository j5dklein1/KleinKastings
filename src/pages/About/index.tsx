import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Klein Kastings | Michigan Aluminum Foundry</title>
        <meta name="description" content="Learn about Klein Kastings, a family-owned Michigan aluminum foundry built on decades of casting experience." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="bg-white pt-20">

      {/* Header */}
      <div className="bg-industrial-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9CW1YZ9SM40NQNFFHR4D82.jpeg?imageMogr2/format/webp"
            className="w-full h-full object-cover"
            alt="Klein Kastings facility"
          />
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">A new foundry built on decades of experience.</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

            {/* Copy */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading text-industrial-900 mb-8 leading-tight">
                A New Foundry.<br />
                <span className="text-accent">Proven Experience.</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Klein Kastings is a new foundry in the Grand Rapids, Michigan area.
                  We launched the company to meet the need for a dependable local source for
                  aluminum castings, with a focus on quality, communication, and responsive service.
                </p>
                <p>
                  Although the company is new, the experience behind it is not. With over
                  18 years in the metal casting industry, we
                  understand what customers expect from a supplier: consistent quality, practical
                  problem-solving, and reliable turnaround. We work with manufacturers, engineers, and
                  purchasing teams who need cast aluminum parts for industrial, commercial, and custom
                  applications.
                </p>
                <p>
                  At Klein Kastings, our goal is to build
                  long-term relationships by providing quality castings and honest, straightforward service.
                  We are proud to be a
                  new aluminum casting company serving Grand Rapids
                  and West Michigan, and we look forward to becoming a trusted partner for
                  businesses throughout the region.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/capabilities"
                  className="bg-accent hover:bg-accent-hover text-white font-heading tracking-wide py-3 px-8 rounded-sm transition-all transform hover:scale-105 text-center"
                >
                  View Our Capabilities
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-industrial-900 hover:bg-industrial-900 hover:text-white text-industrial-900 font-heading tracking-wide py-3 px-8 rounded-sm transition-all text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col gap-8">
              <div className="rounded-sm overflow-hidden shadow-xl relative">
                <img
                  src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9CW1YZ68HTCZNJKSNSC009.jpeg?imageMogr2/format/webp"
                  alt="Shell mold production at Klein Kastings"
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-industrial-900/80 to-transparent p-5">
                  <p className="text-white font-heading text-lg">Conklin, MI — 275 Roosevelt St.</p>
                  <p className="text-gray-300 text-sm">Co-located with{' '}
                    <a href="https://www.nwpolishandbuff.com" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">
                      Northwest Polishing & Buffing
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default AboutPage;
