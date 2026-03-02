import type { MenuItem } from "@/types/ui.types";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import logoImage from "@/assets/shared/logo.svg";
import Menu from "@/components/ui/Menu";

const menuItems: MenuItem[] = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

export default function Header() {
  return (
    <header className="py-6 md:py-0 xl:pt-10">
      <Container>
        <div className="flex items-center justify-between">
          <Logo src={logoImage} alt="Star logo" />
          <Menu items={menuItems} />
        </div>
      </Container>
    </header>
  );
}
