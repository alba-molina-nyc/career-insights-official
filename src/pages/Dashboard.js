import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledForm, StyledMain, StyledSection, StyledTable } from '../styles';

const Dashboard = (props) => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        unionMember: false
    });

    // form helper functions

    const handleChange = event => {
        
        const value = event.target.name === 'unionMember' 
        ? event.target.checked 
        : event.target.value


        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        // TODO: adds user's uid to form
        props.createContact(formState);
        setFormState({
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            unionMember: false
        }); // clear form after its been submitted
    }

    return (
        <>
        <Helmet>
            <title>Dashboard | React CRM ⚛️</title>
            <meta name="description" content="A simple dashboard for managing contacts" />
            <meta name="keywords" content="Dashboard, business, tools, customer service" />
        </Helmet>
        <StyledMain>
            <h1>Your Contacts</h1>
            <StyledSection>
                <StyledForm onSubmit={handleSubmit}>
                    <label>First Name
                        <input 
                            onChange={handleChange} 
                            value={formState.firstName} 
                            name="firstName" 
                            type="text" 
                        />
                    </label>
                    <label>Last Name
                        <input 
                            onChange={handleChange} 
                            value={formState.lastName} 
                            name="lastName" 
                            type="text" 
                        />
                    </label>
                    <label>Email
                        <input 
                            onChange={handleChange} 
                            value={formState.email} 
                            name="email" 
                            type="email" 
                        />
                    </label>
                    <label>Company Name
                    <input 
                        onChange={handleChange} 
                        value={formState.companyName} 
                        name="companyName" 
                        type="text" 
                    />
                    </label>
                    <label>Union Member?
                        <input 
                            type="checkbox" 
                            name="unionMember" 
                            onChange={handleChange}
                            checked={formState.unionMember} 
                        />
                    </label>
                    <input type="submit" value="Add Contact" />
                </StyledForm>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map(c => (
                                <tr key={c._id}>
                                    <td>{c.firstName}</td>
                                    <td>{c.lastName}</td>
                                    <td><Link to={`/contacts/${c._id}`}>See More Details</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </StyledTable>
            </StyledSection>
        </StyledMain>
    </>
    );
};

export default Dashboard;