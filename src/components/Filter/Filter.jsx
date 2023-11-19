import Select from 'react-select';
import { StyledForm } from './filter.styled';
// import makes from '../../assets/makes.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectMake,
  selectPrice,
} from '../../redux/filter/selectors';
import {
  setFilter,
  setIsFilter,
  setMake,
  setPrice,
} from '../../redux/filter/slice';
import { useState } from 'react';
import { selectAllAdverts } from '../../redux/adverts/selectors';

const Filter = () => {
  // const make = useSelector(selectMake);
  // const price = useSelector(selectPrice);
  const allAdvertsList = useSelector(selectAllAdverts);
  const filter = useSelector(selectFilter);
  const [make, setMake] = useState(null);
  const [price, setPrice] = useState(0);
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');
  const dispatch = useDispatch();

  const priceRange = [];
  for (let i = 10; i <= 500; i += 10) {
    priceRange.push(i);
  }

  const makes = [...new Set(allAdvertsList.map((obj) => obj.make))].sort(
    (a, b) => a.localeCompare(b),
  );

  // const handleChangeMake = (event) => {
  //   // dispatch(setMake(event?.value));
  //   console.log('event :>> ', event);
  //   if (!event?.value) {
  //     setMake(null);
  //     return;
  //   }
  //   setMake(event?.value);
  // };

  // const handleChangePrice = (event) => {
  //   // dispatch(setPrice(event?.value));
  //   if (!event?.value) {
  //     setPrice(0);
  //     return;
  //   }
  //   setPrice(event?.value);
  // };

  const handleInputFromMileage = (event) => {
    setFromMileage(event.target.value);
  };

  const handleInputToMileage = (event) => {
    setToMileage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(
    //   setFilter({ ...filter, make: make.value, price, fromMileage, toMileage }),
    // );
    if (make?.value || price?.value || fromMileage || toMileage) {
      dispatch(
        setFilter({
          ...filter,
          make: make?.value,
          price: price?.value,
          fromMileage: Number(fromMileage.replace(/,/g, '')),
          toMileage: Number(toMileage.replace(/,/g, '')),
        }),
      );
      dispatch(setIsFilter(true));
      return;
    }
    dispatch(setIsFilter(false));
  };

  // const options = makes.map((item) => ({
  //   label: item,
  //   value: item,
  // }));
  // console.log('options :>> ', options);
  // const formatOptionLabel = ({ label }, { context }) => (
  //   <div>
  //     {context === 'value' && <span>To </span>}
  //     {label}
  //     {context === 'value' && <span>$</span>}
  //   </div>
  // );

  const formatMileage = (number) => {
    const formatedNumber = number
      .toString()
      .replace(/,/g, '')
      .replace(/(\d)(?=(\d{3})+$)/g, '$1,');

    return formatedNumber;
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Car brand
          <Select
            id="makes"
            name="makes"
            placeholder="Enter the text"
            onChange={(selectedMake) => setMake(selectedMake)}
            isClearable={true}
            value={make}
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
            name="price"
            placeholder="To $"
            // onChange={handleChangePrice}
            onChange={(selectedPrice) => setPrice(selectedPrice)}
            // formatOptionLabel={formatOptionLabel}
            isClearable={true}
            // value={price}
            value={
              price && {
                label: `To ${price?.label}$`,
                value: `${price?.value}`,
              }
            }
            options={priceRange.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </label>
        <label>
          Сar mileage / km
          <div>
            <input
              type="text"
              placeholder="From"
              value={formatMileage(fromMileage)}
              onChange={handleInputFromMileage}
            />
            <input
              type="text"
              placeholder="To"
              value={formatMileage(toMileage)}
              onChange={handleInputToMileage}
            />
          </div>
        </label>
        <button type="submit">Search</button>
      </StyledForm>
    </div>
  );
};

export default Filter;
