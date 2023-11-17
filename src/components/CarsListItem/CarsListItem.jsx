import DescriptionList from '../DescriptionList/DescriptionList';
import {
  CarImage,
  CarsItem,
  IconButton,
  ImageWrapper,
  ItemTitle,
  LearnMoreBtn,
  ModelSpan,
  Price,
  TitleWrapper,
} from './CarsListItem.styled';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const CarsListItem = ({ data }) => {
  return (
    <CarsItem>
      <ImageWrapper>
        <CarImage src={data.img} alt="Car" width="200" />
        <IconButton type="button">
          <FavoriteIcon />
        </IconButton>
      </ImageWrapper>
      <TitleWrapper>
        <ItemTitle>
          {data.make} <ModelSpan>{data.model}</ModelSpan>, {data.year}
        </ItemTitle>
        <Price>{data.rentalPrice}</Price>
      </TitleWrapper>
      <DescriptionList data={data} />
      <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
    </CarsItem>
  );
};

export default CarsListItem;
