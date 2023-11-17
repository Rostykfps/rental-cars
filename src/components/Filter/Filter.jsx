import Select from 'react-select';
import { StyledForm } from './filter.styled';
import makes from '../../assets/makes.json';

const Filter = () => {
  return (
    <div>
      <StyledForm>
        <label>
          Car brand
          <Select
            name="makes"
            placeholder="Enter the text"
            isClearable={true}
            options={makes.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </label>
        <label>
          Price/ 1 hour
          <Select />
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
