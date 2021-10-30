import { Link } from 'react-router-dom';
import { StyledNav } from '../styles.js';

const Nav = (props) => {
        return (
            <StyledNav>
                <nav>
                   <ul>
                       {
                           props.user ?
                           <>
                        <li>
                            <Link to="applications">🔂Applications Tracker</Link> 
                        </li>
                        <li>
                            <Link to="/contacts">📇Networking Management</Link> 
                        </li>  
                        <li>
                            <Link to="/roadmap">🛣Career Roadmap</Link> 
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