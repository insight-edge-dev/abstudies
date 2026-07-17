import CourseCard from '../../components/Courses/CourseCard.jsx';
import MotionSection from '../../components/Motion/MotionSection.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import PageLayout from '../../layouts/PageLayout.jsx';
import coursePageItems from './coursePageData.js';

function CoursesPage() {
  return (
    <PageLayout title="Services">
      <MotionSection className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <SectionHeading
                eyebrow="Our Services"
                title="Checkout Our Services"
                className="text-center position-relative mb-5"
              />
            </div>
          </div>

          <div className="row">
            {coursePageItems.map((course) => (
              <div className="col-lg-4 col-md-6 pb-4" key={course.title}>
                <CourseCard {...course} variant="list" />
              </div>
            ))}

            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a
                      className="page-link rounded-0"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link rounded-0"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </MotionSection>
    </PageLayout>
  );
}

export default CoursesPage;
