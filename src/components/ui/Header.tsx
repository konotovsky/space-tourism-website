import type { MenuItem } from "@/types/ui.types";
import data from "../../../data.json";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import logoImage from "@/assets/shared/logo.svg";
import Menu from "@/components/ui/Menu";

export default function Header() {
  const sections = Object.keys(data) as Array<keyof typeof data>;

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/" },
    ...sections.map((key) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      path: `/${key}`,
    })),
  ];

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
