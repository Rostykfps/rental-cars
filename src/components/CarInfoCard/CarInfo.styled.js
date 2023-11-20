import styled from 'styled-components';

export const Container = styled.div``;

export const StyledImage = styled.img`
  width: 461px;
  height: 248px;
  background-color: #f3f3f2;
  object-fit: cover;
  border-radius: 14px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const ModelSpan = styled.span`
  margin: 0;
  color: #3470ff;
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* margin-bottom: 14px; */
`;

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

export const DescText = styled.p`
  margin-top: 14px;
  margin-bottom: 0;
  color: #121417;
  font-size: 14px;
  line-height: 1.43;
`;

export const DescTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  /* letter-spacing: -0.24px; */
`;

export const ConditionsSpan = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  /* letter-spacing: -0.24px; */
`;
export const StyledLink = styled.button`
  width: 168px;
  padding: 12px 50px;
  margin-top: 24px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
