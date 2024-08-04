import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import FormContainer from './general/FormContainer';
import styles from '../styles/Login.module.scss';
import { useLogin } from '../hooks/useLogin';
import Loading from './general/Loading';

const Login = () => {
  const {error, loading, login } = useLogin();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleLogin} className={styles.formContainer}>
        <FormContainer>
          <Typography variant='h1' gutterBottom>Login</Typography>
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
            fullWidth
            className={styles.button}
          >
            {loading ? <Loading noOopaLoompas/> : 'Login'}
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => navigate('/signup')}
            fullWidth
            className={styles.button}
            sx={{marginY: '25px'}}
          >
            Signup
          </Button>
        </FormContainer>
    </form>
  );
};

export default Login;
