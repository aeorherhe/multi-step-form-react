/* eslint-disable react/prop-types */

// external libraries
// import { useState } from "react";
import styled from "styled-components";

import { addOns } from "../../assets/data";
import { styledSection, flex } from "../../styles/GlobalStyles";
import { SingleAddOn, Header } from "../utils";

const AddOns = () => {
  return (
    <StyledAddOns>
      <Header>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </Header>
      <div className="add-ons">
        {addOns.map((addOn) => {
          return <SingleAddOn key={addOn.title} {...addOn} />;
        })}
      </div>
    </StyledAddOns>
  );
};
export default AddOns;

/********************* styled component *************************/
/********************* styled component *************************/

const StyledAddOns = styled.section`
  ${styledSection}

  .add-ons {
    margin-top: 2rem;
    ${flex}
    gap: 2rem;
    flex-direction: column;
    align-items: stretch;
    line-height: 1.5;
  }
`;
