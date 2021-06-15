import styled from "styled-components"
import Card from "./Card"

let isGrouped
let isJoined

const Cards = ({ content, grouped, joined }) => {

    isGrouped = false === grouped ? grouped : true

    isJoined = isGrouped ? ( false === joined ? joined : true ) : false
    // First ternary: checks if the cards are grouped (can't join ungrouped Cards)
    // Second ternary: checks if the Cards must be unjoined by their sides (joined by default) and return a boolean

    // Security to avoid problems if the dev use the props wrong
    // By default, cards ARE grouped AND joined in between themselves by their sides
    

    return(
        <>
            {
                ((isGrouped && isJoined) && content.length > 1) &&
                // 
                <StyledContainer>
                    {
                        content.map( ( skill ) => {
                            return(
                                <>
                                    <Card content={ skill }/>
                                </>
                            )
                        })
                    }
                </StyledContainer>
            }

            {
                ((isGrouped && !isJoined) && content.length > 1) && 
                <StyledUnjoinedContainer>
                    {
                        content.map( ( skill ) => {
                            return(
                                    <Card content={ skill }/>
                            )
                        })
                    }
                </StyledUnjoinedContainer>
            }

            {
                (!isGrouped || content.length <= 1) && 
                content.map( ( skill ) => {
                    return (
                    <StyledContainer>
                        <Card content={ skill }/>
                    </StyledContainer>
                    )
                })
            }
        </>
    )

}



const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem 1rem;
    
    @media (min-width: 635px){
        grid-template-columns: repeat(2, 1fr);
        &>.card{
            border-radius: 0px 0px 0px 0px;
            grid-column: 1/2;
            
            &:nth-last-child(2){
                border-radius: 0px 0px 0px 20px;
            }
            &:first-child{
                border-radius: 20px 0px 0px 0px;
                &:last-child{
                    border-radius: 20px;
                }
                &:nth-last-child(2){
                    border-radius: 20px 0px 0px 20px;
                }
            }
            &:last-child{
                grid-column: 1/3;
                border-radius: 0px 0px 20px 20px;
            }
            &:nth-child(2n){
                grid-column: 2/3;
                &:last-child{
                    border-radius: 0px 0px 20px 0px;
                }
                &:nth-child(2){
                    border-radius: 0px 20px 0px 0px;
                    &:last-child{
                        border-radius: 0px 20px 20px 0px;
                    }
                }
            }
        }
    }
    
    @media (max-width: 634px){
        &>.card{
            &:first-child{
                border-radius: 20px 20px 0 0;
            }
            &:last-child{
                border-radius: 0 0 20px 20px;
            }
            &:first-child:last-child{
                border-radius: 20px;
            }
        }
    }
`

const StyledUnjoinedContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem 1rem;
    
    @media (min-width: 635px){

        grid-template-columns: repeat(2, 1fr);

        &>*{
            border-radius: 20px;
            grid-column: 1/2;
            margin-right: 0.5rem;

            &:nth-child(2n){
                grid-column: 2/3;
                margin-right: 0;
                margin-left: 0.5rem;
            }
        }
    }
`


export default Cards
