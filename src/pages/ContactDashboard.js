import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledForm, StyledMain, StyledSection, StyledTable } from '../styles';


const ContactDashboard = (props) => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        role: "",
        phone: "",
        lastContacted: "",
        linkedInConnection: false
    });

    // form helper functions

    useEffect((props) => {
        props.getContacts();
      },[]);

    const handleChange = event => {
        
        const value = event.target.name === 'linkedInConnection' 
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
            role: "",
            phone: "",
            lastContacted: "",
            linkedInConnection: false
        }); // clear form after its been submitted
    }

    // const handleDelete = async ({deleteContact, data}) => {
    // await deleteContact(c => c._id).push
    // }

    
    return (
        <>
        <Helmet>
            <title>Dashboard | Career Post </title>
        </Helmet>
      <h1>Networking Management Dashboard</h1>
      <p>Keep track of all your contacts and every person you have met in the many events attended. This board also connects with the Applications Management board, which will help you connect the dots between your contacts and your dream career!</p>
      
        <StyledMain>
            <h1>Your Network</h1>
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
                    <label>Company Size
                     <input 
                        onChange={handleChange} 
                        value={formState.companySize} 
                        name="companySize" 
                        type="text" 
                    />
                    </label>
                    <label>Role
                    <input 
                        onChange={handleChange} 
                        value={formState.role} 
                        name="role" 
                        type="text" 
                    />
                    </label>
                    <label>Phone
                    <input 
                        onChange={handleChange} 
                        value={formState.phone} 
                        name="phone" 
                        type="tel" 
                    />
                    </label>
                    <label> Last Contacted
                    <input 
                        onChange={handleChange} 
                        value={formState.lastContacted} 
                        name="lastContacted" 
                        type="date" 
                    />
                    </label>
                    <label> Reach Back Out Date
                    <input 
                        onChange={handleChange} 
                        value={formState.reachBack} 
                        name="reachBack" 
                        type="date" 
                    />
                    </label>
                    <label>LinkedIn Connection?
                        <input 
                            type="checkbox" 
                            name="linkedInConnection" 
                            onChange={handleChange}
                            checked={formState.linkedInConnection} 
                        />
                    </label>
                    <input type="submit" value="Add Contact" />
                </StyledForm>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Company Name</th>
                            <th>Company Size</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map(c => (
                                <tr key={c._id}>
                                    <td>{c.firstName}</td>
                                    <td>{c.lastName}</td>
                                    <td>{c.companyName}</td>
                                    <td>{c.companySize}</td>
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

export default ContactDashboard;