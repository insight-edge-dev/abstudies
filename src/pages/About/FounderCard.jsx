function FounderCard({ name, role, description, image, accentClass }) {
  return (
    <div className="col-lg-6 mb-4">
      <article
        className={`about-founder-card ${accentClass} d-flex align-items-center bg-white p-4 shadow-sm rounded`}
      >
        <img
          src={image}
          className="about-founder-card__image rounded-circle mr-4"
          alt={name}
        />
        <div>
          <h4 className="mb-1">{name}</h4>
          <h6 className="text-muted mb-2">{role}</h6>
          <p className="mb-0">{description}</p>
        </div>
      </article>
    </div>
  );
}

export default FounderCard;
