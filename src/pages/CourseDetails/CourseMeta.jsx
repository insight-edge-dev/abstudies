import { BookOpen, CalendarDays, Clock3, Languages, Users } from 'lucide-react';

const metaIcons = {
  'Age Range': Users,
  'Monthly Lectures': CalendarDays,
  'Class Duration': Clock3,
  Language: Languages,
};

function CourseMeta({ items }) {
  return (
    <dl className="course-meta">
      {Object.entries(items).map(([label, value]) => {
        const Icon = metaIcons[label] ?? BookOpen;

        return (
          <div className="course-meta__item" key={label}>
            <Icon aria-hidden="true" />
            <div>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          </div>
        );
      })}
    </dl>
  );
}

export default CourseMeta;
