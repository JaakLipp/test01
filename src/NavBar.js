import { Link, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Maybe Useful?</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;