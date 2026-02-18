import { Outlet } from "react-router";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
