import { useState } from "react";
import { NavLink } from "react-router";
import type { MenuProps } from "@/types/ui.types";
import menuOpen from "@/assets/shared/icon-hamburger.svg";
import menuClose from "@/assets/shared/icon-close.svg";

export default function Menu({ items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <nav className="hidden gap-10 text-white uppercase sm:flex xl:bg-white/5 xl:pr-16 xl:pl-40 xl:backdrop-blur-[20px]">
        {items.map((item, index) => {
          const number = index.toString().padStart(2, "0");

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `font-barlow-condensed text-base tracking-[2px] hover:border-white/50 sm:border-b-[3px] sm:py-[38.5px] ${isActive ? "sm:border-white hover:sm:border-white" : "sm:border-transparent"}`
              }
            >
              <span className="mr-3 font-bold tracking-[2.7px]">{number}</span>
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      <button onClick={toggleMenu}>
        <img src={isOpen ? menuClose : menuOpen} alt="Menu toggle" />
      </button>
    </>
  );
}
