import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ImageProvider } from "../context";

export function App() {
  return (
    <>
    <Header />
    <ImageProvider>
      <Outlet />
    </ImageProvider>
    </>
  );
}
