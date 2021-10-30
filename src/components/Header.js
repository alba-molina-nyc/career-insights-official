import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { StyledHeader } from '../styles.js';


const Header = (props) => {
    
    return (
        <StyledHeader>
            <h3>Career Insights</h3>
            <nav>
               <ul>
                   {
                       props.user ?
                       <>
                       <li>Welcome, {props.user.displayName}</li>
                       <li>
                            <Link to="/dashboard">Dashboard</Link> 
                        </li>
                       <li onClick={logOut}>Logout</li>
                       <li> 
                           <img src= {props.user.photoURL}
                           alt={props.user.displayName} />
                       </li>
                       
                       </>
                    
                       :<>
                           <li>
                           <Link to="/product">Product</Link> 
                          </li>
                          <li>
                           <Link to="/solutions">Solutions</Link>
                          </li>
                          <li>
                           <Link to="/about">About</Link>
                           </li>
                           <li>
                           <Link to="/login">Login</Link> </li>
                        </>
                   }
            
              
                   
               </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;