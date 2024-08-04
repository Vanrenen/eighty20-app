import { SetStateAction } from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebaseConfig';

export const isWelcomePage = () => {
  const urlRegex = window.location.pathname.match(/[^/]+$/);
  return (urlRegex && urlRegex[0]) === 'welcome';
};

export const reauthenticate = async (currentPassword: string, setError: { (value: SetStateAction<string>): void; (arg0: string): any; }) => {
  const user: firebase.User | null = auth.currentUser;

  if (!user) {
    return await setError('Could not change your password');
  } else {
    const cred = firebase.auth.EmailAuthProvider.credential((user.email as string), currentPassword);
    return user.reauthenticateWithCredential(cred);
  }
};

export const parsedErroressage = (errorMessage: string) => {
  return errorMessage.replace('Firebase: ', '').replace(/\((.*?)\)\./g, '');
};
