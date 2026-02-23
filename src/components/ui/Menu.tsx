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
      <nav className="hidden text-white uppercase sm:flex xl:bg-white/5 xl:pr-16 xl:pl-40 xl:backdrop-blur-[20px]">
        <ul className="flex gap-12">
          {items.map((item, index) => {
            const number = index.toString().padStart(2, "0");

            return (
              <li className="sm:py-[38.5px]" key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `font-barlow-condensed text-base tracking-[2px] hover:border-white/50 sm:border-b-[3px] sm:py-[38.5px] ${isActive ? "sm:border-white hover:sm:border-white" : "sm:border-transparent"}`
                  }
                >
                  <span className="mr-3 font-bold tracking-[2.7px]">
                    {number}
                  </span>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="z-1000 sm:hidden" onClick={toggleMenu}>
        <img src={isOpen ? menuClose : menuOpen} alt="Menu toggle" />
      </button>
      {isOpen && (
        <div className="absolute inset-0 ml-auto max-w-2/3 bg-white/5 backdrop-blur-[20px]">
          <nav className="mt-33.25 text-white uppercase">
            <ul className="flex flex-col gap-8">
              {items.map((item, index) => {
                const number = index.toString().padStart(2, "0");

                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `font-barlow-condensed border-l-[3px] pl-8 text-base tracking-[2px] ${isActive ? "border-white" : "border-transparent"}`
                      }
                    >
                      <span className="mr-3 font-bold tracking-[2.7px]">
                        {number}
                      </span>
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
