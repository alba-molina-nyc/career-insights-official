import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';

const EditContact = (props) => {
    
  
    return (
        <>
            <Helmet>
                <title>{props.contact.firstName} {props.contact.lastName} | Career Post </title>
            </Helmet>
            
            <StyledMain>
                <h1>Edit Contact</h1>
                
            </StyledMain>
        </>
    );
};

export default EditContact;