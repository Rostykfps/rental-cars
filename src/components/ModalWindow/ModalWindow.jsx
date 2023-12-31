import xIcon from '../../assets/images/x-icon.svg';
import {
  CloseButton,
  CloseIcon,
  ModalContainer,
  StyledModal,
} from './ModalWindow.styled';

const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <StyledModal open={isOpen} onClose={isClose}>
      <ModalContainer>
        <CloseButton type="button" onClick={isClose}>
          <CloseIcon src={xIcon} alt="Close button" />
        </CloseButton>
        {children}
      </ModalContainer>
    </StyledModal>
  );
};

export default ModalWindow;
