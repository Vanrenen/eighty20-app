import { useCallback, useState } from 'react';
import { auth } from '../firebaseConfig';
import { parsedErroressage } from '../utils/utils';

export const useSignup = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const signup = useCallback(
    async (email: string, password: string) => {
      setLoading(true);

      await auth.createUserWithEmailAndPassword(email, password)
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

  return {error, loading, signup}
};
