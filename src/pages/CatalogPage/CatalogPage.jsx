import { useEffect, useState } from 'react';
import CarsListItem from '../../components/CarsListItem/CarsListItem';
import { CarsList, Container, StyledButton } from './CatalogPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdverts,
  selectAllAdverts,
  selectPage,
} from '../../redux/adverts/selectors';
import {
  getAllCarsThunk,
  getCarsByPageThunk,
} from '../../redux/adverts/operation';
import { setPage } from '../../redux/adverts/slice';
import Filter from '../../components/Filter/Filter';
import {
  selectIsFilter,
  selectMake,
  selectPrice,
} from '../../redux/filter/selectors';
import { setIsFilter } from '../../redux/filter/slice';

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const advertsList = useSelector(selectAdverts);
  const allAdvertsList = useSelector(selectAllAdverts);
  const make = useSelector(selectMake);
  const price = useSelector(selectPrice);
  const isFilter = useSelector(selectIsFilter);
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllCarsThunk());
    if (page === 1 && advertsList.length === 0) {
      dispatch(getCarsByPageThunk({ page }));
      dispatch(getAllCarsThunk());
    }
  }, [dispatch, page]);

  const handleLoadMore = () => {
    const newPage = page + 1;
    dispatch(setPage(newPage));
    dispatch(getCarsByPageThunk({ page: newPage }));
  };

  useEffect(() => {
    const filteredAdverts = allAdvertsList.filter(
      (advert) => advert.make === make,
    );
    if (filteredAdverts.length > 0) {
      setFilteredAdverts(filteredAdverts);
      dispatch(setIsFilter(true));
      return;
    }
    setFilteredAdverts(filteredAdverts);
    dispatch(setIsFilter(false));
  }, [allAdvertsList, dispatch, make]);

  return (
    <Container>
      <Filter />
      <CarsList>
        {isFilter && filteredAdverts
          ? filteredAdverts.map((item, index) => (
              <CarsListItem data={item} key={index} />
            ))
          : advertsList?.map((item, index) => (
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
