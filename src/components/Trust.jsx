import { siteData } from '../data/siteData';
import { trustIcons } from './icons';
import SectionHeading from './SectionHeading';

export default function Trust() {
  const { trust } = siteData;

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="container-page">
        <SectionHeading title={trust.heading} />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.items.map((item) => {
            const Icon = trustIcons[item.icon];
            return (
              <div key={item.id} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 text-gold">
                  {Icon ? <Icon className="h-10 w-10" /> : null}
                </div>
                <h3 className="mt-5 font-display text-2xl text-navy">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
