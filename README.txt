Your website scaffold will be manually inserted here. Replace this with your code.
/*
Personal Brand Website (Single-file React + Tailwind)

How to use:
1. Paste this file into a new Create React App / Vite / Next.js project.
2. Install Tailwind CSS and set up its config (this file uses Tailwind utility classes).
3. Replace placeholder text, images, and URLs with your real content.
4. For production, migrate to Next.js for SSR and SEO, and connect to a CMS (recommended below).

What's included in this scaffold:
- Home (Hero, Tagline, Featured Blogs, Newsletter CTA, Testimonials)
- Blog listing and categories
- About Me
- Services
- Resources
- Case Studies (before/after metrics layout)
- Newsletter subscribe / lead magnet
- Book Consultation (Calendly integration)
- Contact form
- Glossary / FAQ / Comparison pages
- SEO-ready meta tags and structured data placeholders
- Responsive, minimal color palette and typography using Tailwind

CMS & Deployment recommendations (see bottom of file comments):
- CMS: Sanity, Contentful, Strapi, or WordPress (headless) for easy long-form publishing
- Deploy: Vercel or Netlify
- Analytics: Plausible or Google Analytics + server-side tracking for leads
- Forms: Netlify Forms, Formspree, or serverless function (recommended for GDPR)

--------------------------------------------------------------------
onLanguage:typescriptreact
*/

import React, { useState } from 'react';

// Example data (replace with CMS-driven data)
const featuredBlogs = [
  { id: 1, title: 'Demand Gen Playbook for 2025', excerpt: 'A practical 6-step framework to scale pipeline faster.', time: '8 min read' },
  { id: 2, title: 'LinkedIn Content That Converts', excerpt: 'How to structure posts that generate leads and conversations.', time: '6 min read' },
  { id: 3, title: 'ABM on a Budget', excerpt: 'Targeted campaigns that don\'t break the bank.', time: '7 min read' }
];

const testimonials = [
  { name: 'Aisha Khan', title: 'CMO - FinGrowth', text: 'Mrunal transformed our pipeline — 3x MQL velocity in 90 days.' },
  { name: 'Rohan Verma', title: 'Head of Marketing - SaaSCo', text: 'Clear frameworks, instant impact. The ABM playbook alone paid for itself.' }
];

const servicesList = [
  '1:1 Consulting',
  'Content Strategy & Execution',
  'LinkedIn Growth & Thought Leadership',
  'Marketing Playbooks (Demand Gen, ABM, Product Launches)',
  'Workshops & Training',
  'Fractional Marketing Leadership'
];

export default function PersonalBrandSite() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    // Hook this to your email provider (ConvertKit, MailerLite, HubSpot) or use a serverless endpoint.
    setSubscribed(true);
  }

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <header className="sticky top-0 bg-white/95 backdrop-blur z-40 border-b">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">Mrunal — B2B Marketing</a>
          <div className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#case-studies" className="hover:underline">Case Studies</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#resources" className="hover:underline">Resources</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="btn-outline px-4 py-2 rounded">Contact</a>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">B2B Growth & Demand Gen</p>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">I help B2B companies scale predictable pipeline with modern marketing systems.</h1>
              <p className="mt-6 text-gray-600 max-w-xl">Strategy-first marketing: ABM, Demand Gen, and LinkedIn-led thought leadership that moves deals and builds reputation.</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#book" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium">Book a Consultation</a>
                <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border text-sm">Services & Pricing</a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="bg-gray-50 border rounded p-4">
                  <p className="text-xs text-gray-500">Featured result</p>
                  <p className="text-sm font-medium mt-1">3x MQL velocity for FinGrowth in 90 days</p>
                </div>
                <div className="text-sm text-gray-500">Trusted by early-stage and growth-stage SaaS teams.</div>
              </div>

            </div>

            <div>
              <div className="bg-gray-50 border rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Featured Blogs</h3>
                <ul className="mt-4 space-y-4">
                  {featuredBlogs.map(b => (
                    <li key={b.id} className="p-3 rounded hover:bg-white/50 transition">
                      <a href={`#blog-${b.id}`} className="block">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{b.title}</h4>
                            <p className="text-sm text-gray-500">{b.excerpt}</p>
                          </div>
                          <div className="text-xs text-gray-400">{b.time}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                <form onSubmit={handleSubscribe} className="mt-6">
                  <label className="text-xs text-gray-600">Get the free B2B Marketing Playbook</label>
                  <div className="mt-2 flex gap-2">
                    <input aria-label="email" required value={email} onChange={e => setEmail(e.target.value)} className="flex-1 px-3 py-2 border rounded" placeholder="you@company.com" />
                    <button className="px-4 py-2 rounded bg-gray-900 text-white text-sm">Get it</button>
                  </div>
                  {subscribed && <p className="text-sm text-green-600 mt-2">Thanks — check your inbox for the playbook.</p>}
                </form>
              </div>

              <div className="mt-6">
                <h4 className="text-sm text-gray-500">What clients say</h4>
                <div className="mt-3 space-y-3">
                  {testimonials.map((t, i) => (
                    <blockquote key={i} className="p-3 border rounded bg-white">
                      <p className="text-sm">"{t.text}"</p>
                      <p className="mt-2 text-xs text-gray-500">— {t.name}, <span className="italic">{t.title}</span></p>
                    </blockquote>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="text-gray-600 mt-2">Practical services tailored for B2B growth teams and founders.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((s, idx) => (
              <div key={idx} className="p-6 border rounded-lg">
                <h3 className="font-semibold">{s}</h3>
                <p className="mt-2 text-sm text-gray-500">Short description about {s}. Include deliverables, timelines, and outcomes.</p>
                <a href="#book" className="mt-4 inline-block text-sm underline">Book a discovery</a>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="max-w-6xl mx-auto px-6 py-14 bg-white">
          <h2 className="text-2xl font-semibold">Case Studies</h2>
          <p className="text-gray-600 mt-2">Real results. Clear before → after metrics.</p>

          <div className="mt-6 space-y-6">
            <CaseStudy title="FinGrowth — Demand Gen" before={{ mql: 40, conv: '2%' }} after={{ mql: 120, conv: '3.5%' }} duration="90 days" />
            <CaseStudy title="SaaSCo — LinkedIn Program" before={{ leads: 5, meetings: 2 }} after={{ leads: 45, meetings: 18 }} duration="60 days" />
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Blog</h2>
              <p className="text-gray-600 mt-1">Categories: Demand Generation, Content Marketing, ABM, LinkedIn Marketing, Paid Ads, Product Marketing, Analytics, Tools, Case Studies</p>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* Blog cards (CMS-driven in production) */}
            {featuredBlogs.map(b => (
              <article key={b.id} className="border rounded-lg p-4">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{b.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a className="text-sm underline" href={`#blog-${b.id}`}>Read</a>
                  <span className="text-xs text-gray-400">{b.time}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a href="/blog" className="text-sm underline">View all posts</a>
          </div>
        </section>

        {/* RESOURCES */}
        <section id="resources" className="max-w-6xl mx-auto px-6 py-14 bg-gray-50">
          <h2 className="text-2xl font-semibold">Resources</h2>
          <p className="text-gray-600 mt-1">E-books, guides, templates, frameworks, playbooks, and swipe files to speed up your marketing.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard title="B2B Playbook (Free)" note="Lead magnet" />
            <ResourceCard title="ABM Template" note="Editable Google Doc" />
            <ResourceCard title="LinkedIn Swipe File" note="20 high-converting post frameworks" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="text-gray-600 mt-2">I\'m Mrunal — a B2B marketing strategist helping SaaS and fintech companies build repeatable demand engines. I blend data, storytelling, and product-led thinking to design campaigns that convert.</p>

              <h3 className="mt-6 font-semibold">Background & expertise</h3>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                <li>10+ years in B2B marketing and GTM strategy</li>
                <li>Built and led GTM for growth-stage SaaS</li>
                <li>Specialties: ABM, Demand Gen, LinkedIn, Content-led growth</li>
              </ul>

              <h3 className="mt-6 font-semibold">Achievements</h3>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                <li>Scaled pipeline 3x for a fintech client in 90 days</li>
                <li>Published playbooks used by 200+ marketing teams</li>
                <li>Hosted webinars and workshops for major communities</li>
              </ul>
            </div>
            <div>
              <div className="border rounded-lg p-4 sticky top-24">
                <div className="h-40 w-full bg-gray-200 rounded mb-4 flex items-center justify-center">Photo</div>
                <p className="text-sm text-gray-600">Available for consulting, fractional leadership, and workshops.</p>
                <a href="#book" className="mt-4 inline-block text-sm bg-gray-900 text-white px-4 py-2 rounded">Book a Call</a>
              </div>
            </div>
          </div>
        </section>

        {/* GLOSSARY + FAQ + COMPARISONS */}
        <section id="extras" className="max-w-6xl mx-auto px-6 py-14 bg-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold">Glossary (SEO)</h3>
              <p className="text-sm text-gray-600 mt-2">Short definitions for important B2B marketing terms (optimize as separate pages for search).</p>
            </div>
            <div>
              <h3 className="font-semibold">FAQ</h3>
              <p className="text-sm text-gray-600 mt-2">Answers to common questions (pricing, timelines, outcomes).</p>
            </div>
            <div>
              <h3 className="font-semibold">Comparisons</h3>
              <p className="text-sm text-gray-600 mt-2">HubSpot vs Marketo, LinkedIn Ads vs Google Ads for B2B, etc. Use comparison tables for search intent.</p>
            </div>
          </div>
        </section>

        {/* BOOK / CALENDLY */}
        <section id="book" className="max-w-6xl mx-auto px-6 py-14 bg-gray-50">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Book a Consultation</h2>
              <p className="text-gray-600 mt-2">Choose a time for a 30–60 minute strategy call.</p>
              <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
                <li>Initial discovery & 1:1 consulting</li>
                <li>Custom marketing playbooks</li>
                <li>Fractional marketing support</li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0 w-full md:w-1/2">
              {/* Calendly embed (replace data-url with your Calendly scheduling link) */}
              <div className="border rounded-lg overflow-hidden">
                <iframe title="Calendly" src="https://calendly.com/your-username/30min" className="w-full h-96" />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-600 mt-2">Email me at <a href="mailto:hello@example.com" className="underline">hello@example.com</a> or use the form below.</p>

          <form className="mt-6 grid md:grid-cols-2 gap-6" onSubmit={(e)=>{e.preventDefault(); alert('Form submitted - wire up backend!')}}>
            <input required placeholder="Your name" className="px-4 py-2 border rounded" />
            <input required placeholder="Your email" className="px-4 py-2 border rounded" />
            <input placeholder="Company" className="px-4 py-2 border rounded md:col-span-2" />
            <textarea required placeholder="Message" className="px-4 py-2 border rounded md:col-span-2 h-28" value={message} onChange={e=>setMessage(e.target.value)} />
            <button className="px-4 py-2 bg-gray-900 text-white rounded md:col-span-2">Send message</button>
          </form>

          <div className="mt-8 flex gap-4">
            <a href="#" aria-label="LinkedIn" className="text-sm underline">LinkedIn</a>
            <a href="#" aria-label="Twitter" className="text-sm underline">X</a>
            <a href="#" aria-label="YouTube" className="text-sm underline">YouTube</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t mt-8">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <div className="font-semibold">Mrunal — B2B Marketing</div>
              <div className="text-sm text-gray-500 mt-2">Strategy, content, and growth for B2B brands. Available for consulting & fractional leadership.</div>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} Mrunal. All rights reserved.</div>
          </div>
        </footer>
      </main>

    </div>
  );
}

/* ----------------- Small UI components ----------------- */
function MobileMenu(){
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={()=>setOpen(!open)} className="px-3 py-2 border rounded">Menu</button>
      {open && (
        <div className="absolute right-4 mt-2 bg-white border rounded p-4 w-48">
          <a href="#services" className="block py-1">Services</a>
          <a href="#case-studies" className="block py-1">Case Studies</a>
          <a href="#blog" className="block py-1">Blog</a>
          <a href="#about" className="block py-1">About</a>
          <a href="#contact" className="block py-1">Contact</a>
        </div>
      )}
    </div>
  );
}

function CaseStudy({title, before, after, duration}){
  return (
    <div className="border rounded-lg p-6 grid md:grid-cols-3 gap-4 items-center">
      <div className="md:col-span-2">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">Duration: {duration}</p>
        <div className="mt-3 text-sm grid grid-cols-2 gap-2">
          <div>
            <div className="text-xs text-gray-400">Before</div>
            <pre className="text-sm">{JSON.stringify(before, null, 0)}</pre>
          </div>
          <div>
            <div className="text-xs text-gray-400">After</div>
            <pre className="text-sm">{JSON.stringify(after, null, 0)}</pre>
          </div>
        </div>
      </div>
      <div className="text-right">
        <a href="#case-study-details" className="text-sm underline">Read case study</a>
      </div>
    </div>
  );
}

function ResourceCard({title, note}){
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{note}</p>
      <div className="mt-4 flex gap-2">
        <a className="text-sm underline">Download</a>
        <a className="text-sm underline">Preview</a>
      </div>
    </div>
  );
}

function SearchBar(){
  return (
    <div className="flex items-center border rounded overflow-hidden">
      <input className="px-3 py-2 text-sm" placeholder="Search posts, topics, terms" />
      <button className="px-3 py-2 text-sm border-l">Search</button>
    </div>
  );
}

/* ----------------- SEO & CMS notes (paste into project README) -----------------

SEO:
- Use Next.js with getStaticProps / getStaticPaths for blog pages.
- Generate an XML sitemap and open graph images for social sharing.
- Create dedicated /glossary/<term> pages for high-intent SEO.
- Use JSON-LD for Organization and Person schema.

CMS:
- Sanity: best for structured content, image CDN, and real-time editing.
- Contentful: enterprise-ready, good editor experience.
- Strapi: open-source, self-hosted option.
- WordPress (headless): easy for non-technical editors; pair with WPGraphQL.

Forms & Lead Capture:
- Connect newsletter form to ConvertKit / MailerLite / HubSpot.
- Use serverless functions to validate and store leads (Vercel Functions / Netlify Functions).

Analytics & Tracking:
- Use Plausible for privacy-friendly analytics or GA4 for enterprise tracking.
- Track conversions (lead magnet downloads, consultation bookings) server-side.

Performance & Accessibility:
- Optimize images with an image CDN (Vercel Image, Cloudinary).
- Serve critical CSS inline and defer heavy scripts.
- Ensure 3rd-party embeds (Calendly) are lazy-loaded.

Design tokens (sample minimal palette):
- Primary: #0F172A (near-black) for CTAs
- Accent: #0EA5A4 (teal) for highlights
- Neutral: #F8FAFC (very light) backgrounds
- Text: #111827 (dark gray)
- Use Inter or 'Work Sans' for modern, readable typography.

Accessibility:
- Provide visible focus states for interactive elements.
- Ensure 4.5:1 contrast for body text vs background.

Deployment checklist:
- Use HTTPS, HSTS, Brotli/Gzip compression.
- Add robots.txt and sitemap.xml.
- Configure environment variables for CMS and APIs.

---------------------------------------------------------------------
*/


