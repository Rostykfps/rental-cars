import styled from 'styled-components';

export const CarsItem = styled.li`
  width: 274px;
  height: 426px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
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
`;

export const ItemTitle = styled.p`
  margin: 0;
`;

export const ModelSpan = styled.span`
  margin: 0;
`;

export const Price = styled.p`
  margin-bottom: 0px;
  margin-right: 5px;
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
`;
