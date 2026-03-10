import { ArrowRight, Box, Layers, Hammer, PenTool, Truck, Armchair, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Seo from '@/components/Seo';

const HomePage = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <>
      <Seo title="Klein Kastings | Aluminum & Metal Casting in Michigan" description="Klein Kastings provides aluminum casting, shell molding, permanent mold casting, CNC machining, and finishing services in West Michigan." path="/" />
    <div className="flex flex-col">
      {/* Hero Section - Static Image */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9B62PYCH0V9N94ZRAPQT6N.png?imageMogr2/format/webp"
            alt="Molten aluminum being poured into a mold"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-industrial-900/55"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-accent font-heading tracking-[0.3em] text-sm uppercase mb-4">Michigan-Based Aluminum Foundry</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 tracking-wider hero-text-shadow leading-none">
            Precision Aluminum <br />
            <span className="text-accent">Foundry Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            From 3D design to finished casting — we bring your industrial vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-black font-bold py-4 px-10 rounded-sm text-lg transition-all transform hover:scale-105 font-heading tracking-wide"
            >
              Request a Quote
            </Link>
            <Link
              to="/capabilities"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-industrial-900 text-white font-bold py-4 px-10 rounded-sm text-lg transition-all font-heading tracking-wide"
            >
              View Capabilities
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/40 animate-pulse"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading text-industrial-900 mb-6">
                From Molten Metal to <span className="text-accent">Finished Casting</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Klein Kastings, we provide high-quality aluminum castings in the Grand Rapids, Michigan area for customers who need dependable parts, responsive service, and consistent results. We work with manufacturers, engineers, and purchasing teams looking for cast aluminum components for industrial, commercial, and custom applications.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From prototype work to production runs, our team is focused on delivering castings that meet your requirements for quality, appearance, and performance. If you need a trusted aluminum foundry serving Grand Rapids, MI area — we're ready to help.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Box className="text-accent" size={32} />
                  <span className="font-heading text-xl text-industrial-800">Custom 3D Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Layers className="text-accent" size={32} />
                  <span className="font-heading text-xl text-industrial-800">Precision Casting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Hammer className="text-accent" size={32} />
                  <span className="font-heading text-xl text-industrial-800">CNC Machining</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PenTool className="text-accent" size={32} />
                  <span className="font-heading text-xl text-industrial-800">Prototyping</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-gray-900 rounded-sm overflow-hidden shadow-xl">
              <img
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1773110886055_edited.png?imageMogr2/format/webp"
                alt="Aluminum castings fresh from the shell mold process at Klein Kastings"
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parts Gallery Section */}
      <section className="py-20 bg-industrial-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Real Parts. Real Work.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From shell cores and molds to finished castings — a look at what comes out of our shop.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              { src: 'https://cdn.wegic.ai/assets/onepage/agent/images/1773110861922_edited.png?imageMogr2/format/webp', alt: 'Shell core golf tee markers' },
              { src: 'https://cdn.wegic.ai/assets/onepage/agent/images/1773110859032_edited.png?imageMogr2/format/webp', alt: 'Shell mold casting' },
              { src: 'https://cdn.wegic.ai/assets/onepage/agent/images/1773110859335_edited.png?imageMogr2/format/webp', alt: 'Permanent mold halves' },
              { src: 'https://cdn.wegic.ai/assets/onepage/agent/images/1773110861703_edited.png?imageMogr2/format/webp', alt: 'L-shaped shell core assembly' },
              { src: 'https://cdn.wegic.ai/assets/onepage/agent/images/1773110860780_edited.png?imageMogr2/format/webp', alt: 'Shell core pair' },
              { src: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/10/01KKAZ9QF4C13XRRKH9YDKNWNF.jpg?imageMogr2/format/webp', alt: 'Decorative aluminum arch casting' },
            ].map((photo, i) => (
              <div key={i} className="group overflow-hidden rounded-sm bg-industrial-800 shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '1 / 1' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Video Section */}
      <section className="py-20 bg-industrial-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-industrial-900 mb-4">See Us In Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A look inside our facility.</p>
          </div>
          <div className="relative max-w-4xl mx-auto rounded-sm overflow-hidden shadow-2xl aspect-video bg-industrial-900">
            {!videoPlaying ? (
              <>
                <img
                  src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9B62PYCH0V9N94ZRAPQT6N.png?imageMogr2/format/webp"
                  alt="Facility preview"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="bg-accent hover:bg-accent-hover text-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/50"
                    aria-label="Play facility video"
                  >
                    <Play className="w-8 h-8 ml-1" fill="white" />
                  </button>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-industrial-900/80 to-transparent p-6">
                  <p className="text-white font-heading text-xl tracking-wide">Klein Kastings — Pour</p>
                  <p className="text-gray-300 text-sm">Conklin, Michigan</p>
                </div>
              </>
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/video/2026/02/23/01KJ482PEC32C52Y2GF6AB4PXQ.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-industrial-900 mb-4">Our Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for your aluminum casting needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Design & Engineering',
                desc: '3D modeling, tooling design, and 3D printed prototyping.',
                img: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/10/01KKATB9J15R0SBHF2VJRN9RAF.png?imageMogr2/format/webp',
                icon: <PenTool className="w-8 h-8 text-white" />
              },
              {
                title: 'Casting & Production',
                desc: 'Shell process and permanent mold casting for precision parts.',
                img: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/10/01KKAV84NYFRC1RT9GDSA7XW1G.jpeg?imageMogr2/format/webp',
                icon: <Layers className="w-8 h-8 text-white" />
              },
              {
                title: 'Finishing & CNC',
                desc: 'CNC machining, polishing, and buffing for the perfect finish.',
                img: 'https://cdn.wegic.ai/assets/onepage/agent/images/1771348629147.jpg?imageMogr2/format/webp',
                icon: <Hammer className="w-8 h-8 text-white" />
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-industrial-900/20 group-hover:bg-industrial-900/0 transition-all z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-accent p-3 rounded-full z-20">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-industrial-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link to="/capabilities" className="inline-flex items-center text-accent font-bold hover:text-accent-hover transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-industrial-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
              Our Aluminum Casting Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We provide a range of <strong className="text-white">aluminum casting services in Grand Rapids, MI</strong> to support your project from concept to finished part.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Custom Aluminum Castings',
                body: 'We produce custom aluminum castings built to your specifications, application, and production needs.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                  </svg>
                )
              },
              {
                title: 'Prototype and Production Casting',
                body: 'Whether you need a few sample parts or ongoing production, we can help move your project forward.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                )
              },
              {
                title: 'Machining and Secondary Operations',
                body: 'We can provide additional services to help deliver a part that is closer to production-ready.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.065-4.23c-.606-.874-.91-1.884-.753-2.988a10.957 10.957 0 0 1 3.063-5.337 10.957 10.957 0 0 1 5.337-3.063c1.104-.157 2.114.147 2.988.753a2.252 2.252 0 0 1 .364 3.218l-2.242 2.723a1.5 1.5 0 0 1-2.113.19L14.82 7.06a1.5 1.5 0 0 1-.19-2.113l2.723-2.242a2.252 2.252 0 0 0-3.218-.364Z" />
                  </svg>
                )
              },
              {
                title: 'Finishing and Surface Prep',
                body: 'Klein Kastings is located at the same facility as Northwest Polishing & Buffing — giving you seamless access to professional metal finishing without adding another vendor.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                )
              },
            ].map((service, i) => (
              <div key={i} className="bg-industrial-800 border border-industrial-700 rounded-sm p-7 flex gap-5 hover:border-accent transition-colors group">
                <div className="shrink-0 text-accent mt-1 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading text-industrial-900 mb-4">
                Why Companies Choose Our <span className="text-accent">Aluminum Casting Services</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Local & Regional Service',
                  body: 'Serving Grand Rapids, West Michigan, and surrounding markets with the responsiveness only a local foundry can offer.'
                },
                {
                  title: 'Flexible Production',
                  body: 'Support for prototypes, short runs, and production quantities.'
                },
                {
                  title: 'Reliability You Can Count On',
                  body: 'Focused on consistent quality, clear communication, and on-time delivery — so you can keep your own production on schedule.'
                },
                {
                  title: 'Complete In-House Capabilities',
                  body: (<>Machining, finishing, and secondary operations under one roof. Co-located with <a href="https://www.nwpolishandbuff.com" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">Northwest Polishing & Buffing</a> for all your metal finishing needs — fewer vendors, simpler logistics.</>)
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-industrial-50 border border-gray-100 rounded-sm p-6 hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="shrink-0 mt-1 bg-accent rounded-full w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-industrial-900 mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body as React.ReactNode}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries CTA */}
      <section className="py-20 bg-industrial-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">Industries We Serve</h2>
            <p className="text-gray-300 text-lg">
              From robust trucking components to elegant furniture parts, our expertise spans multiple sectors. We adapt our process to meet the unique demands of your industry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-12">
            <div className="flex-1 flex items-center bg-industrial-800 p-5 rounded-sm border-l-4 border-accent">
              <Truck className="text-accent mr-4 shrink-0" size={32} />
              <div>
                <h4 className="font-heading text-xl">Trucking & Transportation</h4>
                <p className="text-gray-400 text-sm">Heavy-duty, durable components built for the road.</p>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-industrial-800 p-5 rounded-sm border-l-4 border-accent">
              <Armchair className="text-accent mr-4 shrink-0" size={32} />
              <div>
                <h4 className="font-heading text-xl">Furniture & Design</h4>
                <p className="text-gray-400 text-sm">Aesthetic, polished parts with structural integrity.</p>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-industrial-800 p-5 rounded-sm border-l-4 border-accent">
              <Box className="text-accent mr-4 shrink-0" size={32} />
              <div>
                <h4 className="font-heading text-xl">Custom Projects</h4>
                <p className="text-gray-400 text-sm">Unique castings like golf tee markers and specialized prototypes.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact" className="bg-white text-industrial-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-200 transition-colors font-heading tracking-wide inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;