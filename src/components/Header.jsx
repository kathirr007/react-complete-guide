import logo from '../assets/logo.png';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    width: 11rem;
    height: 11rem;
    margin-bottom: 2rem;
    object-fit: contain;
  }
  
  & h1 {
    margin: 0;
    font-family: Pacifico, cursive;
    font-size: 1.5rem;
    font-weight: 600;
    color: #9a3412;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.4em;
  }
  
  & p {
    margin: 0;
    color: #a39191;
    text-align: center;
  }
  
  @media (width >= 768px) {
    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
