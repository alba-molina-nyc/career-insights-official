import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';


const Header = (props) => {

    return (
       <>
            <h1>React CRM</h1>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>Welcome, {props.user.displayName}</li>
                            <li>
                                <img 
                                    src={props.user.photoURL} 
                                    alt={props.user.displayName} 
                                />
                            </li>
                            <li onClick={logOut}>Logout</li>
                        </>
                        :<li>
                            <Link to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </nav>
       </>
    );
};

export default Header;