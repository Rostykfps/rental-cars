import CarsListItem from '../../components/CarsListItem/CarsListItem';
import { useGetCarsByPageQuery } from '../../services/apiService';
import { CarsList } from './CatalogPage.styled';

const CatalogPage = () => {
  const { data } = useGetCarsByPageQuery();
  console.log('data >> ', data);

  return (
    <CarsList>
      {data?.map((item, index) => (
        <CarsListItem data={item} key={index} />
      ))}
    </CarsList>
  );
};

export default CatalogPage;

{
  /* <li key={index}>{item.make}</li>  */
}
