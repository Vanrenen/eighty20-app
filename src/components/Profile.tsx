import {
  Box,
  Button,
  Container,
  Snackbar,
  SnackbarCloseReason,
  Typography,
} from '@mui/material';
import { Fragment, useState } from 'react';
import ChangePasswordModal from './ChangePasswordModal';
import styles from '../styles/Profile.module.scss';

const Profile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  const action = (
    <Fragment>
      <Button color='secondary' size='small' onClick={handleClose}>
        X
      </Button>
    </Fragment>
  );

  return (
    <Container className={styles.container}>
      <Box className={styles.textContainer}>
        <Typography variant='h5'>You have reached your profile page</Typography>
        <Typography variant='body2'>Select the button below if you want to change your password</Typography>
      </Box>
      <Button variant='contained' onClick={() => setIsOpen(true)}>
        Change password
      </Button>
      <ChangePasswordModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message='Password updated'
        action={action}
      />
    </Container>
  )
};

export default Profile;