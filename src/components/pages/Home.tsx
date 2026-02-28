import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex h-full flex-col items-center gap-6 py-6 md:py-32 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 text-center sm:max-w-lg sm:gap-0 lg:max-w-1/2 lg:text-left">
          <p className="font-barlow-condensed text-base tracking-[15%] uppercase sm:text-[28px] sm:tracking-[4px]">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair block text-[80px] tracking-[0px] text-white uppercase sm:text-[144px]">
            Space
          </h1>
          <p className="font-barlow text-[15px] leading-[180%] tracking-[0px] sm:text-base">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex h-full items-center sm:items-end lg:items-center">
          <a
            className="font-bellefair flex h-36 w-36 items-center justify-center rounded-full bg-white text-[18px] tracking-[0px] text-blue-900 uppercase outline-white/10 transition-all duration-300 hover:text-blue-900/50 hover:outline-88 sm:h-68 sm:w-68 sm:text-[32px]"
            href="/destinations"
          >
            Explore
          </a>
        </div>
      </div>
    </Container>
  );
}
