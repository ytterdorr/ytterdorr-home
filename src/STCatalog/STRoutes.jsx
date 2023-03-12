import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import STCatalog from ".";
import Endings from "./Endings";

const NoMatch = () => {
    return (<div>404 page not found</div>)
}

const STRoutes2 = () => (
    <Routes>

        <Route path="/STCatalog" element={<STCatalog />} >
            <Route path="Start" element={<div>Maybe a list</div>} />
            <Route path="Endings" element={<Endings />} />
            <Route path="*" element={<NoMatch />} />
        </Route>
    </Routes>
)

const STRoutes = () => {
    let routeList = useRoutes([
        { path: "endings", element: < Endings /> }
    ])
    return routeList;
}




const AdminRoutes = (
    <Routes>
        <Route path="countries" element="countries" />
        <Route path="tournaments" element="Tournaments" />
        <Route path="/" element="Admin" />
    </Routes>
);


export default STRoutes
export { AdminRoutes }