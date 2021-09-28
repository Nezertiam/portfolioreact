import styled from "styled-components"

const Burger = ({ onClick, open }) => {
    return (
        <StyledBurger onClick={onClick}>
            <div className={`burger-top ${open ? "open" : ""}`}></div>
            <div className={`burger-bottom ${open ? "open" : ""}`}></div>
        </StyledBurger>
    )
}


const StyledBurger = styled.div`
    width: 25px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &>* {
        width: 25px;
        height: 4px;
        background-color: white;
    }
    .burger-top, .burger-bottom{
        transition: transform 0.5s;
        transform-origin: left;
    }
    .burger-top {
        &.open {
            transform: rotate(40deg);
        }
    }
    .burger-bottom {
        &.open {
            transform: rotate(-40deg);
        }
    }
`

export default Burger
