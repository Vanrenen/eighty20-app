import { useState, FormEvent } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import FormContainer from './general/FormContainer';
import { useNavigate } from 'react-router-dom';
import { useSignup } from 'hooks/useSignup';
import Loading from './general/Loading';
import styles from '../styles/Signup.module.scss';

const Signup = () => {
  const {signup, error, loading} = useSignup();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <form onSubmit={handleSignup} className={styles.formContainer}>
      <FormContainer>
        <Typography variant='h1' gutterBottom>Signup</Typography>
        <Box className={styles.gridBox}>
          <TextField
            label='email'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            margin='normal'
            fullWidth
            required
            className={styles.inputField}
          />
          <TextField
            label='password'
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            margin='normal'
            fullWidth
            required
            className={styles.inputField}
          />
        </Box>
        <Box className={styles.errorBox}>
          {error && (
            <Typography variant='body1' color='error' gutterBottom>
              {error}
            </Typography>
          )}
        </Box>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          className={styles.button}
        >
          {loading ? <Loading noOopaLoompas/> : 'Signup'}
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/login')}
          className={styles.button}
          sx={{marginY: '25px'}}
          fullWidth
        >
          Login
        </Button>
      </FormContainer>
    </form>
  );
};

export default Signup;
