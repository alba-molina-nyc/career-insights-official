import { useState } from 'react';
import { StyledMain } from '../styles';

const Contacts = (props) => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email:"",
        companyName: "",
        role: "",
        lastContacted: "",
    });

const handleChange = event => {
    setFormState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
    }));
}
    return (
        <StyledMain>
            <h1>Dashboard</h1>
        </StyledMain>
    )
}
export default Contacts;