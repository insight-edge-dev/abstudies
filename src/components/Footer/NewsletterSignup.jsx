function NewsletterSignup() {
  return (
    <div className="col-md-6 mb-5">
      <h3 className="text-white mb-4">Newsletter</h3>
      <div className="w-100">
        <div className="input-group">
          <input
            type="text"
            className="footer__newsletter-input form-control border-light"
            placeholder="Your Email Address"
            aria-label="Your Email Address"
          />
          <div className="input-group-append">
            <button className="btn btn-primary px-4" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSignup;
