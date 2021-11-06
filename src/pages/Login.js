import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { signIn } from '../services/firebase';

const Login = (props) => {
    return (
        <>
            <Helmet>
                <title>Login | Career Post ⚛️</title>
            </Helmet>
            <StyledMain>
                <h1>Login</h1>
                <button onClick={signIn}>Sign in with Google</button>
            </StyledMain>
        </>
    );
};

export default Login;