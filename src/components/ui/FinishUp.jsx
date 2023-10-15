import styled from "styled-components";
import Header from "../utils/Header";
import { styledSection, flex } from "../../styles/GlobalStyles";
import { useFormContext } from "../../context/FormContext";
import { prices } from "../../services/service";

const FinishUp = () => {
  const {
    state: { monthlyBilling, orders },
    dispatch,
  } = useFormContext();

  // check for orders
  if (orders.length < 1)
    return (
      <StyledFinishUp>
        <Header>
          <h1>Finishing up</h1>
          <p>No service selected</p>
        </Header>
      </StyledFinishUp>
    );

  const totalPrice = prices(orders, monthlyBilling);

  return (
    <StyledFinishUp>
      <Header>
        <h1>Finishing up</h1>
        <p>Finishing up Double-check everything looks OK before confirming. </p>
      </Header>
      <div className="summaries">
        {orders.map((order, index) => {
          const { plan, title, pricing } = order;
          return (
            <div className="summary" key={index}>
              <div className="plan">
                <h2>{title || plan}</h2>
                {plan && (
                  <p
                    className="change"
                    onClick={() => {
                      dispatch({ type: "TOGGLE_BILLING" });
                    }}
                  >
                    change
                  </p>
                )}
              </div>
              <div className="price">
                <p>{`$${
                  monthlyBilling
                    ? `${pricing.monthly}/mo`
                    : `${pricing.yearly}/yr`
                }`}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <h2>Total</h2>
        <p>${monthlyBilling ? `${totalPrice}/mo` : `${totalPrice}/yr`}</p>
      </div>
    </StyledFinishUp>
  );
};
export default FinishUp;

/********************* styled component *************************/
/********************* styled component *************************/

const StyledFinishUp = styled.section`
  ${styledSection}

  .summaries {
    margin: 2rem 0;
    ${flex}
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  .summary {
    text-transform: capitalize;
    padding: 1rem;
    border: var(--line);
    border-radius: var(--border-radius);
    ${flex}
  }

  .price {
    text-transform: none;
  }

  .total {
    ${flex}
    margin-top: 1rem;

    p {
      font-weight: 700;
      color: var(--Purplish-blue);
    }
  }

  .change {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
    cursor: pointer;

    &:hover {
      color: var(--Purplish-blue);
      font-weight: 700;
    }
  }
`;
