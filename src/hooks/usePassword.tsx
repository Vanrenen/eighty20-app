import { useCallback, useState } from 'react';
import { auth } from '../firebaseConfig';
import { parsedErroressage, reauthenticate } from '../utils/utils';


export const usePasswordUpdate = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const updatePassword = useCallback(
    async (currentPassword: string, newPassword: string, setIsOpen: (arg0: boolean) => void, setIsSnackbarOpen: (arg0: boolean) => void) => {
      setLoading(true);

      if (currentPassword) {
        await reauthenticate(currentPassword, setError)
        .then(async () => {
          const user = auth.currentUser;
          if (user) {
            await user.updatePassword(newPassword);
            setIsOpen(false);
            setIsSnackbarOpen(true);
          };
        }).catch((error:{message:string}) => {

          setError(parsedErroressage(error.message));
        }).finally(() => {
          setLoading(false);
        });
     }
    },
    []
  )

  return {error, loading, updatePassword}
};
