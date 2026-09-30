export default function SectionHeading({ title, eyebrow, align = 'center', light = false }) {
  const alignment =
    align === 'left' ? 'text-left items-start' : align === 'right' ? 'text-right items-end' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignment}`}>
      <h2 className={`display text-4xl md:text-5xl ${light ? 'text-ivory' : 'text-navy'}`}>{title}</h2>
      {eyebrow ? <p className={`eyebrow mt-4 ${light ? 'text-gold-light' : ''}`}>{eyebrow}</p> : null}
    </div>
  );
}
