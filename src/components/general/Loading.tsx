import {
  Container,
  Box,
  Typography,
} from '@mui/material';
import styles from '../../styles/Loading.module.scss';

const Loading = (props: { noOopaLoompas?: boolean; }) => (
  <Container className={styles.container}>
    <Box sx={{
      position: 'absolute',
      top: '50%',
      textAlign: 'center',
      width: '100%',
    }}>
      {!props.noOopaLoompas && (
        <Typography
          variant='h4'
          sx={{ textAlign: 'center' }}
        >
          The Oompa Loompas are busy fetching your data!!
        </Typography>
      )}
      <Box className={styles.loader} />
    </Box>
  </Container>
);

export default Loading;
