import { useEffect, useState } from 'react';
import CarsListItem from '../../components/CarsListItem/CarsListItem';
import { CarsList, Container, StyledButton, Title } from './CatalogPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdverts,
  selectIsLoading,
  selectPage,
} from '../../redux/adverts/selectors';
import { getCarsByPageThunk } from '../../redux/adverts/operation';
import { setPage } from '../../redux/adverts/slice';
import Filter from '../../components/Filter/Filter';
import {
  selectFromMileage,
  selectIsFilter,
  selectMake,
  selectPrice,
  selectToMileage,
} from '../../redux/filter/selectors';
import { setIsFilter } from '../../redux/filter/slice';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const advertsList = useSelector(selectAdverts);
  const make = useSelector(selectMake);
  const price = useSelector(selectPrice);
  const fromMileage = useSelector(selectFromMileage);
  const toMileage = useSelector(selectToMileage);
  const isFilter = useSelector(selectIsFilter);
  const isLoading = useSelector(selectIsLoading);
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 1 && advertsList.length === 0) {
      dispatch(getCarsByPageThunk({ page }));
    }
  }, [advertsList.length, dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(setIsFilter(false));
    };
  }, []);

  const handleLoadMore = (event) => {
    event.preventDefault();
    const newPage = page + 1;
    dispatch(setPage(newPage));
    dispatch(getCarsByPageThunk({ page: newPage }));
  };

  useEffect(() => {
    const filteredAdverts = advertsList.filter((advert) => {
      if (make && advert.make !== make) {
        return false;
      }

      if (price > 10 && +advert.rentalPrice.replace('$', '') > price) {
        return false;
      }

      if (fromMileage && advert.mileage < fromMileage) {
        return false;
      }

      if (toMileage && advert.mileage > toMileage) {
        return false;
      }

      return true;
    });

    if (filteredAdverts.length > 0) {
      setFilteredAdverts(filteredAdverts);
      return;
    }
    setFilteredAdverts([]);
  }, [dispatch, fromMileage, make, price, toMileage]);

  return (
    <Container>
      <Title>Car Catalog</Title>
      <Filter />
      {!isLoading && (
        <CarsList>
          {isFilter && filteredAdverts
            ? filteredAdverts.map((item, index) => (
                <CarsListItem data={item} key={index} />
              ))
            : advertsList?.map((item, index) => (
                <CarsListItem data={item} key={index} />
              ))}
        </CarsList>
      )}
      {isLoading && <Loader />}
      {!isLoading && !isFilter && advertsList?.length % 12 === 0 && (
        <StyledButton type="button" onClick={handleLoadMore}>
          Load more
        </StyledButton>
      )}
    </Container>
  );
};

export default CatalogPage;
