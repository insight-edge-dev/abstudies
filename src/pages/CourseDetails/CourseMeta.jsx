function CourseMeta({ items }) {
  return Object.entries(items).map(([label, value]) => (
    <p key={label}>
      <strong>{label}:</strong> <span>{value}</span>
    </p>
  ));
}

export default CourseMeta;
