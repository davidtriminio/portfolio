import { useEffect } from "react";
import "./contact-form.css";

export default function ContactForm() {
  useEffect(() => {
    const el = document.getElementById("textAreaMensaje");
    if (el) {
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
    }
  }, []);
  return (
    <div className="px-12 py-8 w-full flex" id="contact">
      <div className="w-1/2 flex flex-col gap-4">
        <input type="text" className="field-text" placeholder="Nombre" />
        <input type="email" className="field-text" placeholder="Email" />
        <textarea
          id="textAreaMensaje"
          className="field-text text-area-custom"
          placeholder="¿En qué puedo ayudarte?*"
          maxLength={100}
        />
      </div>
      <div className="w-1/2 items-center">
        <h3 className="text-4xl font-black line">Trabajemos juntos</h3>
        <h4 className="text-4xl font-black line">Y seamos creativos.</h4>
        <p className="font-light text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias optio, beatae incidunt illo cupiditate ut ratione unde quibusdam atque!</p>
      </div>
    </div>
  );
}
