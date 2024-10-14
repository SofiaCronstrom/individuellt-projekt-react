import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {App} from "./components/App";
import {Home} from "./pages/Home";
import {Collection} from "./pages/Collection";
import {Search} from "./pages/Search";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<Home />} />
      <Route element={<Search />} path="search" />
      <Route index element={<Collection />} path="collection" />
    </Route>
  )
);
