import React from "react";
import { IMAGES } from "../../const/images";
import {Icon} from "@iconify/react";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center bg-black my-4" id="projects">
      <h3 className="text-center text-white text-2xl my-4">
        Mis <span className="font-bold">Proyectos</span>
      </h3>
      <div className="project-cards flex flex-col p-16 w-full m-4">
        <div className="card left-card flex flex-row gap-4 mx-auto items-center">
          <div className="">
            <img src={IMAGES.project1} alt="banner" width={250} height={128} />
          </div>
          <div className="text-white max-w-[26em] items-center space-y-2 py-6">
            <h4 className="font-bold text-2xl">01</h4>
            <p className="font-bold">Proyecto 1</p>
            <p className="text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              perferendis recusandae sed porro, ipsa adipisci quidem! Explicabo
              quis iste quisquam dicta quibusdam repudiandae deserunt totam,
              nisi, officia temporibus optio at. Consequuntur modi facilis nulla
              delectus, sapiente illo beatae debitis corrupti!
            </p>
            <a href="#" className="icon-link hover:scale-115 hover:ease-in-out hover:text-gray-400 w-5 h-5 inline-block">
              <Icon icon={"lineicons:link-2-angular-right"} width={16} height={16}/>
            </a>
          </div>
        </div>
        <div className="card left-card flex flex-row gap-4 mx-auto items-center">
          <div className="text-white max-w-[26em] items-center space-y-2 py-6">
            <h4 className="font-bold text-2xl">02</h4>
            <p className="font-bold">Proyecto 2</p>
            <p className="text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              perferendis recusandae sed porro, ipsa adipisci quidem! Explicabo
              quis iste quisquam dicta quibusdam repudiandae deserunt totam,
              nisi, officia temporibus optio at. Consequuntur modi facilis nulla
              delectus, sapiente illo beatae debitis corrupti!
            </p>
            <a href="#" className="icon-link hover:scale-115 hover:ease-in-out hover:text-gray-400 w-5 h-5 inline-block">
              <Icon icon={"lineicons:link-2-angular-right"} height={28} width={28}/>
            </a>
          </div>
          <div className="">
            <img src={IMAGES.project2} alt="banner" width={250} height={128} />
          </div>
        </div>
      </div>
    </section>
  );
}
