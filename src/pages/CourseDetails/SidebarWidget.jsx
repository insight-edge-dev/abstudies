function SidebarWidget({ title, children, className = '' }) {
  return (
    <aside
      className={`course-sidebar bg-primary text-white${className ? ` ${className}` : ''}`}
      aria-labelledby="course-features-title"
    >
      <h3 className="mb-4" id="course-features-title">
        {title}
      </h3>
      {children}
    </aside>
  );
}

export default SidebarWidget;
