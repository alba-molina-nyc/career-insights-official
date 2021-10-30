import { useState } from 'react';
import { StyledMain } from '../styles';
const Dashboard = (props) => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email:"",
        companyName: "",
        role: "",
        lastContacted: "",


    });

    return (
        <StyledMain>
            <h1> Dashboard </h1>
        </StyledMain>
    );
};
export default Dashboard;