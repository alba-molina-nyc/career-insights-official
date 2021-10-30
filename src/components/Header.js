import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { StyledHeader } from '../styles.js';

const Header = (props) => {
    
    return (
        <StyledHeader>
            <h3>Career Insights</h3>
            <nav>
               <ul>
                   <li>Product</li>
                   <li>Solutions</li>
                   <li>About</li>
                   <li onClick={logOut}>Logout</li>
                   <li>
                       <Link to="/login">Login</Link>
                   </li>
               </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;