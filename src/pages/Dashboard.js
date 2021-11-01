import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { StyledMain } from '../styles';
const Dashboard = (props) => {

    return (
        <>
        <Helmet>
        <title>Dashboard</title>
        </Helmet>
        <StyledMain>
            <h1> Dashboard </h1>
        </StyledMain>
        </>
    );
};
export default Dashboard;