import { CheckCircle2 } from 'lucide-react';

function CourseDescription({ description, subheading, highlights }) {
  return (
    <div className="course-description">
      {description.map((paragraph) => (
        <p className="course-description__paragraph" key={paragraph}>
          {paragraph}
        </p>
      ))}
      {subheading ? (
        <h2 className="course-description__subheading">{subheading}</h2>
      ) : null}
      {highlights.length ? (
        <ul className="course-description__highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle2 aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default CourseDescription;
