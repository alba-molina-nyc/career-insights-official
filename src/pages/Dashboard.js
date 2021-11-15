import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { Link } from 'react-router-dom';
const Dashboard = (props) => {
    

    return (
        <>
        <Helmet>
            <title>Career Insights | Dashboard</title>
        </Helmet>

        <div>
            <h1>Keep track of all moving parts in your career in one place</h1>

        </div>

        <StyledMain>
            <p><Link to="/contacts">Networking Management</Link></p>
            {/* <p><Link to="chart/contacts">Networking Management Data & Analytics </Link> </p> */}
            <p><Link to="/applications">Job Application Management</Link></p>
            {/* <p><Link to="/chart/applications">Job Application Management Data & Analytics </Link></p> */}
            {/* <label for="site-search">Search the site: </label>
            <input type="search"></input>
            <input type="submit">search</input> */}
    
        </StyledMain>
        </>
    );
};

export default Dashboard;

  