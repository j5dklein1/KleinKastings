import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomCastingPage() {
  useEffect(() => {
    document.title = 'Custom Aluminum Casting Services | Klein Kastings';

    const description =
      'Klein Kastings provides custom aluminum casting services including prototype castings, production runs, machining, polishing, buffing, and finishing for manufacturers in Michigan and across the Midwest.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <main className="bg-white text-slate-900">
      <section className="px-6 pt-40 pb-16 md:px-10 md:pt-44 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Aluminum Foundry Services
          </p>
          <h1 className="max-w-4xl text-4xl font-black uppercase tracking-[0.05em] text-slate-900 md:text-6xl">
            Custom Aluminum Casting Services
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            Klein Kastings provides custom aluminum casting services for manufacturers,
            engineers, and product developers who need reliable parts, responsive service,
            and consistent quality. From prototype castings to production runs, we produce
            aluminum components ready for machining, polishing, coating, assembly, or final
            installation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-none bg-slate-900 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
            >
              Request a Quote
            </Link>
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center rounded-none border border-slate-900 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-slate-100"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-14 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Casting Capabilities</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Our aluminum casting capabilities support both short-run prototype work and
              ongoing production. We focus on castings that machine cleanly, finish well,
              and meet the demands of industrial, commercial, and custom applications.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-800">
              <li>• Prototype castings and low-volume production</li>
              <li>• Production aluminum castings</li>
              <li>• Sand casting and permanent mold support</li>
              <li>• Castings prepared for secondary machining and finishing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Finishing Advantage</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Klein Kastings offers more than casting alone. We also provide machining,
              polishing, buffing, and finishing services, which gives customers a cleaner,
              more complete solution from one supplier.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-800">
              <li>• CNC machining support</li>
              <li>• Polishing and buffing services</li>
              <li>• Surface preparation prior to coating or assembly</li>
              <li>• Finished castings ready for customer production flow</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Materials and Applications</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We work with aluminum castings for a wide range of applications, including
              industrial equipment, transportation, furniture, architectural hardware,
              machinery components, and custom fabricated products. If your project needs
              lightweight strength, machinability, and a quality finish, aluminum casting
              is often the right solution.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Our team works with customers who need dependable communication and castings
              produced to real manufacturing expectations. We understand that buyers are
              looking for parts that are not only cast correctly, but also ready for the
              next step in production.
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-black uppercase tracking-tight">Request a Quote</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Send us your drawing, model, sample, or part requirements and we’ll review
              your project for aluminum casting, machining, and finishing.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-800">
              <li>• Prototype and production inquiries</li>
              <li>• New part development</li>
              <li>• Secondary machining needs</li>
              <li>• Polishing and finishing requirements</li>
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-none bg-slate-900 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
            >
              Send RFQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
