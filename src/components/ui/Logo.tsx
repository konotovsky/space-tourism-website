import type { LogoProps } from "@/types/ui.types";

export default function Logo({ src, alt = "Logo" }: LogoProps) {
  return (
    <div className="h-10 w-10 sm:h-12 sm:w-12">
      <img className="h-full w-full object-contain" src={src} alt={alt} />
    </div>
  );
}
