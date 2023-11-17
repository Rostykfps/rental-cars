import { useEffect, useState } from 'react';
import CarsListItem from '../../components/CarsListItem/CarsListItem';
import { useGetCarsByPageQuery } from '../../services/apiService';
import { CarsList, Container, StyledButton } from './CatalogPage.styled';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [advertsList, setAdvertsList] = useState([]);

  const { data } = useGetCarsByPageQuery(page);
  console.log('data >> ', data);
  useEffect(() => {
    if (data) setAdvertsList((prevData) => [...prevData, ...data]);
  }, [data]);
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <CarsList>
        {advertsList?.map((item, index) => (
          <CarsListItem data={item} key={index} />
        ))}
      </CarsList>
      {data?.length === 8 && (
        <StyledButton type="button" onClick={handleLoadMore}>
          Load more
        </StyledButton>
      )}
    </Container>
  );
};

export default CatalogPage;

{
  /* <li key={index}>{item.make}</li>  */
}
