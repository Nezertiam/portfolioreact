import { useState } from "react";
import styled from "styled-components";
import Burger from "../ui/Burger";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <header>
                <StyledNav>
                    <Link to="/">Mawyn Nhek</Link>
                    <Burger open={open} onClick={handleClick} />
                </StyledNav>
            </header>

            {
                open &&
                <StyledMenu id="menu">
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/works">Réalisations</Link>
                        </li>
                        <li>
                            <Link to="/about">A propos</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="networks">
                            <Link to="/"><i className="fab fa-linkedin"></i></Link>
                            <Link to="/"><i className="fab fa-github-square"></i></Link>
                        </li>
                    </ul>
                </StyledMenu>
            }
        </>
    )
}



const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    z-index: 5;
    left: 0;
    right: 0;
`

const StyledMenu = styled.div`
    ul {
        position: fixed;
        z-index: 4;
        padding-top: 65px;
        padding-bottom: 65px;
        display: flex;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        &>* {
            padding: 1rem;
            font-size: 2rem;
        }
    }
    .networks {
        &>*:not(:last-child) {
            margin-right: 0.5rem;
        }
        &>:last-child {
            margin-left: 0.5rem;
        }
    }

`

export default Navbar
