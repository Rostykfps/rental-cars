import noCarImage from '../../assets/images/no-car.png';

import {
  ConditionsItem,
  ConditionsList,
  ConditionsSpan,
  Container,
  DescItem,
  DescList,
  DescText,
  DescTitle,
  DescWrapper,
  ModelSpan,
  StyledImage,
  StyledLink,
  Title,
} from './CarInfo.styled';

const CarInfo = ({ data }) => {
  const rentalConditions = data.rentalConditions.split('\n');
  const [label, age] = rentalConditions[0].split(': ');

  return (
    <Container>
      <StyledImage
        src={data.img}
        onError={(event) => {
          event.currentTarget.src = noCarImage;
        }}
        alt="Car image"
      />
      <Title>
        {data.make} <ModelSpan>{data.model}</ModelSpan>, {data.year}
      </Title>
      <DescWrapper>
        <DescList>
          <DescItem>{data.address.split(',')[1]}</DescItem>
          <DescItem>{data.address.split(',')[2]}</DescItem>
          <DescItem>Id: {data.id}</DescItem>
          <DescItem>Year: {data.year}</DescItem>
          <DescItem>Type: {data.type}</DescItem>
        </DescList>
        <DescList>
          <DescItem>Fuel Consumption: {data.fuelConsumption}</DescItem>
          <DescItem>Engine Size: {data.engineSize}</DescItem>
        </DescList>
      </DescWrapper>
      <DescText>{data.description}</DescText>
      <DescTitle>Accessories and functionalities:</DescTitle>
      <DescWrapper>
        <DescList>
          {data.accessories.map((item, index) => (
            <DescItem key={index}>{item}</DescItem>
          ))}
        </DescList>
        <DescList>
          {data.functionalities.map((item, index) => (
            <DescItem key={index}>{item}</DescItem>
          ))}
        </DescList>
      </DescWrapper>
      <DescTitle>Rental Conditions: </DescTitle>
      <ConditionsList>
        <ConditionsItem>
          {label} : <ConditionsSpan>{age}</ConditionsSpan>
        </ConditionsItem>
        <ConditionsItem>{rentalConditions[1]}</ConditionsItem>
        <ConditionsItem>{rentalConditions[2]}</ConditionsItem>
        <ConditionsItem>
          Mileage:{' '}
          <ConditionsSpan>
            {data.mileage.toLocaleString('en-US')}
          </ConditionsSpan>
        </ConditionsItem>
        <ConditionsItem>
          Price:{' '}
          <ConditionsSpan>{data.rentalPrice.replace('$', '')}$</ConditionsSpan>
        </ConditionsItem>
      </ConditionsList>
      <StyledLink href="tel:+380730000000">Rental car</StyledLink>
    </Container>
  );
};

export default CarInfo;
