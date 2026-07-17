import { useEffect } from 'react';
import { Link, useParams } from 'react-router';

import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import PageLayout from '../../layouts/PageLayout.jsx';
import CourseDescription from './CourseDescription.jsx';
import { getCourseDetails, relatedCourses } from './courseDetailsData.js';
import CourseMeta from './CourseMeta.jsx';
import RelatedCourses from './RelatedCourses.jsx';
import SidebarWidget from './SidebarWidget.jsx';
import './CourseDetails.css';

function CourseDetailsPage() {
  const { slug } = useParams();
  const course = getCourseDetails(slug);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${course.title} | AB Studies`;

    return () => {
      document.title = previousTitle;
    };
  }, [course.title]);

  return (
    <div className="detail-page">
      <PageLayout
        title="Course Detail"
        showBreadcrumb={false}
        headerClassName="course-detail__header"
        mainClassName="container py-5"
      >
        <div className="row">
          <div className="col-lg-8">
            <SectionHeading
              eyebrow="Course Detail"
              title={course.title}
              className="mb-4"
              eyebrowClassName="text-secondary text-uppercase"
            />

            <img
              className="img-fluid rounded mb-4"
              src={course.image}
              alt={course.title}
            />

            <CourseDescription {...course} />
            <RelatedCourses courses={relatedCourses} />
          </div>

          <div className="col-lg-4">
            <SidebarWidget title="Course Features">
              <CourseMeta items={course.meta} />
              <h4 className="mt-4">
                Price: <span>{course.price}</span>
              </h4>
              <Link to="/contact" className="btn btn-light btn-block mt-3">
                Enroll Now
              </Link>
            </SidebarWidget>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}

export default CourseDetailsPage;
