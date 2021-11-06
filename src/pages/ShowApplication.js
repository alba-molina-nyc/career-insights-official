import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';

const ShowContact = (props) => {
    const [formState, setFormState ] = useState({
        content: ""
    });

    const handleChange = event => (
        setFormState({ content: event.target.value })
    );

    const handleSubmit = event => {
        event.preventDefault();
        props.createTodo(formState, props.application._id);
        setFormState({ content: '' }); // reset our form
    };
    return (
        <>
            <Helmet>
                <title>{props.application.companyName} {props.application.title} | Career Post </title>
            </Helmet>
            
            <StyledMain>
               
                <section>
                    <h3>{props.application.submissionStatus} {props.application.dueDate}</h3>

                    {props.application.companyName && <h5>Company Name: {props.application.companyName}</h5>}
                    <p>Company Size: {props.application.companySize} Job Post: {props.application.jobPost} </p>
                    
                    <p style={{fontWeight: 700}}>{props.application.remote ? 'The position is a remote position' : 'Not a remote position'}</p>
                    {
                        props.application.todos.length ?
                        <>
                            <br />
                                {props.application.todos.map(a => 
                                    <p style={{margin: '1rem 0'}} key={a._id}>{a.content}</p>
                                )}
                            <br />
                        </>
                        :
                        <p>No to do list to display at this time</p>
                    }
                    <form onSubmit={handleSubmit}>
                        <textarea 
                            name="content"
                            onChange={handleChange}
                            value={formState.content}
                        ></textarea>
                        <input type="submit" value="Add To Do" />
                        <input 
                        type="submit" 
                        value="Delete"
                        />
                    </form>
                </section>
            </StyledMain>
        </>
    );
};

export default ShowContact;