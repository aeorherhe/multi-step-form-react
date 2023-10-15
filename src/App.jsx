// prettier-ignore
import styled, { css } from "styled-components";
import {
  ThankYou,
  PersonalInfo,
  Plans,
  FinishUp,
  AddOns,
  Steps,
  Progress,
} from "./components/ui";
import { useFormContext } from "./context/FormContext";

function App() {
  const {
    state: { currentStep },
  } = useFormContext();
  // console.log(currentStep);

  return (
    <StyledMain type={currentStep}>
      {currentStep !== "completed" && <Steps />}
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <Plans />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <FinishUp />}
      {currentStep === "completed" && <ThankYou />}
      {currentStep !== "completed" && <Progress />}
    </StyledMain>
  );
}

export default App;

/********************** styled component *********************/
/********************** styled component *********************/
const StyledMain = styled.main`
  background-image: url(/images/bg-sidebar-mobile.svg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.type === "completed" &&
    css`
      background-image: none;
    `}

  @media screen and (min-width: 50rem) {
    box-shadow: var(--box-shadow-2);
    border-radius: var(--border-radius-2);
    padding: 2rem;
    margin: 5rem auto;
    background: none;
    display: grid;
    grid-template-columns: auto 1fr;
    height: fit-content;
    justify-items: center;
    align-content: center;
    /* place-content: center;
    place-items: center; */
    min-width: fit-content;
    width: 80vw;
    max-width: 60rem;
  }

  /* font-size: 0.75rem;

  @media screen and (min-width: 50rem) {
    font-size: 1rem;
  } */
`;
