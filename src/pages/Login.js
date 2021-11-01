import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { signIn } from '../services/firebase'

const Login = (props) => {
    return (
        <>
        <Helmet>
        <title>Login | Career Insights</title>
        <meta name="description" content="A simple tool to help applicants during the application job and career process"></meta>
    </Helmet>
        <StyledMain>
            <h1>Login to your account</h1>
            <button onClick={signIn}>Sign in with Google</button>
        </StyledMain>
        </>
    );
};

export default Login;