import { FC, ReactNode } from 'react';
import {
  Container,
  Paper,
  Box,
} from '@mui/material';
import styles from '../../styles/FormContainer.module.scss';

interface FormInterface {
  children?: ReactNode;
};

const FormContainer: FC<FormInterface> = ({ children }) => (
  <Container className={styles.container} role='container'>
    <Box className={styles.innerBox}>
    <Paper className={styles.paper} role='paper'>
      <Box>
        {children}
      </Box>
    </Paper>
    </Box>
  </Container>
);

export default FormContainer;
