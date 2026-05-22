import { useState } from "react";
import "./contact-form.css";
import { useLanguage } from "../../context/language-context.jsx";

const CONTACT_EMAIL = "davidtriminio21@gmail.com";
const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 80;
const EMAIL_MAX_LENGTH = 120;
const MESSAGE_MIN_LENGTH = 20;
const MESSAGE_MAX_LENGTH = 500;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_MAX_LENGTHS = {
  name: NAME_MAX_LENGTH,
  email: EMAIL_MAX_LENGTH,
  message: MESSAGE_MAX_LENGTH,
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitMessage, setSubmitMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const maxLength = FIELD_MAX_LENGTHS[name];
    const nextValue = typeof maxLength === "number" ? value.slice(0, maxLength) : value;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: nextValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`${t.contact.emailSubjectPrefix} ${name}`);
    const body = encodeURIComponent(
      [
        `${t.contact.emailBodyName}: ${name}`,
        `${t.contact.emailBodyEmail}: ${email}`,
        "",
        `${t.contact.emailBodyMessage}:`,
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitMessage(t.contact.submitSuccess);
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
    event.currentTarget.reset();
  };

  const messageLength = formValues.message.trim().length;
  const nameLength = formValues.name.trim().length;
  const emailLength = formValues.email.trim().length;
  const isNameValid = nameLength >= NAME_MIN_LENGTH;
  const isEmailValid = EMAIL_REGEX.test(formValues.email.trim());
  const isMessageValid = messageLength >= MESSAGE_MIN_LENGTH;

  return (
      <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
      >
        <div className="contact-content">
          <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-describedby="contact-form-help"
          >
            <p className="form-helper" id="contact-form-help">
              {t.contact.formHelper}
            </p>

            <div className="form-group">
              <div className="field-head">
                <label htmlFor="name">
                  {t.contact.nameLabel}
                </label>

                <span
                    className={`field-counter ${isNameValid ? "is-valid" : "is-invalid"}`}
                    aria-live="polite"
                >
                  {formValues.name.length}/{NAME_MAX_LENGTH}
                </span>
              </div>

              <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-text"
                  placeholder={t.contact.namePlaceholder}
                  autoComplete="name"
                  maxLength={NAME_MAX_LENGTH}
                  minLength={NAME_MIN_LENGTH}
                  value={formValues.name}
                  onChange={handleChange}
                  aria-describedby="name-help"
                  required
              />

              <p className="field-helper" id="name-help">
                {t.contact.nameHelper}
              </p>
            </div>

            <div className="form-group">
              <div className="field-head">
                <label htmlFor="email">
                  {t.contact.emailLabel}
                </label>

                <span
                    className={`field-counter ${isEmailValid ? "is-valid" : "is-invalid"}`}
                    aria-live="polite"
                >
                  {formValues.email.length}/{EMAIL_MAX_LENGTH}
                </span>
              </div>

              <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-text"
                  placeholder={t.contact.emailPlaceholder}
                  autoComplete="email"
                  inputMode="email"
                  maxLength={EMAIL_MAX_LENGTH}
                  value={formValues.email}
                  onChange={handleChange}
                  aria-describedby="email-help"
                  required
              />

              <p className="field-helper" id="email-help">
                {t.contact.emailHelper}
              </p>
            </div>

            <div className="form-group">
              <div className="field-head">
                <label htmlFor="message">
                  {t.contact.messageLabel}
                </label>

                <span
                    className={`field-counter ${isMessageValid ? "is-valid" : "is-invalid"}`}
                    aria-live="polite"
                >
                  {messageLength}/{MESSAGE_MAX_LENGTH}
                </span>
              </div>

              <textarea
                  id="message"
                  name="message"
                  className="field-text text-area-custom"
                  placeholder={t.contact.messagePlaceholder}
                  rows={6}
                  minLength={MESSAGE_MIN_LENGTH}
                  maxLength={MESSAGE_MAX_LENGTH}
                  value={formValues.message}
                  onChange={handleChange}
                  aria-describedby="message-help"
                  required
              />

              <p className="field-helper" id="message-help">
                {t.contact.messageHelper}
              </p>
            </div>

            <button type="submit" className="contact-button">
              {t.contact.submit}
            </button>

            {submitMessage ? (
              <p className="form-status" role="status" aria-live="polite">
                {submitMessage}
              </p>
            ) : null}
          </form>

          <div className="contact-info">
            <p className="contact-subtitle">
              {t.contact.subtitle}
            </p>

            <h2 className="contact-title" id="contact-title">
              {t.contact.titleLead}
              <span>{t.contact.titleTail}</span>
            </h2>

            <p className="contact-description">
              {t.contact.description}
            </p>

            <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact-email-link"
                aria-label={`${t.contact.emailAriaLabel} ${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
  );
}
