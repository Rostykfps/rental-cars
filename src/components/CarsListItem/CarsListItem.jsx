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
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorite/selectors';
import { addFavorite, removeFavorite } from '../../redux/favorite/slice';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useState } from 'react';
import CarInfo from '../CarInfoCard/CarInfo';

const CarsListItem = ({ data }) => {
  const favoritesCars = useSelector(selectFavorites);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const isFavorite = favoritesCars.some((car) => car.id === data.id);

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addFavorite(data));
      return;
    }
    dispatch(removeFavorite(data));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
        <IconButton type="button" onClick={handleClick}>
          <FavoriteIcon isFavorite={isFavorite} />
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
        <LearnMoreBtn type="button" onClick={handleOpenModal}>
          Learn more
        </LearnMoreBtn>
      </DescriptionWrapper>
      <ModalWindow isOpen={isModalOpen} isClose={handleCloseModal}>
        <CarInfo data={data} />
      </ModalWindow>
    </CarsItem>
  );
};

export default CarsListItem;
