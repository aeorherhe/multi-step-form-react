import styled from "styled-components";
import { flex } from "../../styles/GlobalStyles";
import { useFormContext } from "../../context/FormContext";

const Steps = () => {
  const {
    state: { steps, currentStep },
  } = useFormContext();

  return (
    <StyledSteps>
      {steps.map((step, index) => {
        return (
          <div key={index} className="step">
            <button className={`btn ${currentStep === index + 1 && "active"} `}>
              {index + 1}
            </button>
            <div className="title">
              <h4>Step {index + 1}</h4>
              <h3>{step}</h3>
            </div>
          </div>
        );
      })}
    </StyledSteps>
  );
};
export default Steps;

/********************** styled component *********************/
/********************** styled component *********************/

const StyledSteps = styled.section`
  padding: 2rem;
  ${flex};
  margin: 0 auto;
  gap: 2rem;
  justify-content: center;
  border-radius: var(--border-radius);

  .title {
    display: none;
  }

  @media screen and (min-width: 50rem) {
    flex-direction: column;
    background-image: url(/images/bg-sidebar-desktop.svg);
    background-repeat: no-repeat;
    align-items: stretch;
    justify-content: flex-start;
    background-size: cover;
    justify-self: left;
    grid-row: 1/3;
    margin: 0;
    text-transform: uppercase;

    .step {
      ${flex};
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      color: var(--Magnolia);
    }

    h4 {
      margin: 0.25rem 0;
      color: var(--Cool-gray);
    }

    .title {
      display: block;
    }
  }

  .btn {
    color: var(--Magnolia);
    font-weight: 700;
    font-size: 1.12rem;
    cursor: pointer;
    border: none;
    outline: var(--line);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: transparent;
  }

  .active {
    background-color: var(--Light-blue);
    color: var(--Marine-blue);
  }
`;
