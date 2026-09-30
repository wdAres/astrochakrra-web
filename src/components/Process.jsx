import { siteData } from '../data/siteData';
import { processIcons } from './icons';
import SectionHeading from './SectionHeading';

export default function Process() {
  const { process } = siteData;

  return (
    <section id="process" className="bg-cream py-20 md:py-24">
      <div className="container-page">
        <SectionHeading title={process.heading} eyebrow={process.eyebrow} />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => {
            const Icon = processIcons[step.icon];
            return (
              <div key={step.id} className="relative text-center">
                {index < process.steps.length - 1 ? (
                  <span className="pointer-events-none absolute left-[62%] top-7 hidden h-px w-[76%] bg-gradient-to-r from-gold/70 to-transparent lg:block" />
                ) : null}
                <p className="font-display text-3xl text-gold">{step.number}</p>
                <div className="mx-auto mt-3 flex h-12 w-12 items-center justify-center text-navy">
                  {Icon ? <Icon className="h-11 w-11" /> : null}
                </div>
                <h3 className="mt-4 font-display text-2xl text-navy">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-muted">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
