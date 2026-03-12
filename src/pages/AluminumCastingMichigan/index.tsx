import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AluminumCastingMichiganPage() {
  useEffect(() => {
    document.title = 'Aluminum Casting Michigan | Klein Kastings';

    const description =
      'Klein Kastings provides aluminum casting services in Michigan, including machining, polishing, buffing, and finishing for manufacturers in Grand Rapids, West Michigan, and across the Midwest.';

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
            West Michigan Manufacturing
          </p>
          <h1 className="max-w-4xl text-4xl font-black uppercase tracking-[0.05em] text-slate-900 md:text-6xl">
            Aluminum Casting in Michigan
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            Klein Kastings provides aluminum casting services for manufacturers in Grand Rapids,
            West Michigan, and across the Midwest. We produce aluminum components for customers
            who need dependable quality, responsive communication, and casting support that
            fits real production requirements.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            From prototype development to production castings, our team supports projects that
            require machining, polishing, buffing, and finishing in addition to core foundry work.
            That gives customers one source for more of the process and fewer handoffs between vendors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-none bg-slate-900 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
            >
              Request a Quote
            </Link>
            <Link
              to="/custom-aluminum-castings"
              className="inline-flex items-center justify-center rounded-none border border-slate-900 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-slate-100"
            >
              Custom Casting Services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-14 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black uppercase tracking-[0.05em]">Michigan Service Area</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We support customers in Grand Rapids, West Michigan, and surrounding manufacturing
              regions that need aluminum castings produced with quality and consistency.
            </p>
          </div>
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black uppercase tracking-[0.05em]">Manufacturing Support</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Our castings are produced for industrial equipment, transportation components,
              furniture hardware, custom machinery, and specialty applications that need
              dependable aluminum parts.
            </p>
          </div>
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black uppercase tracking-[0.05em]">Complete Process</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              In addition to aluminum casting, we provide machining, polishing, buffing, and
              finishing services so customers can receive more complete parts from one supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black uppercase tracking-[0.05em]">Why Buyers Search for Aluminum Casting Michigan</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Buyers searching for aluminum casting in Michigan are usually looking for a foundry
            partner that can support more than raw castings. They need communication, realistic
            lead times, secondary services, and parts that are ready to move through machining,
            coating, or final assembly. That is where Klein Kastings is built to help.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            If your company is sourcing cast aluminum components in Michigan, we can review your
            project requirements and help determine the best path for prototype work, production,
            machining, and finishing.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-none bg-slate-900 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
            >
              Start Your RFQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
