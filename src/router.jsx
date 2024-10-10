import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {Home, Search, Collection} from "./pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
         <Route index element={<Home />}/>
         <Route element={<Search />}/>
         <Route index element={<Collection />}/>
        </Route>
    )

)