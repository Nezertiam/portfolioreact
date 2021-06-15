import styled from "styled-components"


const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 635px){
        grid-template-columns: repeat(2, 1fr);
        &>.card{
            border-radius: 0px 0px 0px 0px;
            grid-column: 1/2;

            &:first-child{
                border-radius: 10px 0px 0px 0px;
                &:last-child{
                    border-radius: 10px;
                }
                &:nth-last-child(2){
                    border-radius: 10px 0px 0px 10px;
                }
            }
            &:last-child{
                grid-column: 1/3;
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(2n){
                grid-column: 2/3;
                &:last-child{
                    border-radius: 0px 0px 10px 0px;
                }
                &:nth-child(2){
                    border-radius: 0px 10px 0px 0px;
                    &:last-child{
                        border-radius: 0px 10px 10px 0px;
                    }
                }
            }
        }
    }

    @media (max-width: 634px){
        &>.card{
            &:first-child{
                border-radius: 10px 10px 0 0;
            }
            &:last-child{
                border-radius: 0 0 10px 10px;
            }
            &:first-child:last-child{
                border-radius: 10px;
            }
        }
    }
`


export default CardsContainer
