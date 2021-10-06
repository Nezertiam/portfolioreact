import styled from 'styled-components'


const WordCarousel = () => {

  return (
    <StyledDiv>
      <p>Let's build something</p>
      <div className="elements">
        <p className="element">wonderful</p>
        <p className="element">creative</p>
        <p className="element">innovative</p>
      </div>
      <p>together&nbsp;!</p>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
.elements {
    font-size: 2rem;
    height: 43px;
    overflow: hidden;
    .element {
        height: 43px;
        color: var(--primary);
        animation: rotate 4s ease-in-out infinite alternate;
    }
}

@keyframes rotate {
  0%, 20% {
    transform: translateY(0);
  }
  30%, 70% {
    transform: translateY(calc(43px * -1));
  }
  80%,100% {
    transform: translateY(calc(43px * -2));
  }
}
`

export default WordCarousel
