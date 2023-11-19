import Select from 'react-select';
import {
  InputWrapper,
  InputsBlock,
  MakeSelect,
  PriceSelect,
  StyledButton,
  StyledForm,
  StyledInputFrom,
  StyledInputSpan,
  StyledInputTo,
  StyledLabel,
  customStyles,
} from './filter.styled';
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
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Car brand
          <MakeSelect
            id="makes"
            name="makes"
            classNamePrefix="react-select"
            styles={customStyles}
            placeholder="Enter the text"
            onChange={(selectedMake) => setMake(selectedMake)}
            isClearable={true}
            value={make}
            options={makes.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </StyledLabel>
        <StyledLabel>
          Price/ 1 hour
          <PriceSelect
            id="price"
            name="price"
            classNamePrefix="react-select"
            styles={customStyles}
            placeholder="To &nbsp;$"
            // onChange={handleChangePrice}
            onChange={(selectedPrice) => setPrice(selectedPrice)}
            // formatOptionLabel={formatOptionLabel}
            isClearable={true}
            // value={price}
            value={
              price && {
                label: `To  ${price?.label}$`,
                value: `${price?.value}`,
              }
            }
            options={priceRange.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </StyledLabel>
        <InputsBlock>
          <StyledLabel>
            Сar mileage / km
            <InputWrapper>
              <StyledInputSpan>From</StyledInputSpan>
              <StyledInputFrom
                type="text"
                // placeholder="From"
                value={formatMileage(fromMileage)}
                onChange={handleInputFromMileage}
              />
            </InputWrapper>
          </StyledLabel>
          <InputWrapper>
            <StyledInputSpan>To</StyledInputSpan>
            <StyledInputTo
              type="text"
              // placeholder="To"
              value={formatMileage(toMileage)}
              onChange={handleInputToMileage}
            />
          </InputWrapper>
        </InputsBlock>
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </>
  );
};

export default Filter;
