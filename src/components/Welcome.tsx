import { Box, Typography } from '@mui/material';
import welcomeImage from '../assets/Welcome.png';
import styles from '../styles/Welcome.module.scss';

const Welcome = () => {
  return (
    <Box className={styles.container}>
      <Typography variant='h5'>You have arrived at the big Welcome page.</Typography>
      <Typography variant='body2'>From here you can go to your profile page by selecting 'My profile' in the header bar.</Typography>
      <Box className={styles.imageBox}>
        <img
          alt='Welcome'
          src={`${welcomeImage}?auto=format&w=350&dpr=2`}
          className={styles.welcomeImage}
        />
      </Box>
    </Box>
  );
};

export default Welcome;