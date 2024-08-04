import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/general/Header';
import Welcome from '../components/Welcome';

const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header title='Welcome' itemName='Profile' itemAction={() => navigate(`/profile`)} />
      <Welcome />
    </Container>
  )
};

export default WelcomePage;