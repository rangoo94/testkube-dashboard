import styled from 'styled-components';
import {Collapse} from 'antd';

// export const StyledTestDescriptionContainer = styled(Drawer)`
//   display: flex;
//   flex-direction: column;
//   width: 40vw;
//   background: var(--color-dark-quaternary);
// `;
export const StyledTestDescriptionContainer = styled.div`
  display: flex;
  align-items: baseline;
    justify-content: space-between;
`;

// export const StyledTestStatusImage = styled.div`
//   position: relative;
//   top: 70px;
//   left: var(--space-lg2);
// `;

export const StyledTestOutputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-right: var(--space-lg);
  margin-left: var(--space-md);
  position: relative;
  top: 60px;
  left: var(--space-lg2);
`;

// export const StyledTestOutputDescription = styled.div`
//   display: flex;
//   align-items: baseline;
//   justify-content: space-between;

//   &:nth-child(1) {
//     margin-right: var(--space-md);
//   }
// `;

export const StyledPlainTextOutputContainer = styled.div`
  width: 550px;
  height: 446px;
  overflow: scroll;
  background-color: var(--color-dark-secondary);
`;

export const StyledTestOutput = styled.span`
  white-space: pre-line;
  color: white;
  text-shadow: 0 0 5px #c8c8c8;
  text-align: left;

  &::selection {
    background: #0080ff;
    text-shadow: none;
  }
`;

export const StyledText = styled.pre`
  display: flex;
`;

export const StyledTestStepsOutPutContainer = styled.div`
  width: 550px;
  height: 90%;
  overflow: scroll;

  // TESTING MEDIA SCREENS
  /* @media only screen and (min-width: 425px) {
    height: 50vh;
  }*/
  /* @media only screen and (min-width: 768px) {
    height: 50%;
  }
  @media only screen and (min-width: 1024px) {
    height: 70%;
  }
  @media only screen and (min-width: 1440px) {
    height: 85%;
  }
  @media only screen and (min-width: 2500px) {
    height: 90%;
  } */
`;

export const StyledTestStepNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
  height: 38px;
  border: 1px solid var(--color-gray-senary);
  border-radius: 3px;
  background: var(--color-gray-dark);
  color: var(--color-light-primary);
  cursor: pointer;
`;

export const StyledTestStepName = styled.span`
  margin-left: 15px;
  font-size: 14px;
`;

export const StyledTestAssertionResultsContainer = styled.div`
  display: flex;
  color: var(--color-light-primary);
  margin-bottom: 5px;
  overflow: hidden;
  background: var(--color-dark-tertiary)
`;

export const StyledTestStepAssertionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--font-size-sm);
  margin-left: var(--space-md);
`;

export const StyledTestOutputNameAndStatus = styled.div`
  display: flex;
`;

export const StyledTestOutputAssertionName = styled.span`
  margin-left: var(--space-xxs);
  font-size: var(--font-size-sm);
  color: var(--color-light-primary);
`;

export const StyledTestOutputAssertionErrorMessage = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-light-primary);
`;

export const StyledCollapse = styled(Collapse.Panel)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    border: none;
    height: 100%;
  }

  background: var(--color-gray-dark);
`;

export const StyledTestWithoutAssertions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  background: var(--color-dark-tertiary);
  margin-top: 5px;
  margin-bottom: var(--space-xxs);
  color: var(--color-light-primary);
  cursor: pointer;
  padding-left: var(--space-md);
`;

export const TestsWithoutStepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-md);
  height: var(--space-x1l);
  background: #ff4d4fb3;
  color: var(--color-light-primary);
  width: 550px;

  @media screen and (min-width: 2560px) {
    width: 95%;
  }
`;

export const StyledShowFailedStepsContainer = styled.div`
  display: flex;
  /* margin-left: 383px; */
`;

export const StyledLabelledFailedOnlyCheckbox = styled.label`
  font-size: 14px;
  color: var(--color-gray-primary);
`;

export const StyledFailedOnlyCheckbox = styled.input`

`;
