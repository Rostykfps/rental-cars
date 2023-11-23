import { Container, StyledLink, StyledSection, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledSection>
      <Container>
        <Title>Drive the car of your dream</Title>
        <StyledLink to={'/catalog'}>Car Catalog</StyledLink>
      </Container>
    </StyledSection>
  );
};

export default HomePage;
