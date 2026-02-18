export interface LogoProps {
  src: string;
  alt?: string;
}

export interface MenuItem {
  name: string;
  path: string;
}

export interface MenuProps {
  items: ReadonlyArray<MenuItem>;
}
