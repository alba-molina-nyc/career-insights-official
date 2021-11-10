import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { Link } from 'react-router-dom';
const CONTACTS_API_URL = 'http://localhost:3001/api/contacts'; 
const APPLICATIONS_API_URL = 'http://localhost:3001/api/applications'; 
const Dashboard = (props) => {
    

    return (
        <>
        <Helmet>
            <title>Career Insights | Dashboard</title>
        </Helmet>

        <StyledMain>
            <h1><Link to="/contacts">Networking Management Dashboard </Link></h1>
            <h1><Link to="/applications">Job Application Management Dashboard </Link></h1>
            <h1><Link to="chart/contacts">Networking Management Data & Analytics </Link></h1>
            <h1><Link to="/chart/applications">Job Application Management Data & Analytics </Link></h1>
            <h1><Link to="/search">Search</Link></h1>
    
        </StyledMain>
        </>
    );
};

export default Dashboard;

  