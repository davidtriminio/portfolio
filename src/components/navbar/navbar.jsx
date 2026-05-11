import { IMAGES } from '../../const/images'
import './navbar.css'
import {Icon} from "@iconify/react";

export default function NavBar() {
  return (
    <header className='bg-white'>
      <nav className='container mx-auto flex justify-around items-center p-4 h-22'>
        <div className="flex flex-row items-center">
          <img src={IMAGES.logo} width={100} height={100}/>
          <p className='name-title text-xl'>David Triminio</p>
        </div>
        <ul className='flex flex-row gap-8'>
          <li className="mx-4"><a href="#about-me" className="nav-link">Sobre Mí</a></li>
          <li className="mx-4"><a href="#skills" className="nav-link">Habilidades</a></li>
          <li className="mx-4"><a href="#projects" className="nav-link">Proyectos</a></li>
          <li className="mx-4"><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>
        <div className='button'>
          <button className='cv bg-gray-900 text-white px-4 rounded-md py-[0.5em] flex flex-row items-center gap-2 hover:text-gray-900 hover:bg-white hover:border-1 hover:ease-in-out hover:duration-500'>
            Hoja de Vida
            <Icon icon={"lineicons:download-1"} className={"text-white"} width={28} height={28}/>
          </button>
        </div>
      </nav>
    </header>
  )
}
