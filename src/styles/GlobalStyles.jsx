/* eslint-disable react-refresh/only-export-components */
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --box-shadow: 0 0 20px hsl(150, 100%, 66%);
  --box-shadow-2: 0px 0px 50px rgba(150, 150, 150, 0.3);
  --transition: all 0.3s linear;
  --transition2: all 0.5s linear;
  --border-radius: 0.5rem;
  --border-radius-2: 1rem;
  --line: 1px solid #d6d9e6;
  --line-2: 2px solid rgb(28, 28, 192);
  --line-3: 2px solid rgb(9, 224, 88);

  /* variables for this project */
  --White: #ffffff;
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);

    /* colors from the design */
  --Marine-blue: hsl(213, 96%, 18%);
  --Purplish-blue: hsl(243, 100%, 62%);
  --Pastel-blue: hsl(228, 100%, 84%);
  --Light-blue: hsl(206, 94%, 87%);
  --Strawberry-red: hsl(354, 84%, 57%);
  --Cool-gray: #9699ab;
  --Light-gray: #d6d9e6;
  --Magnolia: hsl(217, 100%, 97%);
  --Alabaster: hsl(231, 100%, 99%);
  --White: hsl(0, 0%, 100%);
}

body >div{
  display: grid;
  font-family: "Ubuntu", "Open Sans", Arial, Helvetica, sans-serif;
  height: 100vh;
}

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.5rem;
    }
  }
`;

export default GlobalStyles;

/************************** styled components *************************/
/************************** styled components *************************/

/************************** styled components *************************/
/************************** styled components *************************/

export const styledSection = css`
  background-color: var(--White);
  border-radius: var(--border-radius-2);
  border: var(--line);
  box-shadow: var(--box-shadow-2);
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  max-width: 50rem;
  padding: 1rem;

  @media screen and (min-width: 50rem) {
    padding: 2rem;
    margin: 2rem;
    box-shadow: none;
    border: none;
    margin: 0;
  }
`;

export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

/************************** styled components *************************/
/************************** styled components *************************/
