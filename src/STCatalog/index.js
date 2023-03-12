import React from "react";
import { NavLink, Outlet, Routes, Route, useResolvedPath } from "react-router-dom";
import Endings from "./Endings";

import styled from "styled-components";
import STNav from "./STNav";

const StyledNav = styled.nav`
    background-color: green;
    display: flex;
    flex-direction: row;
`;



// const Endings = () => {
//     return <div>Endings</div>
// }

const STCatalog = () => {
    // console.log("match", match)
    const url = useResolvedPath("").pathname;

    return (
        <>
            <Routes>
                <Route path={`${url}/endings`} element={<Endings />} />
            </Routes>

            <header><h1>Storytelling Catalog</h1></header>
            <STNav />
            {/* <StyledNav>
                <ul>
                    <li>
                        <NavLink to="Start">Start</NavLink>
                    </li>
                    <li>
                        <NavLink to="endings">Endings</NavLink>

                    </li>
                </ul>
            </StyledNav> */}
            <body>
                <Outlet></Outlet>
            </body>
        </>


    )
}

export default STCatalog;
export { Endings };
