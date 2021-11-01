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

const handleSubmit = event => {
    event.preventDefault();
    props.createContact(formState);
    setFormState({
        firstName: "",
        lastName: "",
        email:"",
        companyName: "",
        role: "",
        lastContacted: "",
    }); // this is to clear the form after it has been submitted
}
    return (
        <StyledMain>
            <h1>Contacts</h1>
            <section onSubmit={handleSubmit}>
                <form>
                 <input 
                 onChange={handleChange} 
                 value={formState.firstName} 
                 name="firstName"
                 type="text"
                 placeholder="First Name"
                 />
                 <input 
                 onChange={handleChange} 
                 value={formState.lastName} 
                 name="lastName"
                 type="text"
                 placeholder="Last Name"
                 />
                 <input 
                 onChange={handleChange} 
                 value={formState.companyName} 
                 name="companyName"
                 type="text"
                 placeholder="Company Name"
                 />
                 <input 
                 onChange={handleChange} 
                 value={formState.role} 
                 name="role"
                 type="text"
                 placeholder="Role"
                 />
                 <input 
                 onChange={handleChange} 
                 value={formState.email} 
                 name="email"
                 type="email"
                 placeholder="Email"
                 />
                  <input 
                 onChange={handleChange} 
                 value={formState.lastContacted} 
                 name="lastContacted"
                 type="text"
                 placeholder="Last Contacted"
                 />
                 <input type="submit" value="Add Contact" />

                        
                   
                </form>
            </section>

        </StyledMain>
    )
}
export default Contacts;