import styled from "styled-components";
import Header from "../utils/Header";
import { styledSection } from "../../styles/GlobalStyles";

const PersonalInfo = () => {
  return (
    <StyledPersonalInfo>
      <Header>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number</p>
      </Header>
      <div className="form">
        <div className="input">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Test Example"
          />
        </div>
        <div className="input">
          <label htmlFor="email">email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. test@example.com"
          />
        </div>
        <div className="input">
          <label htmlFor="phone">phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </StyledPersonalInfo>
  );
};
export default PersonalInfo;

/************* styled component ****************/
/************* styled component ****************/

const StyledPersonalInfo = styled.section`
  ${styledSection}

  .form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    color: var(--Marine-blue);
    font-weight: 500;
    text-transform: capitalize;
  }

  input {
    border: var(--line);
    border-radius: var(--border-radius);
    padding: 1rem;
    color: var(--Cool-gray);
    font-size: 1.25rem;
    /* font-weight: 700; */
    letter-spacing: 0.05rem;
  }
`;
