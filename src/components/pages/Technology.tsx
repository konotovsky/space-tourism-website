import { useEffect, useState } from "react";
import { useTechnologyStore } from "@/stores/technologyStore";
import Container from "@/components/ui/Container";

export default function Technology() {
  const { technologys, activeIndex, setTechnologys, setActiveIndex } =
    useTechnologyStore();
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    async function fetchTechnologys() {
      const result = await fetch("/data.json");
      const data = await result.json();

      setTechnologys(data.technology);
      setLoading(false);
    }

    fetchTechnologys();
  }, [setTechnologys]);

  if (loading) return <Container>Loading...</Container>;
  if (!technologys.length) return <Container>No technologys found</Container>;

  const active = technologys[activeIndex];

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
      <div className="flex flex-col gap-8 py-6 text-center sm:py-10 sm:text-left">
        <h1 className="font-barlow-condensed text-base tracking-[15%] text-white uppercase sm:text-[20px]">
          <span className="mr-6 font-bold text-white/25">03</span>Space launch
          101
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div
            className={`transition-opacity duration-300 lg:order-2 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative left-1/2 w-screen -translate-x-1/2 lg:h-110 lg:w-110">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={active.images.portrait}
                />
                <img
                  className="h-64.5 w-full object-cover sm:h-89.25 lg:h-110"
                  src={active.images.landscape}
                  alt={active.name}
                />
              </picture>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:order-1 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex justify-center gap-4 lg:flex-col">
              {technologys.map((technology, index) => (
                <button
                  key={technology.name}
                  onClick={() => handleTabClick(index)}
                  className={`font-bellefair flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-[18px] tracking-[0px] hover:border-white sm:h-14 sm:w-14 sm:text-2xl lg:h-20 lg:w-20 lg:text-[32px] ${
                    index === activeIndex
                      ? "border-white bg-white text-blue-900"
                      : "border-white/25 text-white"
                  } transition-all duration-300`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div
              className={`transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col gap-4 text-center sm:mx-auto sm:max-w-lg lg:text-left">
                <span className="font-bellefair text-[18px] tracking-[0px] text-white/50 uppercase sm:text-2xl lg:text-[32px]">
                  The terminology…
                </span>
                <h2 className="font-bellefair text-2xl tracking-[0px] text-white uppercase sm:text-[40px] lg:text-[56px]">
                  {active.name}
                </h2>
                <p className="font-barlow text-[15px] leading-[180%] tracking-[0px] text-blue-300 sm:text-base lg:text-[18px]">
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
