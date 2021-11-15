import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { StyledHeader } from '../styles.js';

const Header = (props) => {

    return (
        <StyledHeader>
            <Link to="/"> <h1>Career Post</h1> </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>Hi, {props.user.displayName} !</li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                            <Link to="/applications">Applications</Link>
                            </li>
                            <li>
                            <Link to="/contacts">Contacts</Link>
                            </li>
                             <li>
                                <img 
                                    src={props.user.photoURL} 
                                    alt={props.user.displayName} 
                                />
                            </li>
                            <li onClick={logOut}>Logout</li>
                        </>
                        :<>
                       <li>
                            <Link to="/login">Login</Link>
                        </li>
                        </>
                    }
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;