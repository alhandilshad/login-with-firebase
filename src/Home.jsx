import { auth } from './firebase'
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-100 flex">
      <section className="bg-white shadow flex flex-col justify-between py-10 w-72 items-center">
        <div className='flex flex-col gap-6 items-center justify-center'>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <img src='/images.png'></img>
        </div>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </section>

      <div className="flex flex-col w-full">
          <div className="bg-white p-6 rounded-md w-[70%] h-[20vh] mt-10 ml-16">
            <h2 className="text-xl font-bold mb-4">Profile Overview</h2>
            <p className="text-gray-600">Username: {auth.currentUser.email.split('@')[0]}</p>
            <p className="text-gray-600">Email: {auth.currentUser.email}</p>
          </div>
        <div className='flex gap-40 mt-16 ml-16'>
          <div className="bg-white p-6 rounded shadow w-[30%] h-[30vh]">
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            <ul className='mb-4'>
              <li className="mb-2">Post 1</li>
              <li className="mb-2">Post 2</li>
              <li className="mb-2">Post 3</li>
            </ul>
            <Link to="/viewPosts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View All Posts</Link>
          </div>
          <div className="bg-white p-6 rounded shadow w-[30%] h-[30vh]">
            <h2 className="text-xl font-bold mb-4">Create New Post</h2>
            <Link to="/newPost" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">New Post</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;