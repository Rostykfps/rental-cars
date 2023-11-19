import styled from 'styled-components';

export const CarsItem = styled.li`
  width: 274px;
  height: 426px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  background-color: #f7f7fb;
  border-radius: 14px;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const IconButton = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const ItemTitle = styled.p`
  margin: 0;
`;

export const ModelSpan = styled.span`
  margin: 0;
  color: #3470ff;
`;

export const Price = styled.p`
  margin-bottom: 0px;
  margin-right: 5px;
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  padding: 12px 99px;
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

export const DescriptionWrapper = styled.div`
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
