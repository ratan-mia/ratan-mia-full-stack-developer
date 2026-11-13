import Image from 'next/image';

// "About the project" block. Props unchanged; bgColor is accepted but the
// new design uses a single paper background for reading comfort.
export default function CaseStudyAbout({ title = 'About the project', paragraphs = [], image, imageAlt = 'Project overview', id = 'overview' }) {
  return (
    <section id={id} className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">Overview</p>
      <h2 data-reveal className="mt-4 max-w-4xl font-display text-[clamp(34px,4.5vw,64px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
        {title}
      </h2>
      <div className="mt-10 max-w-3xl space-y-6">
        {paragraphs.map((p, i) => (
          <p key={i} data-reveal className={i === 0 ? 'text-xl leading-relaxed text-ink sm:text-2xl' : 'text-lg leading-relaxed text-ink/70'}>
            {p}
          </p>
        ))}
      </div>
      {image && (
        <div data-reveal="scale" className="relative mt-14 aspect-video overflow-hidden rounded-3xl border border-ink/10 bg-white">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-contain" />
        </div>
      )}
    </section>
  );
}
