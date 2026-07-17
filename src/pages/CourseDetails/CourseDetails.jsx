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
          <div className="course-detail__content col-lg-8">
            <SectionHeading
              eyebrow="Course Detail"
              title={course.title}
              className="mb-4"
              eyebrowClassName="text-secondary text-uppercase"
            />

            <img
              className="course-detail__image img-fluid"
              src={course.image}
              alt={course.title}
              decoding="async"
              fetchPriority="high"
            />

            <CourseDescription {...course} />
            <RelatedCourses courses={relatedCourses} />
          </div>

          <div className="course-detail__sidebar-column col-lg-4">
            <SidebarWidget title="Course Features">
              <CourseMeta items={course.meta} />
              <div className="course-price">
                <span className="course-price__label">Price</span>
                <strong>{course.price}</strong>
              </div>
              <Link to="/contact" className="btn btn-light btn-block">
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
