/* eslint-disable react/prop-types */

// external libraries
import styled from "styled-components";
import { plans } from "../../assets/data";
import { styledSection, flex } from "../../styles/GlobalStyles";
import { Billing, Header, BillingCycle } from "../utils";

// component
const Plans = () => {
  return (
    <StyledPlan>
      <Header>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </Header>
      <div className="billing-plans">
        {plans.map((plan) => (
          <Billing key={plan.plan} {...plan} />
        ))}
      </div>
      <BillingCycle type={"plans"} />
    </StyledPlan>
  );
};

export default Plans;

/******************* styled component **********************/
/******************* styled component **********************/
const StyledPlan = styled.section`
  ${styledSection}

  .billing-plans {
    ${flex}
    gap: 1.5rem;
    flex-direction: column;
    align-items: stretch;
    margin: 1rem 0;
    padding: 0.95rem;
  }

  @media screen and (min-width: 50rem) {
    .billing-plans {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;
