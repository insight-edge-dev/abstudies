import './Hero.css';

function Hero({
  eyebrow = 'Your Gateway to Excellence!',
  title = 'A safe and joyful place for your lovely children',
  descriptionLead = 'Give your child the advantages of well-rounded education at',
  brandName = 'AB Studies',
  descriptionTail = 'We offer exceptional academics and engaging extracurricular activities to ensure their success and growth.',
  ctaHref = '#',
  ctaLabel = 'Enroll your kid',
  rating = '4.8 rating on Google',
}) {
  return (
    <section className="hero jumbotron jumbotron-fluid position-relative overlay-bottom">
      <div className="container text-center my-5 py-5">
        <h1 className="text-white mt-4 mb-4">{eyebrow}</h1>
        <h1 className="text-white display-1 mb-5">{title}</h1>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <p className="hero__description text-white">
              {descriptionLead} <strong>{brandName}</strong>. {descriptionTail}
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3">
              <a
                href={ctaHref}
                className="hero__cta btn btn-dark btn-lg mb-3 mb-md-0 mr-md-4"
              >
                {ctaLabel}
              </a>

              <div className="d-flex align-items-center">
                <span className="hero__stars" aria-hidden="true">
                  ★★★★★
                </span>
                <small className="text-white-50">{rating}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
