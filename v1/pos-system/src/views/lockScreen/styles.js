import styled from 'styled-components';
import { Container } from '../../globleStyles';

export const ViewContainer = styled(Container)`
  height: 100%;
  background-color: black;
`;

export const HeadingContainer = styled(Container)`
`;

export const Heading = styled.h2`
  color: white;
  font-size: 3rem;
  padding: 0;
  margin: 0 0 10px 0;
`;

export const SecondaryHeading = styled.h3`
  color: white;
  padding: 0;
  margin: 0;
`;

export const Input = styled.input`
  grid-column: 2/3;
  grid-row: 2/3;
  width: 90%;
  height: 33%;
  align-self: center;
  justify-self: center;
`;

export const PadContainer = styled(Container)``;

export const Paragraph = styled.p`
  color: white;
  width: 35%;
  margin: auto 20px;
`;
