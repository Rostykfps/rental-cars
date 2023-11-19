import DescriptionList from '../DescriptionList/DescriptionList';
import {
  CarImage,
  CarsItem,
  DescriptionWrapper,
  IconButton,
  ImageWrapper,
  ItemTitle,
  LearnMoreBtn,
  ModelSpan,
  Price,
  TitleWrapper,
} from './CarsListItem.styled';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import noCarImage from '../../assets/images/no-car.png';

const CarsListItem = ({ data }) => {
  return (
    <CarsItem>
      <ImageWrapper>
        <CarImage
          src={data.img}
          alt="Car"
          width="200"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = noCarImage;
          }}
        />
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
      <DescriptionWrapper>
        <DescriptionList data={data} />
        <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
      </DescriptionWrapper>
    </CarsItem>
  );
};

export default CarsListItem;
