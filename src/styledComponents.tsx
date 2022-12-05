import styled from "styled-components";

export const BorderlessInput = styled.input`
  border-width: 0;
  outline: 0;
  width: ${(props) => (props.width ? `${props.width}rem` : undefined)};
`;

export const FocussedBox = styled.div`
  border: #333 1px solid;
  padding: 5px;
  margin: 5px;
`;

export const UnfocussedBox = styled.div`
  border: #333 1px solid;
  padding: 5px;
  margin: 5px;
`;
