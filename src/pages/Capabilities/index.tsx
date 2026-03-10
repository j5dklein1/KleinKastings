import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Seo from '@/components/Seo';

const SHELL_IMAGES = [
  {
    src: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9CW1YZ68HTCZNJKSNSC009.jpeg?imageMogr2/format/webp',
    alt: 'Shell mold assembled on workbench'
  },
  {
    src: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9CW1YZQVWXJQGY7ETP4B1P.jpeg?imageMogr2/format/webp',
    alt: 'Shell mold cavity detail'
  },
  {
    src: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9CW1YZ9SM40NQNFFHR4D82.jpeg?imageMogr2/format/webp',
    alt: 'Shell mold with cast aluminum part and production molds'
  },
  {
    src: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9CW1YZVRR2SKN0TFKNP8NZ.jpg?imageMogr2/format/webp',
    alt: 'Decorative aluminum arch casting with shell molds'
  },
];

const CNC_IMAGES = [
  {
    src: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/10/01KKB122HB7WR8F7MSTF2GZ17E.jpeg?imageMogr2/format/webp',
    alt: 'CNC machined mold tooling cavity detail'
  },
  {
    src: 'https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9D5VX0053EEDRWT7AEJBKS.jpg?imageMogr2/format/webp',
    alt: 'CNC machined mold cavity with coolant'
  },
];

const CapabilitiesPage = () => {
  return (
    <>
      <Seo title="Casting Capabilities | Klein Kastings" description="Explore Klein Kastings capabilities including shell molding, permanent mold casting, CNC machining, design support, and finishing." path="/capabilities" />
    <div className="bg-white pt-20">
      {/* Header */}
      <div className="bg-industrial-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/09/01KK9CW1YZ9SM40NQNFFHR4D82.jpeg?imageMogr2/format/webp"
            className="w-full h-full object-cover"
            alt="Shell molds in production"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-4">Our Capabilities</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">End-to-end aluminum casting solutions from design to finished product.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 space-y-32">

        {/* Capability 1: Design & Prototyping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-heading text-industrial-900 mb-6">Design & <span className="text-accent">Prototyping</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every great casting starts with a great design. We utilize advanced 3D modeling software to design tooling and optimize your parts for the casting process before metal is ever poured.
            </p>
            <ul className="space-y-4">
              {[
                '3D CAD Modeling of Tooling',
                '3D Printed Sand Molds',
                '3D Printed Plastic Prototypes',
                'Design for Manufacturability (DFM)'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-industrial-700">
                  <CheckCircle className="text-accent mr-3 w-5 h-5 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/03/10/01KKATB9J15R0SBHF2VJRN9RAF.png?imageMogr2/format/webp"
              alt="3D CAD Design - Corebox tooling design in Fusion 360"
              className="rounded-sm shadow-xl w-full h-[400px] object-contain bg-gray-900"
            />
          </div>
        </div>

        {/* Capability 2: Shell Core & Mold Casting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="grid grid-cols-2 gap-3">
              {SHELL_IMAGES.map((img, i) => (
                <div key={i} className={`overflow-hidden rounded-sm shadow-lg bg-gray-900 ${i === 1 ? 'translate-y-4' : i === 3 ? '-translate-y-4' : ''}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 object-contain hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-4xl font-heading text-industrial-900 mb-6">Shell Core & <span className="text-accent">Mold Casting</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We specialize in the shell process — a precision sand-casting method that produces parts with excellent surface finish, tight tolerances, and complex geometry. Our shell molds are built in-house from CNC-machined tooling, giving you full control from pattern to pour.
            </p>
            <ul className="space-y-4">
              {[
                'Shell Molding Process',
                'Shell Core Production',
                'Complex Geometries & Fine Surface Detail'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-industrial-700">
                  <CheckCircle className="text-accent mr-3 w-5 h-5 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Capability 3: CNC Machining & Finishing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-heading text-industrial-900 mb-6">Machining & <span className="text-accent">Finishing</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We don't just stop at the raw casting. With in-house CNC capabilities and direct access to <a href="https://www.nwpolishandbuff.com" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">Northwest Polishing & Buffing</a> — located at the same facility — we deliver parts ready for assembly or showroom display without adding another vendor to your supply chain.
            </p>
            <ul className="space-y-4">
              {[
                'CNC Machining for Tooling Construction',
                'Simple Machining Operations on Castings',
                'Connected Polishing & Buffing Shop',
                'Mirror, Satin & Brush Finish Options',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-industrial-700">
                  <CheckCircle className="text-accent mr-3 w-5 h-5 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex flex-col gap-4">
              {CNC_IMAGES.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm shadow-lg bg-gray-900">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-contain hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Equipment Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading text-industrial-900 mb-4">Our Equipment</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Purpose-built machinery for precision aluminum casting — reliable, proven, and production-ready.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: 'Shell Core Machines',
                spec: '× 2 Units',
                detail: 'Two dependable shell core machines for consistent, high-quality shell mold and core production.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )
              },
              {
                name: 'Stahl Autocast II',
                spec: '18 × 24"',
                detail: 'Precision permanent mold casting machine delivering repeatable aluminum parts with excellent surface finish and tight tolerances.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                  </svg>
                )
              },
              {
                name: 'Raytec Resistance Furnace',
                spec: '700 lb Capacity',
                detail: 'High-capacity resistance furnace for precise temperature control and clean aluminum melting — no contamination, consistent alloy quality.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                  </svg>
                )
              },
              {
                name: 'Fadal VMC15XT',
                spec: '16 × 30 × 12" Footprint',
                detail: 'Vertical machining center used for both casting machining operations and precision tooling construction.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.065-4.23c-.606-.874-.91-1.884-.753-2.988a10.957 10.957 0 0 1 3.063-5.337 10.957 10.957 0 0 1 5.337-3.063c1.104-.157 2.114.147 2.988.753a2.252 2.252 0 0 1 .364 3.218l-2.242 2.723a1.5 1.5 0 0 1-2.113.19L14.82 7.06a1.5 1.5 0 0 1-.19-2.113l2.723-2.242a2.252 2.252 0 0 0-3.218-.364Z" />
                  </svg>
                )
              },
              {
                name: 'International Green Sand',
                spec: 'Squeeze Station',
                detail: 'Green sand squeeze station — ideal for prototypes and short production runs where flexibility and quick turnaround matter.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                )
              },
            ].map((equip, i) => (
              <div key={i} className="bg-industrial-50 border border-gray-200 rounded-sm p-6 hover:border-accent hover:shadow-md transition-all group">
                <h3 className="font-heading text-xl text-industrial-900 mb-4">{equip.name}</h3>
                <p className="text-accent font-heading text-sm tracking-widest uppercase mb-2">{equip.spec}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{equip.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-accent py-16 text-center text-white">
        <h2 className="text-4xl font-heading mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-8 opacity-90">Let's discuss your requirements and how we can help.</p>
        <Link to="/contact" className="bg-white text-accent font-bold py-3 px-10 rounded-sm hover:bg-gray-100 transition-colors inline-block font-heading tracking-wide">
          Get a Quote
        </Link>
      </div>
    </div>
    </>
  );
};

export default CapabilitiesPage;