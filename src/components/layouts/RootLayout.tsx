import { Outlet, NavLink } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white" : "text-blue-300"
            }
            to="/"
          >
            Logo
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white" : "text-blue-300"
            }
            to="/destination"
          >
            Destination
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white" : "text-blue-300"
            }
            to="/crew"
          >
            Crew
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white" : "text-blue-300"
            }
            to="/technology"
          >
            Technology
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
