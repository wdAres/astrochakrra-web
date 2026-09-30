import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import SectionHeading from './SectionHeading';

export default function Services() {
  const { services } = siteData;
  const { openBooking } = useBooking();

  return (
    <section id="services" className="bg-ivory py-20 md:py-24">
      <div className="container-page">
        <SectionHeading title={services.heading} eyebrow={services.eyebrow} />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-7 md:gap-5">
          {services.items.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => openBooking(item.bookingId)}
              className="group card-frame overflow-hidden text-left transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="h-28 overflow-hidden md:h-32">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-4">
                <h3 className="font-display text-lg leading-tight text-navy">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-muted">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
