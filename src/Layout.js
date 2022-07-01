import { Outlet, Link } from "react-router-dom";
import "./App.css";

const Layout = () => {
  return (
    <>
      <nav>
          <ul style={{fontSize:35}}>
        <li>
          <Link to="/home1" class="active">
            Home
          </Link>
        </li>

        <li>
          <Link to="/users1">Users</Link>
        </li>

        <li>
          <Link to="/contact1">Conatct Us</Link>
        </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
