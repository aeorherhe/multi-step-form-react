import styled, { css } from "styled-components";
// import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { flex } from "../../styles/GlobalStyles";
import { useFormContext } from "../../context/FormContext";

/* eslint-disable react/prop-types */
export function SingleAddOn({ id, title, desc, pricing: { monthly, yearly } }) {
  const {
    state: { monthlyBilling, selectedAddOn },
    dispatch,
  } = useFormContext();

  return (
    <StyledSingleAddOn
      type={selectedAddOn.includes(id) ? "true" : "false"}
      onClick={() => {
        dispatch({ type: "SELECTED_ADDON", payload: id });
      }}
    >
      <label className="label">
        <div className="icon">
          {selectedAddOn.includes(id) && <AiOutlineCheck className="check" />}
        </div>
        <div className="service">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <p className="price">
          {monthlyBilling ? `${monthly}/mo` : `${yearly}/yr`}
        </p>
      </label>
    </StyledSingleAddOn>
  );
}

/********************* styled component *************************/
/********************* styled component *************************/
const StyledSingleAddOn = styled.div`
  ${flex}
  cursor: pointer;
  padding: 0.25rem;
  outline: var(--line);
  border-radius: var(--border-radius);

  .label {
    ${flex}
    align-items: center;
    gap: 1rem;
    width: 100%;
    cursor: pointer;
    padding: 0.75rem 1rem;
    border-radius: var(--border-radius);

    & ::first-letter {
      text-transform: uppercase;
    }
  }

  .icon {
    width: 2rem;
    height: 2rem;
    background-color: var(--White);
    border: var(--line);
    ${flex}
    align-items: center;
    justify-content: center;
  }

  /* props */
  ${(props) =>
    props.type === "true" &&
    css`
      outline: 1.25px solid var(--Purplish-blue);
      border: var(--line);
      background-color: var(--Alabaster);

      .icon {
        background-color: var(--Purplish-blue);
      }
    `}

  .service {
    h2 {
      font-size: 1.25rem;
      font-weight: 700;
    }

    p {
      color: var(--Cool-gray);
    }
  }

  .price {
    margin-left: auto;
    color: var(--Cool-gray);
    font-weight: 700;
  }

  .check {
    color: var(--White);
    height: 1.55rem;
    width: 1.55rem;
    margin: 0;
  }

  &:hover {
    outline: 1.25px solid var(--Purplish-blue);
  }

  @media screen and (min-width: 45rem) {
    font-size: 1.25rem;
    h2 {
      font-size: 2rem;
    }
  }
`;
