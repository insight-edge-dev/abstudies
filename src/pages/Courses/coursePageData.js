import courses from '../../components/Courses/courseData.js';

const coursePageItems = courses.slice(0, 6).map((course) => ({
  ...course,
  detailHref: `/courses/${course.slug}`,
}));

export default coursePageItems;
