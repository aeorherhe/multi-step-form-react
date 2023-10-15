import styled, { css } from "styled-components";
import { flex } from "../../styles/GlobalStyles";
import { useFormContext } from "../../context/FormContext";
import { plans, addOns } from "../../assets/data";

const Progress = () => {
  const {
    dispatch,
    state: { selectedAddOn, selectedPlan, currentStep },
  } = useFormContext();

  const addOnPayload = addOns.filter((addOn) =>
    selectedAddOn.includes(addOn.id)
  );

  const planPayload = plans.find((plan) => plan.id === selectedPlan);

  return (
    <StyledProgess type={currentStep}>
      <button
        className="btn prev"
        onClick={() =>
          dispatch({
            type: "PREV_STEP",
          })
        }
      >
        {currentStep === 1 ? "reset" : "go back"}
      </button>

      <button
        className="btn next"
        onClick={() =>
          dispatch({
            type: "NEXT_STEP",
            payload: { addOnPayload, planPayload },
          })
        }
      >
        {currentStep === 4 ? "confirm" : "next step"}
      </button>
    </StyledProgess>
  );
};
export default Progress;

/********************** styled component *********************/
/********************** styled component *********************/

const StyledProgess = styled.section`
  ${flex};

  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow-2);
  max-width: 50rem;
  margin: 2rem auto;
  width: 100%;

  @media screen and (min-width: 50rem) {
    width: 100%;
    box-shadow: none;
  }

  .btn {
    letter-spacing: 0.15rem;
    text-transform: capitalize;
    font-size: 1rem;
    padding: 0.75rem 2rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    color: var(--White);
  }

  .next {
    background-color: var(--Marine-blue);

    &:hover {
      background-color: var(--Purplish-blue);
    }
  }

  .prev {
    ${(props) =>
      props.type === 1 &&
      css`
        visibility: hidden;
      `}
    background-color: var(--Alabaster);
    color: var(--Cool-gray);
  }
`;
