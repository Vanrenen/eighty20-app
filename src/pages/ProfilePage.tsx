import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/general/Header';
import Profile from '../components/Profile';

const ProfilePage = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header title='Profile' itemName='Welcome' itemAction={() => navigate(`/welcome`)} />
      <Profile />
    </Container>
  )
};

export default ProfilePage;