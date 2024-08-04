import {
  AppBar,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { MouseEventHandler } from 'react';
import { useLogout } from 'hooks/useLogin';
import styles from '../../styles/Header.module.scss';

const Header = (props: {
  itemAction: MouseEventHandler<HTMLButtonElement> | undefined;
  itemName: string; title: string; 
}) => {
  const { logout } = useLogout();

  const logoutClicked = () => {
    logout();
  };

  return (
    <Box className={styles.headerContainer}>
    <AppBar position='static'>
      <Box className={styles.appBarContent}>
        <Box className={styles.titleContainer}>
          <Typography variant='h4' component='div' className={styles.title}>
            {props.title}
          </Typography>
        </Box>
        <Button
          color='inherit'
          onClick={logoutClicked}
          className={styles.button}
        >
          Logout
        </Button>
        <Button
          color='inherit'
          onClick={props.itemAction}
          className={styles.button}
        >
          {props.itemName}
        </Button>
      </Box>
    </AppBar>
  </Box>
  )
};

export default Header;