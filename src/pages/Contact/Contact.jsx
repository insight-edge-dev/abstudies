import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import MotionSection from '../../components/Motion/MotionSection.jsx';
import PageLayout from '../../layouts/PageLayout.jsx';
import './Contact.css';
import ContactForm from './ContactForm.jsx';
import ContactInfoCard from './ContactInfoCard.jsx';
import ContactMap from './ContactMap.jsx';
import contactItems, { mapEmbedUrl } from './contactData.js';

function ContactPage() {
  return (
    <PageLayout title="Contact">
      <MotionSection className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="contact-info-panel bg-light d-flex flex-column justify-content-center px-5">
                {contactItems.map((item, index) => (
                  <ContactInfoCard
                    {...item}
                    className={index < contactItems.length - 1 ? 'mb-5' : ''}
                    key={item.title}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <SectionHeading
                eyebrow="Need Help?"
                title="Send Us A Message"
                className="position-relative mb-4"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </MotionSection>

      <ContactMap src={mapEmbedUrl} />
    </PageLayout>
  );
}

export default ContactPage;
