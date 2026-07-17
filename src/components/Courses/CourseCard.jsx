function CourseCard({ title, image, detailHref = 'detail.html' }) {
  return (
    <article className="courses-item position-relative">
      <img className="img-fluid" src={image} alt="" />
      <div className="courses-text">
        <h4 className="text-center text-white px-3">{title}</h4>
        <div className="border-top w-100 mt-3"></div>
        <div className="w-100 bg-white text-center p-4">
          <a className="btn btn-primary" href={detailHref}>
            Course Detail
          </a>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
