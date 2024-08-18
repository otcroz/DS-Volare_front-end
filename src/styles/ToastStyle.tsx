import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import styled from 'styled-components';
import { ReactComponent as InfoLogo } from '../assets/icons/nav_logo_icon.svg';

const defaultToastOption: ToastOptions = {
  position: 'bottom-center',
  autoClose: 2500,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
  theme: 'light',
};

export const Toast = {
  info: (message: string, options: ToastOptions = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      ...options,
      icon: <>✏️</>,
    });
  },
  success: (message: string, options: ToastOptions = {}) => {
    toast.success(message, { ...defaultToastOption, ...options });
  },
  error: (message: string, options: ToastOptions = {}) => {
    toast.error(message, { ...defaultToastOption, ...options });
  },
};

export const StyledToastConatiner = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${({ theme }) => theme.colors.ivory};
    font-family: 'BookkMyungjo';
  }

  // info
  .Toastify__toast--info {
    border: 2px solid ${({ theme }) => theme.colors.beige};
    color: ${({ theme }) => theme.colors.brown};
  }

  .Toastify__progress-bar--info {
    background-color: ${({ theme }) => theme.colors.brown};
  }

  // success
  .Toastify__toast--success {
    border: 2px solid ${({ theme }) => theme.colors.beige};
    color: ${({ theme }) => theme.colors.darkOlive};
  }

  .Toastify__progress-bar--success {
    background-color: ${({ theme }) => theme.colors.darkOlive};
  }
  // error
  .Toastify__toast--error {
    border: 2px solid ${({ theme }) => theme.colors.beige};
    color: ${({ theme }) => theme.colors.orange};
  }

  .Toastify__progress-bar--error {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
