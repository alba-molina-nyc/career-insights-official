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
        props.createContact(formState)
        setFormState({
        firstName: "",
        lastName: "",
        email:"",
        companyName: "",
        role: "",
        lastContacted: "",
        })
    }

    // form helper functions 

    return (
        <StyledMain>
            <h1>Show Contact Page!</h1>
            
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                    onChange={handleChange}
                    value={formState.firstName} 
                    name="firstName" 
                    type="text" 
                    />
                    <input 
                    onChange={handleChange}
                    value={formState.lastName} 
                    name="lastName" 
                    type="text" 
                    />
                    <input 
                    onChange={handleChange}
                    value={formState.email} 
                    name="email" 
                    type="text" 
                    />
                    <input 
                    onChange={handleChange}
                    value={formState.companyName} 
                    name="companyName" 
                    type="text" 
                    />
                    <input 
                    onChange={handleChange}
                    value={formState.role} 
                    name="role" 
                    type="text" 
                    />
                    <input 
                    onChange={handleChange}
                    value={formState.lastContacted} 
                    name="lastContacted" 
                    type="text" 
                    />


                    <input type="submit" value="Add Contact" />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Company Name</th>
                            <th>Role</th>
                            <th>Last Contacted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map(c => (
                                <tr key={c._id}> 
                                <td>{c.firstName}</td>
                                <td>{c.lastName}</td>
                                <td>{c.email}</td>
                                <td>{c.companyName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </StyledMain>
    );
};

export default Contacts;