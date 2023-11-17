import { useEffect } from 'react';
import CarsListItem from '../../components/CarsListItem/CarsListItem';
import { CarsList, Container, StyledButton } from './CatalogPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectPage } from '../../redux/adverts/selectors';
import { getCarsByPageThunk } from '../../redux/adverts/operation';
import { setPage } from '../../redux/adverts/slice';
import Filter from '../../components/Filter/Filter';

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const advertsList = useSelector(selectAdverts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsByPageThunk({ page }));
  }, [dispatch, page]);
  const handleLoadMore = () => {
    dispatch(setPage());
  };

  return (
    <Container>
      <Filter />
      <CarsList>
        {advertsList?.map((item, index) => (
          <CarsListItem data={item} key={index} />
        ))}
      </CarsList>
      {advertsList?.length % 12 === 0 && (
        <StyledButton type="button" onClick={handleLoadMore}>
          Load more
        </StyledButton>
      )}
    </Container>
  );
};

export default CatalogPage;
