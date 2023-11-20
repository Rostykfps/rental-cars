import styled, { keyframes } from 'styled-components';

export const shakeAnimation = keyframes`
  0% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(3%);
  }
`;

export const lineAnimation = keyframes`
  0% {
    stroke-dashoffset: 22;
  }

  25% {
    stroke-dashoffset: 22;
  }

  50% {
    stroke-dashoffset: 0;
  }

  51% {
    stroke-dashoffset: 0;
  }

  80% {
    stroke-dashoffset: -22;
  }

  100% {
    stroke-dashoffset: -22;
  }
`;

export const LoaderWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarSvg = styled.svg`
  transform: translate(2px, 1px);
`;

export const CarBody = styled.path`
  animation: ${shakeAnimation} 0.2s ease-in-out infinite alternate;
`;

export const CarLine = styled.path`
  transform-origin: center right;
  stroke-dasharray: 22;
  animation: ${lineAnimation} 0.8s ease-in-out infinite;
  animation-fill-mode: both;

  &--top {
    animation-delay: 0s;
  }

  &--middle {
    animation-delay: 0.2s;
  }

  &--bottom {
    animation-delay: 0.4s;
  }
`;

export const CarWheel = styled.ellipse`
  stroke-width: 3.2;
  fill: #fff;
`;

export const CarWheelLeft = styled(CarWheel)`
  cx: 83.493px;
  cy: 30.25px;
  rx: 6.922px;
  ry: 6.808px;
`;

export const CarWheelRight = styled(CarWheel)`
  cx: 46.511px;
  cy: 30.25px;
  rx: 6.922px;
  ry: 6.808px;
`;

export const CarLineTop = styled(CarLine)`
  stroke-width: 3;
`;

export const CarLineMiddle = styled(CarLine)`
  stroke-width: 3;
`;

export const CarLineBottom = styled(CarLine)`
  stroke-width: 3;
`;
