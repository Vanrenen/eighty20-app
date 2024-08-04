import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Box } from '@mui/material';
import { User } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import WelcomePage from './pages/WelcomePage';
import ProfilePage from './pages/ProfilePage';
import Loading from './components/general/Loading';

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
      <Router>
        <Routes>
          <Route path='/login' element={user ? <Navigate to='/welcome' /> : <Login />} />
          <Route path='/signup' element={user ? <Navigate to='/welcome' /> : <Signup />} />
          <Route path='/welcome' element={user ? <WelcomePage /> : <Navigate to='/login' />} />
          <Route path='/profile' element={user ? <ProfilePage /> : <Navigate to='/login' />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
      </Router>
      )}
    </Box>
  );
};

export default App;
