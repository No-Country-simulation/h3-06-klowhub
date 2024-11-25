import React from 'react';
import Logo from '@/ui/Logo/Logo';
import Button from '@/ui/Button/button';
import InputText from '@/ui/InputText/InputText';
import ButtonSocial from '@/ui/Login/ButtonSocial';
import Footer from '@/ui/Footer/Footer'
import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="w-full h-screen bg-cover bg-center flex flex-col bg-left">
      <div className="h-[75%] bg-[url('https://acortar.link/9jsl5u')] flex bg-cover bg-center w-[100%]">
        <div className="pt-7 pl-5">
          <Logo />
        </div>

        <div className="w-[40%] bg-black bg-opacity-50 flex flex-col gap-4 px-20 py-8 h-[100%] ml-auto items-center ">
          <p className="text-xs w-full text-center font-bold">
            Bienvenido de nuevo. Inicia sesión para continuar creando y
            aprendiendo en KlowHub.
          </p>
          <form className="w-full px-7 flex flex-col gap-4 items-center">
            <InputText type="text" placeholder="Email" fullWidth />
            <InputText type="text" placeholder="Contraseña" fullWidth />
            <p className="text-xs my-5">
              Al registrarte, aceptas nuestas{' '}
              <span className="text-[#bfa3e7]"> Condiciones de uso </span>y
              nuestra{' '}
              <span className="text-[#bfa3e7]">Politica de privacidad</span>
            </p>
            <Button fullWidth>Iniciar Sesión</Button>
            <p className="text-xs">O continuar con</p>
            <div className="w-full flex justify-center gap-6">
              <ButtonSocial>
                <FaGithub />
              </ButtonSocial>
              <ButtonSocial>
                <FaFacebook />
              </ButtonSocial>
              <ButtonSocial>
                <FaGoogle />
              </ButtonSocial>
            </div>
            <div className='w-full flex justify-center gap-2'>
                <input type="checkbox" />
                <p className='text-xs'>Quiero recibier novedades y consejos de la plataforma</p>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[30%]">
        <Footer/>
      </div>
    </div>
  );
}
