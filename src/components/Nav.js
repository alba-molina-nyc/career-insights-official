import { Link } from 'react-router-dom';
import { StyledNav } from '../styles.js';

const Nav = (props) => {
        return (
            <StyledNav>
            <h1>Nav Bar</h1>
                <nav>
                   <ul>
                       {
                           props.user ?
                           <>
                            <li>
                            <Link to="/dashboard">🏡Dashboard</Link> 
                        </li>
                        <li>
                            <Link to="applications">🔂Applications Tracker</Link> 
                        </li>
                        <li>
                            <Link to="/contacts">📇Networking Management</Link> 
                        </li>  
                        </>
                        :<>
             
                           <Link to="/"></Link>
                           </>
                       }
                           
                   </ul>
                </nav>
                </StyledNav>
 
        );
    };
     

export default Nav;