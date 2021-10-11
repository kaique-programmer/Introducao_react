import { Link } from 'react-router-dom';

const Menu = () => (
  <nav
    style={{
      width: '100%',
      height: '60px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/Abc">Abc</Link>
  </nav>
);

export default Menu;
