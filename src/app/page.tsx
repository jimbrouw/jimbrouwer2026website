import projects from "../../projects.json";
import Image from "next/image";

export default function Home() {
  const heroProjects = projects.filter((p) => p.hero);

  return (
    <div className="min-h-screen">
      {/* Availability strip */}
      <div className="border-b border-muted/30 py-3 px-6">
        <p className="label text-center">
          Available from: June &apos;26 · Nottingham, UK · UK-wide + remote ·
          Quotes within 60 mins
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#" className="font-display font-black tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          JIM BROUWER
        </a>
        <div className="flex gap-8">
          {["Work", "Process", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="label hover:text-burnt transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl">
          <h1>I make the impossible idea technically real.</h1>
          <div className="flex flex-col justify-end">
            <p className="text-linen max-w-lg">
              I bridge the gap between half-formed vision and realised
              installation. 24 years of technical production in the UK arts
              sector — now working with artists, venues, and commercial clients
              who need someone who thinks as well as builds.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <div className="border-y border-muted/30 py-4 px-6 md:px-12">
        <p className="label text-center tracking-widest">
          Artist Technical Producer · AV Installation · AI Creative Pipelines ·
          Multichannel Audio · Immersive Experience
        </p>
      </div>

      {/* About */}
      <section id="about" className="px-6 md:px-12 py-24">
        <p className="label mb-4">About</p>
        <h2 className="mb-16">
          Jim Brouwer · Freelance · Nottingham
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl">
          <div className="space-y-6 text-linen text-sm leading-relaxed">
            <p>
              Most technical people can execute your idea. Jim can tell you
              whether it&apos;s the right idea — and then build it anyway.
            </p>
            <p>
              For 24 years he has worked at the intersection of art and
              technology, turning half-formed visions into things that exist in
              physical space. Sixteen of those years were spent as Head of AV/IT
              at Nottingham Contemporary, where he worked with artists including
              Jarvis Cocker, Zinzi Minott, Tai Shani, and Daniel Steegmann
              Mangrané.
            </p>
          </div>
          <div className="space-y-6 text-linen text-sm leading-relaxed">
            <p>
              He now works as an independent freelance consultant — brought in
              when the idea is ambitious, the technical brief is unclear, or the
              person you hired last time didn&apos;t quite get it.
            </p>
            <p>
              His practice spans multichannel audio, projection mapping,
              AI-generated video pipelines, GPS-triggered audio art, data
              sonification, and immersive installation. He is also one half of DJ
              Climate &amp; MC Change — a satirical electronic music project with
              performances at Sonar Barcelona, Shambhala, and Glade Festival.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 md:px-12 py-24 border-t border-muted/30">
        <p className="label mb-4">Selected Work</p>
        <h2 className="mb-16">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {heroProjects.map((project) => (
            <article key={project.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal mb-4">
                <Image
                  src={project.hero_image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <h3 className="text-paper text-lg font-display font-black">
                    {project.title}
                  </h3>
                </div>
              </div>
              {/* Metadata strip */}
              <div className="flex items-center gap-3 text-muted">
                <span className="label text-burnt">{project.number}</span>
                <span className="label">
                  {project.tags[0]?.replace("-", " ")}
                </span>
                <span className="label">{project.year}</span>
                {project.institution && (
                  <span className="label hidden sm:inline">
                    {project.institution}
                  </span>
                )}
              </div>
              <p className="text-linen text-sm mt-2 leading-relaxed">
                {project.short_description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 md:px-12 py-24 border-t border-muted/30">
        <p className="label mb-4">How I Work</p>
        <h2 className="mb-16">Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              num: "01",
              title: "Listen",
              text: "Before any spec, I need to understand what the work is actually trying to feel like. Most technical problems are creative problems in disguise.",
            },
            {
              num: "02",
              title: "Translate",
              text: "I turn half-formed ideas into feasible technical plans — formats, budgets, timelines, kit lists — without flattening the ambition.",
            },
            {
              num: "03",
              title: "Build",
              text: "On-site or remote: I manage the technical delivery from first cable run to final calibration, so you can stay in the work.",
            },
            {
              num: "04",
              title: "Document",
              text: "The scraps matter. I keep the BTS, the voice notes, the early sketches — because the process is part of the piece.",
            },
          ].map((step) => (
            <div key={step.num}>
              <span className="label text-burnt block mb-4">{step.num}</span>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-linen text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Institution strip */}
      <div className="border-y border-muted/30 py-6 px-6 md:px-12 overflow-hidden">
        <p className="label text-center tracking-widest leading-loose">
          Baltic · Liverpool Biennial · Nottingham Contemporary · National Trust
          · Site Gallery · Talbot Rice Gallery · BACKLIT · Primary · New Art
          Exchange · Bonington Gallery NTU · Bright Winter Nights · Vent Media ·
          Lindley Productions
        </p>
      </div>

      {/* Contact / Footer */}
      <footer id="contact" className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl">
          <div>
            <p className="label mb-4">Get in Touch</p>
            <h2 className="mb-8">Let&apos;s work together.</h2>
            <a
              href="mailto:info@jimbrouwer.co.uk?subject=Project%20Enquiry%20%E2%80%94%20Jim%20Brouwer&body=Hi%20Jim%2C%0A%0AI%27m%20interested%20in%20working%20together.%20Here%27s%20some%20info%3A%0A%0A-%20Project%20idea%20or%20brief%3A%0A%0A-%20Ideal%20timeline%3A%0A%0A-%20Budget%20range%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you."
              className="inline-block border border-burnt text-burnt px-8 py-3 label hover:bg-burnt hover:text-charcoal transition-all duration-300"
            >
              info@jimbrouwer.co.uk
            </a>
          </div>
          <div className="flex flex-col justify-end">
            <div className="space-y-3 text-sm">
              <p className="text-linen">
                Available from: June &apos;26
              </p>
              <p className="text-linen">
                Nottingham, UK · UK-wide + remote
              </p>
              <a
                href="https://climaterave.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label text-muted hover:text-burnt block"
              >
                climaterave.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-6 border-t border-muted/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="label text-muted">
            &copy; {new Date().getFullYear()} Jim Brouwer · T-Bone Productions
          </span>
          <span className="label text-muted">
            This site does not use cookies or tracking. No banner needed.
          </span>
        </div>
      </footer>
    </div>
  );
}
