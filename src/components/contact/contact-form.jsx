import "./contact-form.css";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Aquí luego puedes conectar EmailJS, Formspree, Netlify Forms
      o tu propio backend para enviar el mensaje.
    */
  };

  return (
      <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
      >
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Nombre
              </label>

              <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-text"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-text"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
              />
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
                  maxLength={500}
                  required
              />
            </div>

            <button type="submit" className="contact-button">
              Enviar mensaje
            </button>
          </form>

          <div className="contact-info">
            <p className="contact-subtitle">
              Contacto
            </p>

            <h2 className="contact-title" id="contact-title">
              Trabajemos juntos
              <span> y seamos creativos.</span>
            </h2>

            <p className="contact-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur molestias optio, beatae incidunt illo cupiditate ut
              ratione unde quibusdam atque!
            </p>
          </div>
        </div>
      </section>
  );
}