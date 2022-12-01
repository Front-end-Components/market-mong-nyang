import { Outlet } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
