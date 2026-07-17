function TeacherCard({ name, qualification, image }) {
  return (
    <article className="team-item">
      <img className="img-fluid w-100" src={image} alt="" />
      <div className="bg-light text-center p-4">
        <h5 className="mb-3">{name}</h5>
        <p className="mb-2">{qualification}</p>
      </div>
    </article>
  );
}

export default TeacherCard;
