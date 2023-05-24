import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <nav>
            <ul>
                <li>
                    <Link to="/test01">Home</Link>
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