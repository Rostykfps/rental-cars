import styled from 'styled-components';
import Select from 'react-select';

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

const baseSelectStyles = `
  .react-select__control {
    height: 48px;
    padding: 14px 18px;
    margin-top: 8px;
    display: flex;
    align-content: center;
    background-color: #f7f7fb;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 14px;
    border: none;
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
  .react-select__placeholder {
    margin: 0;
    color: #121417;
  }
  .react-select__value-container {
    padding: 0;
  }

  .react-select__input-container {
    margin: 0;
    padding: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__clear-indicator {
    padding: 0;
  }

  .react-select__dropdown-indicator {
    padding: 0;
    color: #121417;
  }

  .react-select__option {
    background-color: transparent;
    padding: 0px 0px 8px 0px;
    /* padding-bottom: 8px; */
  }

  .react-select__menu {
    width: 100%;
    padding: 14px 8px 14px 18px;
    margin-top: 4px;
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    background-color: #fff;
    border-radius: 14px;
  }

   .react-select__single-value {
    margin:0;
  }

  .react-select__menu-list {
    background-color: transparent;

    &::-webkit-scrollbar {
      width: 8px;
      height: 66px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(18, 20, 23, 0.05);
      border-radius: 10px;
    }
  }
`;

export const MakeSelect = styled(Select)`
  ${baseSelectStyles}
  .react-select__control {
    width: 224px;
  }

  .react-select__menu {
    max-height: 272px;
  }

  .react-select__menu-list {
    max-height: 244px;
  }
`;

export const PriceSelect = styled(Select)`
  ${baseSelectStyles}
  .react-select__control {
    /* width: 125px; */
    width: 145px;
  }

  .react-select__menu {
    max-height: 188px;
  }

  .react-select__menu-list {
    max-height: 160px;
  }
`;

export const customStyles = {
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color:
      state.isSelected || state.isFocused
        ? '#121417'
        : 'rgba(18, 20, 23, 0.20)',
  }),
};

export const InputsBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledInputSpan = styled.span`
  position: absolute;
  top: 22px;
  left: 24px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const StyledInputFrom = styled.input`
  width: 160px;
  margin-top: 8px;
  padding: 14px 24px 14px 72px;
  border: none;
  background-color: #f7f7fb;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  outline: none;
`;

export const StyledInputTo = styled.input`
  width: 160px;
  margin-top: 8px;
  padding: 14px 24px 14px 48px;
  border: none;
  background-color: #f7f7fb;
  border-radius: 0px 14px 14px 0px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  outline: none;
`;

export const StyledButton = styled.button`
  width: 136px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
