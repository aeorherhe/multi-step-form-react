import styled from "styled-components";

/* eslint-disable react/prop-types */
function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;

const StyledHeader = styled.div`
  color: var(--Cool-gray);
  font-size: 0.9rem;
  line-height: 1.5;

  h1 {
    color: var(--Marine-blue);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }

  @media screen and (min-width: 45rem) {
    font-size: 1.25rem;
    h2 {
      font-size: 2rem;
    }
  }
`;
