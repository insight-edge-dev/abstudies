function CourseDescription({
  description,
  subheading,
  highlights,
  numberedHighlights = false,
}) {
  return (
    <div className="mb-5">
      {description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {subheading ? <strong>{subheading}</strong> : null}
      {highlights.length ? (
        <div className={subheading ? 'mt-4' : ''}>
          {highlights.map((highlight, index) => (
            <div key={highlight}>
              {numberedHighlights ? `${index + 1}. ` : '• '}
              {highlight}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CourseDescription;
