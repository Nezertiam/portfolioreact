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
            <Header>
                <StyledNav>
                    <Link to="/home" className="link-to-home">Mawyn Nhek</Link>
                    <Burger open={open} onClick={handleClick} />
                </StyledNav>
            </Header>

            {
                open &&
                <StyledMenu id="menu">
                    <ul>
                        <li>
                            <Link to="/" onClick={handleClick}>Home</Link>
                        </li>
                        <li>
                            <Link to="/works" onClick={handleClick}>Works</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleClick}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleClick}>Contact</Link>
                        </li>
                        <li className="networks">
                            <a href="https://www.linkedin.com/in/mawyn-nhek-131bb7206/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" onClick={handleClick}></i></a>
                            <a href="https://github.com/Nezertiam" target="_blank" rel="noreferrer"><i className="fab fa-github-square" onClick={handleClick}></i></a>
                        </li>
                    </ul>
                </StyledMenu>
            }
        </>
    )
}

const Header = styled.header`
    .link-to-home {
        letter-spacing: 0.2rem;
        font-weight: 600;
    }
`

const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    z-index: 10;
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
