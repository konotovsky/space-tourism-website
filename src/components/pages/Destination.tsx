import { useEffect, useState } from "react";
import { useDestinationStore } from "@/stores/destinationStore";
import Container from "@/components/ui/Container";

export default function Destination() {
  const { destinations, activeIndex, setDestinations, setActiveIndex } =
    useDestinationStore();
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    async function fetchDestinations() {
      const result = await fetch("/data.json");
      const data = await result.json();

      setDestinations(data.destinations);
      setLoading(false);
    }

    fetchDestinations();
  }, [setDestinations]);

  if (loading) return <Container>Loading...</Container>;
  if (!destinations.length) return <Container>No destinations found</Container>;

  const active = destinations[activeIndex];

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
      <div className="flex flex-col gap-6 py-6 text-center">
        <h1 className="font-barlow-condensed text-base tracking-[15%] text-white uppercase">
          <span className="mr-6 font-bold text-white/25">01</span>Pick your
          destination
        </h1>

        <div
          className={`flex flex-col items-center py-[26.5px] transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-37.5 w-37.5">
            <img
              key={active.name}
              src={active.images.webp}
              alt={active.name}
              className="w-full object-contain object-center transition-opacity duration-300"
            />
          </div>
        </div>

        <div className="font-barlow-condensed flex justify-center gap-8 text-sm tracking-[15%] text-blue-300">
          {destinations.map((destination, index) => (
            <button
              key={destination.name}
              onClick={() => handleTabClick(index)}
              className={`cursor-pointer border-b-[3px] pb-3 hover:border-white/50 hover:text-white ${
                index === activeIndex
                  ? "border-white text-white"
                  : "border-transparent"
              } transition-all duration-300`}
            >
              {destination.name.toUpperCase()}
            </button>
          ))}
        </div>
        <div
          className={`transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 text-center">
            <h2 className="font-bellefair text-[56px] tracking-[0px] text-white uppercase">
              {active.name}
            </h2>
            <p className="font-barlow text-[15px] leading-[180%] tracking-[0px]">
              {active.description}
            </p>

            <hr className="h-px border-none bg-white/25 outline-none" />

            <div className="flex flex-col justify-center gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-barlow-condensed text-sm tracking-[2px] uppercase">
                  AVG. DISTANCE
                </h3>
                <p className="font-bellefair text-[28px] tracking-[0px] text-white uppercase">
                  {active.distance}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-barlow-condensed text-sm tracking-[2px] uppercase">
                  EST. TRAVEL TIME
                </h3>
                <p className="font-bellefair text-[28px] tracking-[0px] text-white uppercase">
                  {active.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
