import React from "react";
import { IMAGES } from "../../const/images";
import "../about-me/about-me.css";
import {Icon} from "@iconify/react";

export default function AboutMe() {
  return (
    <section className="h-[26em]  px-12 py-8" id="#about-me">
      <div className="flex w-full information-texts">
        <div className="w-1/2 my-12">
          <p className="text-4xl my-6">
            Hola, Soy <span className="font-extrabold">David Triminio</span>.
          </p>
          <p className="text-4xl font-black my-6">
            <span className="developer-text">Desarrollador Web</span>{" "}
            Frontend/Backend
          </p>
          <p className="font-light text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            ratione pariatur dolore?
          </p>
          <div className="social-buttons flex flex-row gap-4 my-6">
            <a href="">
              <Icon icon={"lineicons:github"} width={28} height={28}/>
            </a>
            <a href="">
              <Icon icon={"lineicons:linkedin"} width={28} height={28}/>
            </a>
            <a href="">
              <Icon icon={"lineicons:instagram"} width={28} height={28}/>
            </a>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <img src={IMAGES.Banner} alt="bann" />
        </div>
      </div>
    </section>
  );
}
