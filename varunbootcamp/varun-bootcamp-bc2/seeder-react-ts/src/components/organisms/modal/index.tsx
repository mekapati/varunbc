import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '../../atoms/button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '../../../../public/assets/icons/cross.svg';
import Icon from '../../atoms/icon';
import { styled } from '@mui/material/styles';
const CustomDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    maxWidth: '700px',
    borderRadius: '12px',
  },
});
interface ModalProps {
  open: boolean;

  handleClose: () => void;
  children: React.ReactNode;
  heading: string;
  subHeading: string;
  submitLabel: string;
  onSubmit: () => void;
  disabled: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  handleClose,
  heading,
  subHeading,
  submitLabel,
  children,
  onSubmit,
  disabled,
}) => {
  return (
    <>
      <CustomDialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          sx={{
            borderRadius: '12px',
            backgroundColor: '#262529',
            border: 'border: 1px solid #28272B',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '640px',
          }}
        >
          <DialogTitle
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="heading1" sx={{ color: '#E8E7F0' }}>
                {heading}
              </Typography>
              <Typography variant="heading2" sx={{ color: '#A5A5A6' }}>
                {subHeading}
              </Typography>
            </Box>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              data-testid="dialogCloseElement"
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#fff',
              }}
            >
              <Icon src={CloseIcon} />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ marginTop: '24px' }}>{children}</DialogContent>
          <DialogActions sx={{ marginTop: '24px', marginBottom: '20px' }}>
            <Button
              variant="contained"
              style={{
                borderRadius: '12px',
                backgroundColor: '#2D2D30',
                padding: '20px 40px',
                width: '133px',
                height: '60px',
              }}
              data-testid="closeModal"
              onClick={handleClose}
            >
              <Typography variant="button" sx={{ color: '#C9C8CC' }}>
                Cancel
              </Typography>
            </Button>
            <Button
              variant="contained"
              onClick={onSubmit}
              style={{
                borderRadius: '12px',
                backgroundColor: '#6C5DD3',

                width: '208px',
                height: '60px',
              }}
              data-testid="submitCashKick"
              disabled={disabled}
            >
              <Typography variant="button" sx={{ color: '#C9C8CC' }}>
                {submitLabel}
              </Typography>
            </Button>
          </DialogActions>
        </Box>
      </CustomDialog>
    </>
  );
};

export default Modal;
