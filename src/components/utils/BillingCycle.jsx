/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { flex } from "../../styles/GlobalStyles";
import { useFormContext } from "../../context/FormContext";

// prettier-ignore
export function BillingCycle({  type,  }) {
    const { state:{ monthlyBilling }, dispatch } = useFormContext();

  return (
    <StyledBillingCycle type={monthlyBilling.toString()}>
      <label htmlFor={type} className="monthly">Monthly</label>
      <label htmlFor={type} className="ball-label"
      onClick={()=>{
        dispatch({
          type: "BILLING_CYCLE",
        });
      }}
      >
        <div className="ball"></div>
      </label>
      <label htmlFor={type} className="yearly">Yearly</label>
    </StyledBillingCycle>
  );
}

/********************* styled component *************************/
/********************* styled component *************************/
const StyledBillingCycle = styled.div`
  ${(props) =>
    props.type === "true" &&
    css`
      .monthly {
        color: var(--Marine-blue);
        font-weight: 700;
      }
    `}

  ${(props) =>
    props.type === "false" &&
    css`
      .yearly {
        color: var(--Marine-blue);
        font-weight: 700;
      }

      .ball {
        transform: translateX(25px);
      }
    `}


  ${flex}

  background-color: var(--Alabaster);
  padding: 1rem 3rem;
  border-radius: var(--border-radius);
  margin: 1rem auto;
  width: 90%;
  justify-content: center;

  input[type="checkbox"] {
    -webkit-appearance: none;
    display: none;
  }

  .label {
    cursor: pointer;
  }

  .ball-label {
    align-items: center;
    background: var(--Marine-blue);
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    height: 1.5rem;
    justify-content: flex-start;
    padding: 0 2px;
    width: 3rem;
  }

  .ball {
    background: var(--White);
    border-radius: 50%;
    height: 1.2rem;
    transition: var(--transition);
    width: 1.2rem;
  }

  /* input[type="checkbox"]:checked + .ball-label .ball {
    transform: translateX(25px);
  } */
`;
