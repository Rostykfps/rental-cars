import { useSelector } from 'react-redux';
import { CarsList, Container, Title } from '../CatalogPage/CatalogPage.styled';
import { selectFavorites } from '../../redux/favorite/selectors';
import CarsListItem from '../../components/CarsListItem/CarsListItem';
import { Message } from './FavoritesPage.styled';

const FavoritesPage = () => {
  const favoritesCars = useSelector(selectFavorites);
  console.log('favoritesCars :>> ', favoritesCars);

  return (
    <Container>
      <Title>Favorite Car List</Title>
      <CarsList>
        {favoritesCars.length ? (
          favoritesCars.map((item, index) => (
            <CarsListItem data={item} key={index} />
          ))
        ) : (
          <Message>Your favorite car list is empty...</Message>
        )}
      </CarsList>
      {/* {!isFilter && advertsList?.length % 12 === 0 && (
        <StyledButton type="button" onClick={handleLoadMore}>
          Load more
        </StyledButton>
      )} */}
    </Container>
  );
};

export default FavoritesPage;
