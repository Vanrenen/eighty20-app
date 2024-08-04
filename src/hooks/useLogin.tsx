import { useCallback, useState } from 'react';
import { auth } from '../firebaseConfig';
import { parsedErroressage } from '../utils/utils';

export const useLogin = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);

      await auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        window.localStorage.setItem('token', (result as any).user._delegate.accessToken);
      }).catch(error => {
        setError(parsedErroressage(error.message));
      }).finally(() => {
        setLoading(false);
      });
    },
    []
  )

  return {error, loading, login}
};

export const useLogout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const logout = useCallback(
    async () => {
      setLoading(true);

      await auth.signOut()
      .then(() => {
        window.localStorage.removeItem('token');
      }).catch(error => {
        setError(parsedErroressage(error.message));
      }).finally(() => {
        setLoading(false);
      });
    },
    []
  )

  return {loading, error, logout}
}