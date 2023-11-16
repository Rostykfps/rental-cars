import DescriptionList from '../DescriptionList/DescriptionList';
import {
  CarImage,
  CarsItem,
  ItemTitle,
  ModelSpan,
  Price,
  TitleWrapper,
} from './CarsListItem.styled';

const CarsListItem = ({ data }) => {
  return (
    <CarsItem>
      <CarImage src={data.img} alt="Car" width="200" />
      <TitleWrapper>
        <ItemTitle>
          {data.make} <ModelSpan>{data.model}</ModelSpan>, {data.year}
        </ItemTitle>
        <Price>{data.rentalPrice}</Price>
      </TitleWrapper>
      <DescriptionList data={data} />
    </CarsItem>
  );
};

export default CarsListItem;
