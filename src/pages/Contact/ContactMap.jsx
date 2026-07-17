function ContactMap({ src }) {
  return (
    <section
      className="container-fluid px-0"
      aria-label="Our location on Google Maps"
    >
      <iframe
        className="contact-map"
        src={src}
        title="AB Studies location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default ContactMap;
