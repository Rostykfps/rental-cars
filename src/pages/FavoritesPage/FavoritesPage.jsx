import { useSelector } from 'react-redux';
import { CarsList, Container, Title } from '../CatalogPage/CatalogPage.styled';
import { selectFavorites } from '../../redux/favorite/selectors';
import CarsListItem from '../../components/CarsListItem/CarsListItem';
import { Message, StyledImage } from './FavoritesPage.styled';
import favoriteCarImg from '../../assets/images/favorite-car.png';

const FavoritesPage = () => {
  const favoritesCars = useSelector(selectFavorites);

  return (
    <Container>
      <Title>Favorite Car List</Title>
      {favoritesCars.length ? (
        <CarsList>
          {favoritesCars.map((item, index) => (
            <CarsListItem data={item} key={index} />
          ))}
        </CarsList>
      ) : (
        <>
          <Message>Your favorite car list is empty...</Message>
          <StyledImage src={favoriteCarImg} alt="Favorite car" />
        </>
      )}
    </Container>
  );
};

export default FavoritesPage;
