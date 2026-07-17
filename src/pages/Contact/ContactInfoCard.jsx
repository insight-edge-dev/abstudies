function ContactInfoCard({
  title,
  value,
  icon,
  iconBackground,
  className = '',
}) {
  return (
    <div
      className={`d-flex align-items-center${className ? ` ${className}` : ''}`}
    >
      <div className={`btn-icon ${iconBackground} mr-4`}>
        <i className={icon} aria-hidden="true"></i>
      </div>
      <div className="mt-n1">
        <h4>{title}</h4>
        <p className="m-0">{value}</p>
      </div>
    </div>
  );
}

export default ContactInfoCard;
