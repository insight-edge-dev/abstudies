import aboutImage from '../../assets/images/about.jpg';
import MotionSection from '../Motion/MotionSection.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import './About.css';

import aboutStats from './aboutStats.js';
import StatCard from './StatCard.jsx';

function About({
  eyebrow = 'About Us',
  title = 'A trusted center for education and skill development.',
  imageSrc = aboutImage,
  imageAlt = 'Students learning at AB Studies',
  stats = aboutStats,
}) {
  return (
    <MotionSection className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="about__image-column col-lg-5 mb-5 mb-lg-0">
            <div className="position-relative h-100">
              <img
                className="about__image position-absolute w-100 h-100"
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              className="position-relative mb-4"
            />
            <p className="content-copy">
              {' '}
              Dedicated to nurturing young minds, AB STUDIES offer a variety of
              educational and creative programs including abacus training,
              tuition classes for ICSE and CBSE students, drawing classes with
              course certification, and school project assistance. The centre
              also provides special classes tailored for toddlers, ensuring
              early development in a structured and engaging environment. With
              experienced instructors and a focus on holistic growth,
              <strong> AB Studies </strong>
              also provide Special Education to the Special Children.
            </p>
            <div className="row pt-3 mx-0">
              {stats.map((stat) => (
                <StatCard key={`${stat.label}-${stat.detail}`} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export default About;
