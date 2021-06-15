import styled from 'styled-components'

const List = ({list}) => {

    return (
        <StyledUl className="list">
            {
                list.label &&
                <li className="list__title">
                    <h3>{list.label}</h3>
                </li>
            }
            
            {list.items.map( ( item ) => {
                return (
                    <li className="list__item" key={ item.key }>
                        <i className={`list__icon ${item.icon}`}></i>{item.label}
                    </li>
                )
            })}
        </StyledUl>
    )
}

const StyledUl = styled.ul`
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }

    .list{
        &__item{
            font-size: 1.2rem;
            padding-left: 2.5rem;
            list-style: none;
        }
        &__title{
            color: var(--clr-secondary-dark);
            margin-bottom: 0.5rem;
            padding-left: 1rem;
            list-style: none;
        }
        &__icon{
            color: var(--clr-secondary-dark);
            width: 2.5rem;
            font-size: 1.75rem;
        }
    }
`

export default List
