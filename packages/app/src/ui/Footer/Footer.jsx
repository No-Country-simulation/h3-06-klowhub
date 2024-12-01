import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import FooterMenu from './FooterMenu';
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#321758] text-white flex flex-col justify-around ">
      <div className="w-full flex justify-around gap-4 p-2">
        <FooterMenu
         title="Categorías "
         options={["Cursos", "Aplicaciones", "Vende un Curso", "Vende una App"]}
        />
        <FooterMenu
         title="Acerda de "
         options={["Instructores", "Cursos", "Términos del servicio", "Politicas de privacidad"]}
        />
        <FooterMenu
         title="Soporte "
         options={["FAQ", "Conctacto", "Foro"]}
        />
        <FooterMenu
         title="Encuéntranos en"
         options={[<FaFacebookF />,<FaTwitter />,<FaLinkedinIn /> ]}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <hr />
        <span className="w-full flex justify-center gap-2 text-xs">
          <FaRegCopyright /> KlowHub.
        </span>
      </div>
    </div>
  );
};

export default Footer;
