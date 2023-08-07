import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <h1 onClick={() => navigate('/')}>Movie Hub🍿</h1>
    </div>
  );
};

export default Navbar;
