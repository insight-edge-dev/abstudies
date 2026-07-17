function TeacherCard({ name, qualification, image, socials = [] }) {
  return (
    <article className="team-item">
      <img className="img-fluid w-100" src={image} alt={name} />
      <div className="bg-light text-center p-4">
        <h5 className="mb-3">{name}</h5>
        <p className="mb-2">{qualification}</p>
        {socials.length ? (
          <div className="d-flex justify-content-center">
            {socials.map(({ label, icon, href }) => (
              <a
                className="mx-1 p-1"
                href={href}
                aria-label={`${name} on ${label}`}
                key={label}
              >
                <i className={icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default TeacherCard;
