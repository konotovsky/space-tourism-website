import { Outlet, useMatches } from "react-router";
import Header from "@/components/ui/Header";
import type { AppRouteObject } from "@/types/ui.types";

export default function RootLayout() {
  const matches = useMatches() as Array<AppRouteObject>;

  const currentMatch = matches[matches.length - 1];
  const bgClass = currentMatch?.handle?.bg || "bg-blue-900";

  return (
    <>
      <Header />
      <main>
        <div className={`min-h-screen bg-cover bg-bottom ${bgClass}`}>
          <div className="pt-22.75 sm:pt-25.25 lg:pt-35.25">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
