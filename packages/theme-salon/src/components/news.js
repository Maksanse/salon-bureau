import React from "react"
import {connect, styled} from "frontity"
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";


const News = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return (
        <Newsletter>
            <InView threshold={.2}>
                {({ inView, ref }) => (
                    <Cell ref={ref} inView={inView} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <TextCell isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            Recevez nos<br/><strong>Dernières Actualités</strong>
                        </TextCell>
                        <FlexCell>
                            <TextMinCell isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                Soyez les premiers à recevoir les dernières actualités, les nouveautés produits.
                            </TextMinCell>
                            <ButtonCell isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                <a href="/newsletter/"> S'abonner </a>
                            </ButtonCell>
                        </FlexCell>
                    </Cell>
                )}
            </InView>
        </Newsletter>
    )}

export default connect(News)


const Newsletter = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  padding: 3rem 0 3rem;
  min-height: 25vh;
`;

const Cell = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  transition: opacity 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
  margin-left: 1em;
`

const FlexCell = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  flex: 60%;
`

const TextCell = styled.div` 
  flex: 40%;
  text-align: left;
  font-size: 4rem;
  @media (min-width: 1824px) {
      font-size: 4rem;
  }
  @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 3.5rem;
  }
  @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 3rem;
  }
  @media (min-width: 601px) and (max-width: 799px) {
      font-size: 2.5rem;
  }
  @media (min-width : 401px) and (max-width: 600px) {
      font-size: 2rem;
  }
  @media (max-width: 400px) {
      font-size: 1.750rem;
  }
  font-family: Helvetica Neue;
  font-weight: 100;
  text-transform: uppercase;
  line-height: .9em;
 
  strong {
    font-size: 4.5rem;
    
    @media (min-width: 1824px) {
      font-size: 4.5rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 4rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 3.5rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 3rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 2.5rem;
    }
    @media (max-width: 400px) {
      font-size: 2rem;
    }
    
    letter-spacing: -.056rem;
    font-weight: 300;
  }
`;

const TextMinCell = styled.div`
  flex: 50%;
  flex-shrink: 2;
  padding-left: .5rem;
  text-align: left;
  font-size: 3rem;
  
  @media (min-width: 1824px) {
      font-size: 3rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 2.5rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 2rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 1.8rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 1.6rem;
    }
    @media (max-width: 400px) {
      font-size: 1.4rem;
    }
  
  font-family: Helvetica Neue;
  font-weight: 100;
  line-height: .9em;
`;

const ButtonCell = styled.div`
  flex: 50%;
  text-align: center;

  a {
    text-decoration: none;
    white-space: nowrap;
    margin: auto;
    background: #000;
    backface-visibility: hidden;
    border-width: .125rem;
    box-sizing: border-box;
    color: #fff;
    display: inline-block;
    font-size: 3rem;
    
    @media (min-width: 1824px) {
      font-size: 3rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 2.5rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 2rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 1.5rem;
    }
    @media (min-width: 401px) and (max-width: 600px) {
      font-size: 1.2rem;
    }
    @media (max-width: 400px) {
      font-size: 1rem;
    }
    
    font-weight: 100;
    padding: 1rem 1.250rem;
    
    @media (min-width: 800px) {
        padding: 1rem 1.250rem;
    }
    
    @media (min-width: 601px) and (max-wdith: 799px) {
        padding: 0.750rem 1rem;
    }
    
    @media (min-width: 401px) and (max-width: 600px) {
        padding: 0.600rem 0.850rem;
    }
    
    @media (max-width: 400px) {
        padding: 0.500rem 0.750rem;
    }
    
    position: relative;
    transform: translateZ(0) scale(1);
    transition: transform .2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

  &:not(:disabled):hover {
    transform: scale(1.05);
    color: #fff;
  }
  
  &:not(:disabled):hover:active {
    transform: scale(1.05) translateY(.125rem);
  }

  &:focus {
    outline: 0 solid transparent;
  }

  &:focus:before {
    content: "";
    left: calc(-1*.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1*.375rem);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:focus:not(:focus-visible):before {
    border-width: 0;
  }

  &:not(:disabled):active {
    transform: translateY(.125rem);
  }
`;
