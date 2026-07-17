import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, LoaderCircle } from 'lucide-react';

import {
  createContactWhatsAppMessage,
  openWhatsApp,
} from '../../utils/whatsapp.js';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactForm(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!values.message.trim()) errors.message = 'Please enter your message.';

  return errors;
}

function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const submitTimerRef = useRef(null);
  const toastTimerRef = useRef(null);

  useEffect(
    () => () => {
      window.clearTimeout(submitTimerRef.current);
      window.clearTimeout(toastTimerRef.current);
    },
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: undefined,
      }));
    }
  };

  const showToast = (message) => {
    window.clearTimeout(toastTimerRef.current);
    setToastMessage(message);
    toastTimerRef.current = window.setTimeout(() => setToastMessage(''), 3500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const formErrors = validateContactForm(values);
    setErrors(formErrors);

    if (Object.keys(formErrors).length) return;

    const whatsappMessage = createContactWhatsAppMessage({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    });
    const whatsappTab = window.open('about:blank', '_blank');

    if (whatsappTab) whatsappTab.opener = null;

    setIsSubmitting(true);
    submitTimerRef.current = window.setTimeout(() => {
      openWhatsApp(whatsappMessage, whatsappTab);
      setIsSubmitting(false);
      showToast('WhatsApp opened with your message.');
    }, 450);
  };

  const fieldProps = (name) => ({
    name,
    value: values[name],
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    onChange: handleChange,
  });

  const renderError = (name) =>
    errors[name] ? (
      <p
        className="contact-form__error"
        id={`contact-${name}-error`}
        role="alert"
      >
        {errors[name]}
      </p>
    ) : null;

  return (
    <div className="contact-form">
      <form noValidate onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label className="contact-form__label" htmlFor="contact-name">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              className={`form-control border-top-0 border-right-0 border-left-0 p-0${errors.name ? ' is-invalid' : ''}`}
              placeholder="Your Name"
              autoComplete="name"
              {...fieldProps('name')}
            />
            {renderError('name')}
          </div>
          <div className="col-sm-6 form-group">
            <label className="contact-form__label" htmlFor="contact-email">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              className={`form-control border-top-0 border-right-0 border-left-0 p-0${errors.email ? ' is-invalid' : ''}`}
              placeholder="Your Email"
              autoComplete="email"
              {...fieldProps('email')}
            />
            {renderError('email')}
          </div>
        </div>
        <div className="form-group">
          <label className="contact-form__label" htmlFor="contact-subject">
            Subject
          </label>
          <input
            type="text"
            id="contact-subject"
            className={`form-control border-top-0 border-right-0 border-left-0 p-0${errors.subject ? ' is-invalid' : ''}`}
            placeholder="Subject"
            {...fieldProps('subject')}
          />
          {renderError('subject')}
        </div>
        <div className="form-group">
          <label className="contact-form__label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className={`form-control border-top-0 border-right-0 border-left-0 p-0${errors.message ? ' is-invalid' : ''}`}
            rows="5"
            placeholder="Message"
            {...fieldProps('message')}
          />
          {renderError('message')}
        </div>
        <div>
          <button
            className="contact-form__submit btn btn-primary py-3 px-5"
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle
                  className="contact-form__spinner"
                  aria-hidden="true"
                />
                Opening WhatsApp…
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
      {toastMessage ? (
        <div className="contact-toast" role="status" aria-live="polite">
          <CheckCircle2 aria-hidden="true" />
          <span>{toastMessage}</span>
        </div>
      ) : null}
    </div>
  );
}

export default ContactForm;
