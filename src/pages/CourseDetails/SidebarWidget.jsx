function SidebarWidget({ title, children, className = '' }) {
  return (
    <aside
      className={`bg-primary text-white p-4 rounded${className ? ` ${className}` : ''}`}
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
