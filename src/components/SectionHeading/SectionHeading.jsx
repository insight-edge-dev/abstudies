function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  eyebrowClassName = 'd-inline-block position-relative text-secondary text-uppercase pb-2',
  descriptionClassName = '',
}) {
  return (
    <div className={`section-title${className ? ` ${className}` : ''}`}>
      <h6 className={eyebrowClassName}>{eyebrow}</h6>
      <h1 className="display-4">{title}</h1>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
