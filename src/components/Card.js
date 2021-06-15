import List from './List'
import styled from "styled-components"
import Cards from './Cards'

const Card = ({ content }) => {

    return (
        <>
            {
                content.length &&
                <Cards content={ content } />
            }

            {
                !content.length &&
                <StyledCard className="card">
                    {
                        content.icon &&
                        <div className="card__aside">
                            <i className={`card__faicon ${content.icon}`}></i>
                        </div>
                    }

                    {
                        (content.title || content.content) &&
                        <div className="card__header">
                            {content.title && <h2 className="card__title">{ content.title }</h2>}
                            {content.subtitle && <p className="card__subtitle">{ content.content }</p>}
                        </div>
                    }


                    <div className="card__body">

                        {
                            content.text &&
                            <p className="card__text">{ content.text }</p>
                        }

                        {
                            content.lists && 
                            content.lists.map( ( list ) => {
                                return(
                                    <List list={ list } key={ list.key } />
                                )
                            })
                        }

                        {
                            content.links &&
                            <p className="card__links">
                                {content.links.map( ( link ) => {
                                    return(
                                        <a href={link.href} className="card__link" key={ link.key }>
                                            {
                                                link.icon &&
                                                <i className={`${link.icon} fa-2x`}></i>
                                            }
                                            {
                                                link.label &&
                                                link.label
                                            }
                                        </a>
                                    )
                                })}
                            </p>
                        }

                    </div>
                </StyledCard>
            }
        </>
    )
}

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

const StyledCard = styled.div`
    border: 1px solid rgb(206, 206, 206);
    background: rgb(255, 255, 255);
    padding:4rem 0.5rem 3rem;
    grid-column: 1/13;
    border-radius: 20px;

    .card {
        &__header, &__aside, &__subtitle, &__text{
            text-align: center;
        }
        &__header{
            padding: 3.5rem 1rem 0rem;
            margin-top: 0;
        }
        &__subtitle, &__text{
            min-height: 10rem;
            font-size: 1.2rem;
            margin-top: 1.5rem;
        }
        &__title{
            padding-bottom: 1.5rem;
            font-size: 1.6rem;
        }
        &__subtitle, &__text{
            font-size: 1.2rem;
        }
        &__faicon{
            font-size: 3rem;
            color: var(--clr-secondary);
        }
        &__links{
            text-align: center;
        }

    }
    .list{
        height: 200px;
    }
`

export default Card
