import { Collapse } from 'antd';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';

function PlusMinus({ isActive }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center border border-gold/40 text-gold">
      {isActive ? '–' : '+'}
    </span>
  );
}

export default function FAQ() {
  const { faqs } = siteData;
  const midpoint = Math.ceil(faqs.items.length / 2);
  const columns = [faqs.items.slice(0, midpoint), faqs.items.slice(midpoint)];

  return (
    <section id="faq" className="bg-cream py-20 md:py-24">
      <div className="container-page">
        <SectionHeading title={faqs.heading} />
        <div className="mt-12 grid gap-x-16 gap-y-4 md:grid-cols-2">
          {columns.map((col, colIndex) => (
            <Collapse
              key={colIndex}
              accordion
              bordered={false}
              expandIconPosition="end"
              expandIcon={({ isActive }) => <PlusMinus isActive={isActive} />}
              items={col.map((item) => ({
                key: item.id,
                label: item.question,
                children: <p className="pb-2 text-sm leading-7 text-muted">{item.answer}</p>,
              }))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
