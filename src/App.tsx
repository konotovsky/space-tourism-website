import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/components/layouts/RootLayout";
import Home from "@/components/pages/Home";
import Destination from "@/components/pages/Destination";
import Crew from "@/components/pages/Crew";
import Technology from "@/components/pages/Technology";

const backgrounds = {
  home: "bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')]",
  destination:
    "bg-[url('./assets/destination/background-destination-mobile.jpg')] sm:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.jpg')]",
  crew: "bg-[url('./assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')]",
  technology:
    "bg-[url('./assets/technology/background-technology-mobile.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')]",
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          bg: backgrounds.home,
        },
      },
      {
        path: "/destinations",
        element: <Destination />,
        handle: {
          bg: backgrounds.destination,
        },
      },
      {
        path: "/crew",
        element: <Crew />,
        handle: {
          bg: backgrounds.crew,
        },
      },
      {
        path: "/technology",
        element: <Technology />,
        handle: {
          bg: backgrounds.technology,
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
