import { useState } from "react";
import "./contact-form.css";

const CONTACT_EMAIL = "davidtriminio21@gmail.com";

export default function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Nuevo contacto desde el portafolio - ${name}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        "",
        "Mensaje:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitMessage("Se preparo tu mensaje en tu cliente de correo.");
    event.currentTarget.reset();
  };

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
              Completa el formulario. Todos los campos son obligatorios.
            </p>

            <div className="form-group">
              <label htmlFor="name">
                Nombre completo
              </label>

              <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-text"
                  placeholder="Tu nombre completo"
                  autoComplete="name"
                  maxLength={80}
                  minLength={3}
                  aria-describedby="name-help"
                  required
              />

              <p className="field-helper" id="name-help">
                Entre 3 y 80 caracteres.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Correo electronico
              </label>

              <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-text"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={120}
                  aria-describedby="email-help"
                  required
              />

              <p className="field-helper" id="email-help">
                Usa un correo valido de hasta 120 caracteres.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Mensaje
              </label>

              <textarea
                  id="message"
                  name="message"
                  className="field-text text-area-custom"
                  placeholder="¿En qué puedo ayudarte?"
                  rows={6}
                  minLength={20}
                  maxLength={500}
                  aria-describedby="message-help"
                  required
              />

              <p className="field-helper" id="message-help">
                Entre 20 y 500 caracteres.
              </p>
            </div>

            <button type="submit" className="contact-button">
              Enviar mensaje
            </button>

            {submitMessage ? (
              <p className="form-status" role="status" aria-live="polite">
                {submitMessage}
              </p>
            ) : null}
          </form>

          <div className="contact-info">
            <p className="contact-subtitle">
              Contacto
            </p>

            <h2 className="contact-title" id="contact-title">
              Trabajemos juntos
              <span> en tu equipo o proyecto.</span>
            </h2>

            <p className="contact-description">
              Estoy abierto a oportunidades laborales como desarrollador y
              tambien a colaboraciones freelance. Si buscas a alguien que pueda
              aportar en frontend, backend o en el desarrollo completo de una
              aplicacion web, sera un gusto conversar.
            </p>

            <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact-email-link"
                aria-label={`Enviar correo a ${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
  );
}
