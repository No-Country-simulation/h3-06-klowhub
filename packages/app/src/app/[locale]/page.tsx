import { getSession } from '@/_lib';
import { Wrapper } from '@/components/ui';
import Card from '@/components/ui/cards/Card';
import Hero from '@/components/ui/Hero/Hero';
import HeroCard from '@/components/ui/Hero/HeroCard';
import coursesData from '@shared/data/coursesData.json';
import coursesInProgress from '@shared/data/coursesInProgress.json';

const HomePage = async () => {
  const session = await getSession();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Hero image="/HeroImage.png">
        <HeroCard title="KlowHub">Descubre,aprendre y crea</HeroCard>
      </Hero>

      <main className="flex flex-grow flex-col justify-start items-center py-[30px] px-[30px] md:px-[60px]  bg-gray-700 gap-5">
        {session && coursesInProgress.length < 0 && (
          <Wrapper title="Continua tu aprendizaje" href="/courses">
            {coursesInProgress.map((course, index) => (
              <p key={index}>{course}</p>
            ))}
          </Wrapper>
        )}

        <Wrapper title="Cursos recomendados" href="/courses">
          {coursesData.map((course) => (
            <Card
              key={course._id}
              id={+course._id}
              title={course.title}
              description={course.description}
              duration={course.duration.toString()}
              level={course.level}
              tag={course.platform}
              imageUrl={course.imageUrl}
              rating={0}
              reviews={0}
            />
          ))}
        </Wrapper>
        <Wrapper title="Aplicaciones recomendadas" href="/applications">
          {coursesData.map((course) => (
            <Card
              key={course._id}
              id={+course._id}
              title={course.title}
              description={course.description}
              duration={course.duration.toString()}
              level={course.level}
              tag={course.platform}
              imageUrl={course.imageUrl}
              rating={0}
              reviews={0}
            />
          ))}
        </Wrapper>
      </main>
    </div>
  );
};

export default HomePage;
