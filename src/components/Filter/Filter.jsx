import {
  InputWrapper,
  InputsBlock,
  MakeSelect,
  PriceSelect,
  StyledAlert,
  StyledButton,
  StyledForm,
  StyledInputFrom,
  StyledInputSpan,
  StyledInputTo,
  StyledLabel,
  customStyles,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setFilter, setIsFilter } from '../../redux/filter/slice';
import { useState } from 'react';
import { selectAdverts } from '../../redux/adverts/selectors';

const Filter = () => {
  const advertsList = useSelector(selectAdverts);
  const filter = useSelector(selectFilter);
  const [make, setMake] = useState(null);
  const [price, setPrice] = useState(0);
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const priceRange = [];
  for (let i = 10; i <= 500; i += 10) {
    priceRange.push(i);
  }

  const makes = [...new Set(advertsList.map((obj) => obj.make))].sort((a, b) =>
    a.localeCompare(b),
  );

  const handleInputFromMileage = (event) => {
    setFromMileage(event.target.value);
  };

  const handleInputToMileage = (event) => {
    setToMileage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (make?.value || price?.value || fromMileage || toMileage) {
      if (
        toMileage &&
        Number(fromMileage.replace(/,/g, '')) >
          Number(toMileage.replace(/,/g, ''))
      )
        return setAlert(true);
      setAlert(false);
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

  const formatMileage = (number) => {
    const formatedNumber = number
      .toString()
      .replace(/,/g, '')
      .replace(/(\d)(?=(\d{3})+$)/g, '$1,');

    return formatedNumber;
  };

  return (
    <>
      {alert && (
        <StyledAlert severity="warning">
          The final mileage cannot be less than the initial mileage!
        </StyledAlert>
      )}
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
            onChange={(selectedPrice) => setPrice(selectedPrice)}
            isClearable={true}
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
                value={formatMileage(fromMileage)}
                onChange={handleInputFromMileage}
                pattern="^(\d+,)*\d+$"
                title="Mileage must be only numbers"
              />
            </InputWrapper>
          </StyledLabel>
          <InputWrapper>
            <StyledInputSpan>To</StyledInputSpan>
            <StyledInputTo
              type="text"
              value={formatMileage(toMileage)}
              onChange={handleInputToMileage}
              pattern="^(\d+,)*\d+$"
              title="Mileage must be only numbers"
            />
          </InputWrapper>
        </InputsBlock>
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </>
  );
};

export default Filter;
