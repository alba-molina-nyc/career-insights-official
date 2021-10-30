import { Link } from 'react-router-dom';

const Nav = (props) => {
        return (
            <>
            <h1>Nav Bar</h1>
                <nav>
                   <ul>
                        <li>
                            <Link to="/dashboard">🏡Dashboard</Link> 
                        </li>
                        <li>
                            <Link to="applications">🔂Applications Tracker</Link> 
                        </li>
                        <li>
                            <Link to="/contacts">📇Networking Management</Link> 
                        </li>      
                   </ul>
                   </nav>
   </>
        );
    };
     

export default Nav;