import { DescItem, DescList } from './DescriptionList.styled';

const DescriptionList = ({ data }) => {
  return (
    <DescList>
      <DescItem>{data.address.split(',')[1]}</DescItem>
      <DescItem>{data.address.split(',')[2]}</DescItem>
      <DescItem>{data.rentalCompany}</DescItem>
      <DescItem>{data.type}</DescItem>
      <DescItem>{data.model}</DescItem>
      <DescItem>{data.id}</DescItem>
      <DescItem>{data.accessories[0]}</DescItem>
    </DescList>
  );
};

export default DescriptionList;
