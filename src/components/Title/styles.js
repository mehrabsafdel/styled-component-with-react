import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledTitle = styled.h1`
    font-size: 24px;
    color: ${props => props.type === 'h1' ? 'blue' : 'red'};
    &:hover {
        animation: ${rotate} 2s linear;
    }
`