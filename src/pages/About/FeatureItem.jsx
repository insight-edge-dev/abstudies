function FeatureItem({ title, description, backgroundClass, icon, isLast }) {
  return (
    <div className={`d-flex${isLast ? '' : ' mb-3'}`}>
      <div className={`btn-icon ${backgroundClass} mr-4`}>
        <i className={icon} aria-hidden="true"></i>
      </div>
      <div className="mt-n1">
        <h4>{title}</h4>
        <p className={isLast ? 'm-0' : undefined}>{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
