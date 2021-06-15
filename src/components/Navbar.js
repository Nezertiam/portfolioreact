import styled from 'styled-components'

const Navbar = () => {
    return (
        <>
            <StyledBurger className="burger" id="burger">
                <i className="burger__icon fas fa-bars fa-2x" id="burgericon"></i>
            </StyledBurger>
            <StyledNav className="nav" id="main-nav">
                <div className="nav__logo">
                    <a href="#" className="nav__link">Mawyn Nhek</a>
                </div>

                <ol className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link nav__link--active">Compétences</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Réalisations</a>
                    </li>
                    <li className="nav__item">
                        <StyledA href="#" className="nav__link">Contact</StyledA>
                    </li>
                </ol>
            </StyledNav>
        </>
    )
}

const StyledA = styled.a`
    border: 2px solid white;
    border-radius: 20px;
    padding: 0.5rem 2rem;

    &:hover{
        background-color: var(--clr-primary);
    }
`

const StyledBurger = styled.div`
    position: fixed;
    z-index: 3;
    left: 1.25rem;
    top: 1rem;
    font-size: 1.25rem;

    .burger{
        &__icon{
            color:rgba(255, 255, 255, 0.527);
            -webkit-text-stroke: 1px rgba(0, 0, 0, 0.507);
        }
    }

    @media (min-width: 992px){
        display: none;
    }
`

const StyledNav = styled.nav`
    position: fixed;
    background-color: var(--clr-primary-dark);
    height: 100vh;
    width: 80vw;
    padding-top: 6rem;
    opacity: 97%;
    left: -100%;
    transition: left 0.75s;
    z-index: 2;

    &.open{
        left: 0%;
    }

    .nav{
        &__link{
            color: white;
            text-decoration: none;
            font-weight: bolder;
            display: block;
            text-align: center;
            height: 15vh;
        }
    }

    @media (min-width: 992px){
        left: 0;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        opacity: 1;
        height: unset;
        padding-top: 0;
        background-color: transparent;
        transition: background-color 0.5s, box-shadow 0.5s;

        &.scrolled{
            background-color: var(--clr-primary-dark);
            box-shadow: -0px 0px 30px black;
        }

        .nav{
            &__list, &__logo{
                padding: 1.5rem 3rem;
            }
            &__item{
                list-style: none;
                display: inline;
                &:not(:last-child){
                    margin-right: 3rem;
                }
            }
            &__link{
                display: inline;
                height: unset;
            }
        }
    }
`

window.addEventListener("DOMContentLoaded", (event) => {
    let burger = document.querySelector("#burger")
    let burgericon = document.querySelector("#burgericon")
    let nav = document.querySelector("#main-nav")
    
    
    burger.addEventListener("click", () => {
        nav.classList.toggle("open")
        burgericon.classList.toggle("fa-bars")
        burgericon.classList.toggle("fa-times")
    })

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.documentElement.scrollTop > 80) {
            nav.classList.add("scrolled")

        } else {
            nav.classList.remove("scrolled")
        }

    }
})




export default Navbar
