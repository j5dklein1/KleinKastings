import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactPage = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const inputClass =
    'w-full bg-industrial-50 border border-gray-200 rounded-sm px-4 py-3 text-industrial-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors';
  const labelClass = 'block text-sm font-semibold text-industrial-700 mb-1 uppercase tracking-wide';

  return (
    <div className="bg-industrial-50 pt-20 min-h-screen">
      <Helmet>
        <title>Contact Klein Kastings | Request a Quote</title>
        <meta name="description" content="Contact Klein Kastings in Conklin, Michigan for aluminum casting, shell process, permanent mold casting, machining, and finishing quotes." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      {/* Header */}
      <div className="bg-industrial-900 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading text-white">Contact Us</h1>
          <p className="text-gray-400 mt-4 text-lg">Let's talk about your next project.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">

          {/* Left Column — Contact Info + Map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h2 className="text-2xl font-heading text-industrial-900 mb-6 border-b-2 border-accent pb-2 inline-block">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-industrial-100 p-3 rounded-full mr-4 shrink-0">
                    <MapPin className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-industrial-800 mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm">275 Roosevelt St.<br />Conklin, MI 49403</p>
                    <a
                      href="https://maps.google.com/?q=275+Roosevelt+St,+Conklin,+MI+49403"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-xs mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-industrial-100 p-3 rounded-full mr-4 shrink-0">
                    <Phone className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-industrial-800 mb-1">Call Us</h3>
                    <a href="tel:6168908901" className="text-lg font-bold text-industrial-900 hover:text-accent transition-colors">
                      (616) 890-8901
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-industrial-100 p-3 rounded-full mr-4 shrink-0">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-industrial-800 mb-1">Email Us</h3>
                    <a href="mailto:jason@kleinkastings.com" className="text-sm font-medium text-industrial-900 hover:text-accent transition-colors break-all">
                      jason@kleinkastings.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-industrial-100 p-3 rounded-full mr-4 shrink-0">
                    <Clock className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-industrial-800 mb-1">Hours</h3>
                    <p className="text-gray-600 text-sm">Mon – Fri: 8:00 AM – 5:00 PM<br />Sat – Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1 min-h-[260px] bg-gray-200 rounded-sm overflow-hidden shadow-lg border-2 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.767545464539!2d-85.87905468452033!3d43.14157897914197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881907d471555555%3A0x1234567890abcdef!2s275%20Roosevelt%20St%2C%20Conklin%2C%20MI%2049403!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klein Kastings Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-lg h-full">
              <h2 className="text-2xl font-heading text-industrial-900 mb-2 border-b-2 border-accent pb-2 inline-block">Request a Quote</h2>
              <p className="text-gray-500 text-sm mb-8 mt-2">Fill out the form below and we'll get back to you within one business day.</p>

              <form action="/thank-you.html" noValidate name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden"><input name="bot-field" /></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name <span className="text-accent">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Manufacturing"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email <span className="text-accent">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="service" className={labelClass}>Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      <option value="design">3D Design & Prototyping</option>
                      <option value="shell">Shell Core & Mold Casting</option>
                      <option value="permanent">Permanent Mold Casting</option>
                      <option value="cnc">CNC Machining</option>
                      <option value="finishing">Polishing & Finishing</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="mb-7">
                    <label htmlFor="message" className={labelClass}>Project Details <span className="text-accent">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your part, quantity, material requirements, timeline, or any other details..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-heading text-lg tracking-wide py-4 px-8 rounded-sm transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    Or reach us directly at <a href="tel:6168908901" className="text-accent hover:underline">(616) 890-8901</a>
                  </p>
                </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
