import type { RouteObject } from "react-router";

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

export type AppRouteObject = RouteObject & {
  handle?: {
    bg?: string;
  };
};
