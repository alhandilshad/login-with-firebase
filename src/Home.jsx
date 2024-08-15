import { auth } from './firebase'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  console.log(auth.currentUser.email, 'auth');

  const handleLogout = () => {
    localStorage.removeItem('users');
    auth.signOut();
    navigate('/signin');
  }
  return (
    <>
    <h1>Home Page</h1>
    <p>{auth.currentUser.email.split('@')[0]}</p>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home;