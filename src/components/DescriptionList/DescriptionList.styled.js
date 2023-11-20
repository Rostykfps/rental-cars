import styled from 'styled-components';

export const DescList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;

  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  line-height: 1.5;
  margin-left: -6px;
`;

export const DescItem = styled.li`
  padding-left: 6px;
  padding-right: 6px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;
