import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import xIcon from '../../assets/images/x-icon.svg';
import {
  CloseButton,
  CloseIcon,
  ModalContainer,
  StyledModal,
} from './ModalWindow.styled';

const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <div>
      <StyledModal open={isOpen} onClose={isClose}>
        <ModalContainer>
          <CloseButton type="button" onClick={isClose}>
            <CloseIcon src={xIcon} alt="Close button" />
          </CloseButton>
          {children}
        </ModalContainer>
      </StyledModal>
    </div>
  );
};

export default ModalWindow;
