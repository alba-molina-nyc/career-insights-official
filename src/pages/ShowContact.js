import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { Outlet } from 'react-router-dom';

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
     <Outlet>
            <Helmet>
                <title>{props.contact.firstName} {props.contact.lastName} | Career Post </title>
            </Helmet>
            
            <StyledMain>
               
                <section>
                    <h3>{props.contact.firstName} {props.contact.lastName}</h3>

                    {props.contact.companyName && <h5>Works at: {props.contact.companyName}</h5>}
                    <p>Email: {props.contact.email}</p>
                    <p style={{fontWeight: 700}}>{props.contact.linkedInConnection ? 'The contact is a LinkedIn connection' : 'Not a LinkedIn Connection'}</p>
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
            </Outlet>
        </>
    );
};

export default Show;