import styled from 'styled-components';

export const Span = styled.span`
  background-color: ${({ isRed }) => (isRed ? 'red' : 'azure')};
`;

export const Text = styled.p`
  font-style: 16px;
  color: grey;
  font-weight: 500;

  &:hover {
    color: blue;
  }

  &:hover ${Span} {
    background-color: aqua;
  }
`;

export const Title = styled.h2`
  color: purple;
  font-weight: 600;
`;
