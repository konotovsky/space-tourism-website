import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "@/components/layouts/RootLayout";
import Home from "@/components/pages/Home";
import Destination from "@/components/pages/Destination";
import Crew from "@/components/pages/Crew";
import Technology from "@/components/pages/Technology";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
