import { getSession } from '@/_lib';
import NotePicker from '@/components/molecules/FormsMolecules/Editor/NotePicker';
import FileUploader from '@/components/molecules/FormsMolecules/FileUploader/FileUploader';
import Hero from '@/components/ui/Hero/Hero';
import HeroCard from '@/components/ui/Hero/HeroCard';
import WrapperHome from '@/components/ui/layouts/Wrappers/WrapperHome/WrapperHome';
export const HomePage = async () => {
  const session = await getSession();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Hero image="/HeroImage.png">
        <HeroCard title="KlowHub">Descubre,aprendre y crea</HeroCard>
      </Hero>

      <main className="flex flex-grow flex-col justify-start items-center py-[30px] px-[30px] md:px-[60px]  bg-gray-700 gap-5">
        {session && (
          <WrapperHome title="Continua tu aprendizaje" href="/courses">
            Cursos
          </WrapperHome>
        )}
        <FileUploader photo="" />
        <h1>editor</h1>
        <NotePicker />

        <WrapperHome title="Cursos recomendados" href="/courses">
          Cursos
        </WrapperHome>
        <WrapperHome title="Aplicaciones recomendadas" href="/applications">
          Cursos
        </WrapperHome>
      </main>
    </div>
  );
};

export default HomePage;
