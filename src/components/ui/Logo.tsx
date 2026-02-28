import type { LogoProps } from "@/types/ui.types";

export default function Logo({ src, alt = "Logo" }: LogoProps) {
  return (
    <div className="h-10 w-10 md:h-12 md:w-12">
      <img className="h-full w-full object-contain" src={src} alt={alt} />
    </div>
  );
}
