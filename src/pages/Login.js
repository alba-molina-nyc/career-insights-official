import { signIn } from '../services/firebase';

const Login = (props) => {
    return (
        <>
            <h1>Login</h1>
            <button onClick={signIn}>Sign in with Google</button>
        </>
    );
};

export default Login;