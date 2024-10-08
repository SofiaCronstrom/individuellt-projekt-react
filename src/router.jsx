import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {App} from "./App";
import { Home, Search, Collection } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<Home />} />
      <Route element={<Search />} path="search" />
      <Route index element={<Collection />} path="collection" />
    </Route>
  )
);
