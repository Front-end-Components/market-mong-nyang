import { Outlet } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';

function App() {
  let loading = useSelector((state) => {
    return state;
  });
  return (
    <div className='relative'>
      {loading ? <Loading /> : null}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
