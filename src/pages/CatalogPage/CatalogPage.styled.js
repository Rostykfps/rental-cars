import styled from 'styled-components';

export const Container = styled.div`
  padding: 150px 128px;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

export const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding: 0;
  border: none;
  background: none;
  text-decoration: underline;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
