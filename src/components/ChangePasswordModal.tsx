
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { usePasswordUpdate } from 'hooks/usePassword';
import Loading from './general/Loading';
import styles from '../styles/ChangePasswordModal.module.scss';

const ChangePasswordModal = (
  props: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setIsSnackbarOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const { loading, error, updatePassword } = usePasswordUpdate();

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    updatePassword(currentPassword, newPassword, props.setIsOpen, props.setIsSnackbarOpen);
  };

  const close = () => {
    props.setIsOpen(false);
  }

  return (
    <Modal
      open={props.isOpen}
      onClose={props.setIsOpen}
    >
      <form onSubmit={handlePasswordUpdate} className={styles.form}>
        <h1>Update Password</h1>
        <input
          type='password'
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder='Current Password'
          required
          className={styles.input}
        />
        <input
          type='password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder='New Password'
          required
          className={styles.input}
        />
        <Box className={styles.errorBox}>
            {error && (
              <Typography variant='body1' color='error' gutterBottom>
                {error}
              </Typography>
            )}
          </Box>
        <Button
          variant='contained'
          type='submit'
          className={`${styles.button} ${styles.bottomButton}`}
          fullWidth
        >
          {loading ? <Loading noOopaLoompas/> : 'Update password'}
        </Button>
        <Button
          variant='contained'
          onClick={close}
          className={`${styles.button} ${styles.bottomButton}`}
          fullWidth
          sx={{marginY: '25px'}}
        >
          Close
        </Button>
      </form>
    </Modal>
  )
};

export default ChangePasswordModal;