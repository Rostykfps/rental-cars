import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heroImage from '../../assets/images/hero-image.jpg';

export const StyledSection = styled.section`
  height: calc(100vh - 69px);
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  position: absolute;
  top: 40%;
  right: 0;
  transform: translateX(-50%);
  color: #fff;
  font-size: 42px;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
