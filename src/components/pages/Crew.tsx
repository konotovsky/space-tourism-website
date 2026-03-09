import { useEffect, useState } from "react";
import { useCrewStore } from "@/stores/crewStore";
import Container from "@/components/ui/Container";

export default function Crew() {
  const { crew, activeIndex, setCrew, setActiveIndex } = useCrewStore();
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    async function fetchCrew() {
      const result = await fetch("/data.json");
      const data = await result.json();

      setCrew(data.crew);
      setLoading(false);
    }

    fetchCrew();
  }, [setCrew]);

  if (loading) return <Container>Loading...</Container>;
  if (!crew.length) return <Container>No crew found</Container>;

  const active = crew[activeIndex];

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;

    setFade(false);

    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 300);
  };

  return (
    <Container>
      <div className="flex flex-col gap-16 py-6 text-center sm:py-10">
        <h1 className="font-barlow-condensed text-base tracking-[15%] text-white uppercase sm:text-left sm:text-[20px]">
          <span className="mr-6 font-bold text-white/25">02</span>Meet your crew
        </h1>
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div
            className={`flex flex-col gap-6 transition-opacity duration-300 sm:mx-auto sm:max-w-lg lg:w-full lg:max-w-134.75 lg:items-start ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 sm:gap-4">
              <span className="font-bellefair text-[18px] tracking-[0px] text-white/50 uppercase sm:text-2xl lg:text-[32px]">
                {active.role}
              </span>
              <h2 className="font-bellefair text-2xl tracking-[0px] text-white uppercase sm:text-[40px] lg:text-[56px]">
                {active.name}
              </h2>
            </div>
            <p className="font-barlow text-[15px] leading-[180%] tracking-[0px] text-blue-300 sm:text-base lg:text-[18px]">
              {active.bio}
            </p>

            <div className="mt-16 flex items-center justify-center gap-4 lg:gap-10">
              {crew.map((member, index) => (
                <button
                  key={member.name}
                  onClick={() => handleTabClick(index)}
                  className={`h-2.5 w-2.5 cursor-pointer rounded-full hover:bg-white lg:h-3.75 lg:w-3.75 ${
                    index === activeIndex ? "bg-white" : "bg-white/20"
                  } transition-all duration-300`}
                ></button>
              ))}
            </div>
          </div>

          <div className="h-85 w-67.75 self-center sm:h-140 sm:w-111.5 lg:w-full">
            <div
              className={`transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="h-full max-h-150 w-full mask-[linear-gradient(to_bottom,black_75%,transparent)] object-contain"
                key={active.name}
                src={active.images.webp}
                alt={active.name}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
