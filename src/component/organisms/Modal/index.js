import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonAtom from '../../atoms/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
    confirmText,
    handleButtonConfirm,
    handleCancelConfirm,
    buttonCofirm,
}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const closeModal = () => {
    handleClose();
    handleCancelConfirm();
  }
  const proceedModal = () => {
    handleClose();
    handleButtonConfirm();
  }

  return (
    <div>
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirmation
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {confirmText}
        </Typography>
        <div style={{display: 'flex', flexDirection:'row', gap: '20px', padding: '20px 0', justifyContent: 'flex-end'}}>
          <ButtonAtom
              onClick={() => (closeModal())}
              buttonText="Cancel"
              variant="contained"
              width='auto'
              btncolor='rgba(218, 238, 255, 1)'
              bordercolor='blue'
              color='blue'
          />
          <ButtonAtom
              onClick={() => (proceedModal())}
              buttonText={buttonCofirm}
              variant="contained"
              width='auto'
          />
        </div>
      </Box>
    </Modal>
    </div>
  );
}
