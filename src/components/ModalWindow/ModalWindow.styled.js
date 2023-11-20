import { Modal } from '@mui/material';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  .MuiModal-backdrop {
    background-color: rgba(18, 20, 23, 0.5);
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow:
    0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

export const CloseButton = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  top: 16px;
  right: 16px;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
`;
