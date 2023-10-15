import styled from "styled-components";
import { flex } from "../../styles/GlobalStyles";
import { useFormContext } from "../../context/FormContext";

/* eslint-disable react/prop-types */
export function Billing({
  id,
  img,
  plan,
  pricing: { monthly, yearly },
  discount,
}) {
  const {
    state: { selectedPlan, monthlyBilling },
    dispatch,
  } = useFormContext();

  return (
    <StyledBilling
      className={selectedPlan === id && "selected"}
      onClick={() => dispatch({ type: "SELECTED_PLAN", payload: id })}
    >
      <img src={img} alt={plan} />
      <div className="bill">
        <h2>{plan}</h2>
        <p className="price">
          {monthlyBilling ? `${monthly}/mo` : `${yearly}/yr`}
        </p>
        <p className="discount">{monthlyBilling && discount}</p>
      </div>
    </StyledBilling>
  );
}

/********************* styled component *************************/
/********************* styled component *************************/
const StyledBilling = styled.div`
  ${flex}
  align-items: start;
  justify-content: flex-start;
  outline: var(--line);
  cursor: pointer;
  border-radius: var(--border-radius);
  padding: 0.5rem;
  gap: 1.5rem;
  line-height: 1.5;

  &:hover,
  &:focus {
    outline: 1px solid var(--Cool-gray);
  }

  h2 {
    font-size: 1.25rem;
    color: var(--Marine-blue);
    text-transform: capitalize;
  }

  .price {
    color: var(--Cool-gray);
  }

  .discount {
    color: var(--Marine-blue);
    font-weight: 700;
    white-space: nowrap;
  }

  &.selected {
    border: 1px solid var(--Purplish-blue);
    background-color: var(--Alabaster);
  }

  @media screen and (min-width: 50rem) {
    flex-direction: column;
    padding: 1.5rem;

    h2 {
      font-size: 2rem;
    }
  }
`;
