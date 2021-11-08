import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { Link } from 'react-router-dom';

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
                    <h1>Company Name: {props.application.companyName}</h1>

                    <h1>Job Title: {props.application.title} </h1>
                    
                    <h3>Next steps: {props.application.nextSteps} </h3>
                    <h3>Next Steps Due Date: {props.application.dueDate}</h3>

                    {props.application.companyName && <h5>Company Location: {props.application.location}</h5>}
                    <p>Company Size: {props.application.companySize}</p>
                    
                     <a href={props.application.jobPost}>Job Post: {props.application.title}  </a>
                    
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
                    </form>
                </section>
            </StyledMain>
        </>
    );
};

export default ShowContact;