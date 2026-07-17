import aboutImage from '../../assets/images/about.jpg';
import featureImage from '../../assets/images/feature.jpg';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import StatCard from '../../components/About/StatCard.jsx';
import PageLayout from '../../layouts/PageLayout.jsx';
import FeatureItem from './FeatureItem.jsx';
import FounderCard from './FounderCard.jsx';
import { aboutPageStats, features, founders } from './aboutPageData.js';
import './About.css';

function AboutPage() {
  return (
    <PageLayout title="About">
      <section className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="about-page__image-column col-lg-5 mb-5 mb-lg-0">
              <div className="position-relative h-100">
                <img
                  className="about-page__image position-absolute w-100 h-100"
                  src={aboutImage}
                  alt="Students learning at AB Studies"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <SectionHeading
                eyebrow="About Us"
                title="A trusted center for education and skill development."
                className="position-relative mb-4"
              />
              <p>
                {' '}
                Welcome to <strong> AB Studies </strong> where we believe
                education is the perfect blend of &quot;Intelligence Plus
                Character.&quot; We are a trusted destination dedicated to
                nurturing young minds through quality education, creative
                discovery, and holistic growth.
              </p>
              <div className="row pt-3 mx-0">
                {aboutPageStats.map((stat) => (
                  <StatCard key={`${stat.label}-${stat.detail}`} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5 bg-light">
        <div className="container py-5">
          <SectionHeading
            eyebrow="Our Founders"
            title="Meet the Vision Behind AB Studies"
            description="AB Studies was built with a dream to guide students through quality education, strong values, and a supportive environment that helps them reach their fullest potential."
            className="text-center mb-5"
            eyebrowClassName="about-founders__eyebrow text-secondary text-uppercase"
            descriptionClassName="about-founders__description mx-auto"
          />
          <div className="row">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <SectionHeading
                eyebrow="Why Choose Us?"
                title="Why You Should Start Learning with Us?"
                className="position-relative mb-4"
              />
              <p className="mb-4 pb-2">
                A trusted place for students to learn, grow, and build essential
                skills for a successful future.
              </p>
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  {...feature}
                  isLast={index === features.length - 1}
                />
              ))}
            </div>
            <div className="about-page__image-column col-lg-5">
              <div className="position-relative h-100">
                <img
                  className="about-page__image position-absolute w-100 h-100"
                  src={featureImage}
                  alt="Activity-based learning at AB Studies"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default AboutPage;
