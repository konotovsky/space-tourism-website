import { Outlet, useMatches } from "react-router";
import Header from "@/components/ui/Header";
import type { AppRouteObject } from "@/types/ui.types";

export default function RootLayout() {
  const matches = useMatches() as Array<AppRouteObject>;

  const currentMatch = matches[matches.length - 1];
  const bgClass = currentMatch?.handle?.bg || "bg-blue-900";

  return (
    <div className={`flex min-h-screen flex-col bg-cover bg-bottom ${bgClass}`}>
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
}
