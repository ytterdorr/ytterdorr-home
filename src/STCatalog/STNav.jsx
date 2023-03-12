import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

const StyledNav = styled.nav`
    background-color: violet;
    padding-left: 20%;
    padding-right: 20%;
`;

const StyledUL = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;

const STNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Signup</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
}

export default STNav;

