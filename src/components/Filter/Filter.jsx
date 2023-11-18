import Select from 'react-select';
import { StyledForm } from './filter.styled';
// import makes from '../../assets/makes.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectMake,
  selectPrice,
} from '../../redux/filter/selectors';
import { setFilter, setMake, setPrice } from '../../redux/filter/slice';
import { useState } from 'react';
import { selectAllAdverts } from '../../redux/adverts/selectors';

const Filter = () => {
  // const make = useSelector(selectMake);
  // const price = useSelector(selectPrice);
  const allAdvertsList = useSelector(selectAllAdverts);
  const filter = useSelector(selectFilter);
  const [make, setMake] = useState(null);
  const [price, setPrice] = useState(10);
  const dispatch = useDispatch();

  const priceRange = [];
  for (let i = 0; i <= 500; i += 10) {
    priceRange.push(i);
  }

  const makes = [...new Set(allAdvertsList.map((obj) => obj.make))].sort(
    (a, b) => a.localeCompare(b),
  );

  const handleChangeMake = (event) => {
    // dispatch(setMake(event?.value));
    setMake(event?.value);
  };

  const handleChangePrice = (event) => {
    // dispatch(setPrice(event?.value));
    setPrice(event?.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter({ ...filter, make, price }));
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Car brand
          <Select
            id="makes"
            type="text"
            name="makes"
            placeholder="Enter the text"
            onChange={handleChangeMake}
            isClearable={true}
            options={makes.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </label>
        <label>
          Price/ 1 hour
          <Select
            id="price"
            type="text"
            name="price"
            placeholder="To"
            onChange={handleChangePrice}
            isClearable={true}
            options={priceRange.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </label>
        <label>
          Сar mileage / km
          <div>
            <input />
            <input />
          </div>
        </label>
        <button type="submit">Search</button>
      </StyledForm>
    </div>
  );
};

export default Filter;
