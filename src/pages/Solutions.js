import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
const Solutions = (props) => {
    return (
        <>
        <Helmet>
        <title> Career Post | Solutions </title>
    </Helmet>
        <StyledMain>
            <h1>Solutions </h1>
            <p>
            Experience an innovative and robust, cloud-based applicant-first software suite designed to increase applicant productivity, foster collaboration, and enhance the application experience from source to hire.
            </p>
            <p> 
            Easily prepare for each stage of your upcoming job search by managing leads, useful contacts, and informational or official interviews in one organized workspace.
            </p>
            <p>
            This board helps you to keep track of internship and job applications, ensuring you never miss an opportunity! 
            </p>
        </StyledMain>
        </>
    );
};

export default Solutions;