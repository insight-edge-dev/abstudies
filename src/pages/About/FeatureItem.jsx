function FeatureItem({ title, description, backgroundClass, Icon, isLast }) {
  return (
    <div className={`d-flex${isLast ? '' : ' mb-3'}`}>
      <div className={`btn-icon ${backgroundClass} mr-4`}>
        <Icon className="text-white" size={32} aria-hidden="true" />
      </div>
      <div className="mt-n1">
        <h3 className="h4">{title}</h3>
        <p className={isLast ? 'm-0' : undefined}>{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
