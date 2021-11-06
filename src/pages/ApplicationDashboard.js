import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledForm, StyledMain, StyledSection, StyledTable } from '../styles';

const ApplicationDashboard = (props) => {
    const [ formState, setFormState ] = useState({
        title: "",
        jobPost: "",
        companyName: "",
        location: "",
        salary: "",
        companySize: "",
        submissionStatus: "",
        dueDate:"",
        nextSteps:"",
        remote: false,
    });

    // form helper functions

    useEffect(() => {
        props.getApplications();
      },[]);

    const handleChange = event => {
        
        const value = event.target.name === 'remote' 
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
        props.createApplication(formState);
        console.log(formState)
        // TEST
        console.log(props.applications)
        setFormState({
            title: "",
            jobPost: "",
            companyName: "",
            location: "",
            salary: "",
            companySize: "",
            submissionStatus: "",
            dueDate:"",
            nextSteps:"",
            remote: false,
        }); // clear form after its been submitted
    }
    return (
        <>
        <Helmet>
            <title>Job Applications Dashboard ⚛️</title>
        </Helmet>
      <h1>Job Application Management Dashboard</h1>
    
      
        <StyledMain>
            <h1>Job Applications Dashboard</h1>
            <p>This board helps you to keep track of internship and job applications, ensuring you never miss an opportunity! The board is also connected to the "Networking management" board and can draw information from that board with ease, allowing you to utilize the connections you've made in the past.</p>
            <StyledSection>
                <StyledForm onSubmit={handleSubmit}>
                    <label>Title
                        <input 
                            onChange={handleChange} 
                            value={formState.title} 
                            name="title" 
                            type="text" 
                        />
                    </label>
                    <label>Job Post
                        <input 
                            onChange={handleChange} 
                            value={formState.jobPost} 
                            name="jobPost" 
                            type="url" 
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
                    <label>Location
                        <input 
                            onChange={handleChange} 
                            value={formState.location} 
                            name="location" 
                            type="text" 
                        />
                    </label>
                    <label>Salary
                        <input 
                            onChange={handleChange} 
                            value={formState.salary} 
                            name="salary" 
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
                    <label>Submission Status
                    <input 
                        onChange={handleChange} 
                        value={formState.submissionStatus} 
                        name="submissionStatus" 
                        type="text" 
                    />
                    </label>
                    <label>Due Date
                    <input 
                        onChange={handleChange} 
                        value={formState.dueDate} 
                        name="dueDate" 
                        type="text" 
                    />
                    </label>
                    <label> Next Steps
                    <input 
                        onChange={handleChange} 
                        value={formState.nextSteps} 
                        name="nextSteps" 
                        type="text" 
                    />
                    </label>
                    <label>Remote?
                        <input 
                            type="checkbox" 
                            name="remote" 
                            onChange={handleChange}
                            checked={formState.remote} 
                        />
                    </label>
                    <input type="submit" value="Add Application" />
                </StyledForm>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Company Name</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.applications.map(a => (
                                <tr key={a._id}>
                                    <td>{a.title}</td>
                                    <td>{a.companyName}</td>
                                    <td>{a.location}</td>
                                    <td><Link to={`/applications/${a._id}`}>See More Details</Link></td>
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

export default ApplicationDashboard;