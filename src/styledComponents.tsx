import styled from "styled-components";

export const BorderlessInput = styled.input`
  border-width: 0;
  width: ${(props) => (props.width ? `${props.width}rem` : undefined)};
`;
