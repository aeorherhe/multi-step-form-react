import styled from "styled-components";
// import Header from "../utils/Header";

const ThankYou = () => {
  return (
    <StyledThankYou>
      <img src="/images/icon-thank-you.svg" alt="" />
      <h1>Thank you</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </StyledThankYou>
  );
};
export default ThankYou;

// const StyledThankYou = ;

const StyledThankYou = styled.section`
  padding: 2rem;
  text-align: center;
  width: 80vw;
  margin: 2rem auto;
  max-width: 50rem;
  line-height: 1.25;
  background-color: var(--White);
  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius);

  h1 {
    color: var(--Marine-blue);
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }

  p {
    color: var(--Cool-gray);
  }
`;
