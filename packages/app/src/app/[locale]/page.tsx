import { getSession } from '@/_lib';
import { Wrapper } from '@/components/ui';
import Hero from '@/components/ui/Hero/Hero';
import HeroCard from '@/components/ui/Hero/HeroCard';
export const HomePage = async () => {
  const session = await getSession();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Hero image="/HeroImage.png">
        <HeroCard title="KlowHub">Descubre,aprendre y crea</HeroCard>
      </Hero>

      <main className="flex flex-grow flex-col justify-start items-center py-[30px] px-[30px] md:px-[60px]  bg-gray-700 gap-5">
        {session && (
          <Wrapper title="Continua tu aprendizaje" href="/courses">
            Cursos con progreso card aqui
          </Wrapper>
        )}

        <Wrapper title="Cursos recomendados" href="/courses">
          Cursos
        </Wrapper>
        <Wrapper title="Aplicaciones recomendadas" href="/applications">
          Cursos
        </Wrapper>
      </main>
    </div>
  );
};

export default HomePage;
