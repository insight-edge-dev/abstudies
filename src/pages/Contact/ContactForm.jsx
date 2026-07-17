function ContactForm() {
  const preventSubmission = (event) => event.preventDefault();

  return (
    <div className="contact-form">
      <form onSubmit={preventSubmission}>
        <div className="row">
          <div className="col-6 form-group">
            <label className="sr-only" htmlFor="contact-name">
              Your Name
            </label>
            <input
              type="text"
              id="contact-name"
              className="form-control border-top-0 border-right-0 border-left-0 p-0"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-6 form-group">
            <label className="sr-only" htmlFor="contact-email">
              Your Email
            </label>
            <input
              type="email"
              id="contact-email"
              className="form-control border-top-0 border-right-0 border-left-0 p-0"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="contact-subject">
            Subject
          </label>
          <input
            type="text"
            id="contact-subject"
            className="form-control border-top-0 border-right-0 border-left-0 p-0"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className="form-control border-top-0 border-right-0 border-left-0 p-0"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary py-3 px-5" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
