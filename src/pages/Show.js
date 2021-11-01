import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';

const Show = (props) => {
    const [formState, setFormState ] = useState({
        content: ""
    });

    const handleChange = event => (
        setFormState({ content: event.target.value })
    );

    const handleSubmit = event => {
        event.preventDefault();
        props.createNote(formState, props.contact._id);
        setFormState({ content: '' }); // reset our form
    };

    return (
        <>
            <Helmet>
                <title>See Details</title>
                <meta name="description" content="See details for the following contact" />
                <meta name="keywords" content="CRM, Client Relationship Management, Business, Tools" />
            </Helmet>
            <StyledMain>
                <h1>Show</h1>
                <section>
                    <h3>{props.contact.firstName} {props.contact.lastName}</h3>
                    {props.contact.companyName && <h5>Works at: {props.contact.companyName}</h5>}
                    <p>Email: {props.contact.email}</p>
                    <p style={{fontWeight: 700}}>{props.contact.unionMember ? 'The contact is a Union Member' : 'Not a Union Member'}</p>
                    {
                        props.contact.notes.length ?
                        <>
                            <br />
                                {props.contact.notes.map(n => 
                                    <p style={{margin: '1rem 0'}} key={n._id}>{n.content}</p>
                                )}
                            <br />
                        </>
                        :
                        <p>No notes to display at this time</p>
                    }
                    <form onSubmit={handleSubmit}>
                        <textarea 
                            name="content"
                            onChange={handleChange}
                            value={formState.content}
                        ></textarea>
                        <input type="submit" value="Add Note" />
                    </form>
                </section>
            </StyledMain>
        </>
    );
};

export default Show;