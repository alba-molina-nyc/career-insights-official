import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { findByLabelText } from '@testing-library/react';


const Header = (props) => {
    const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    background-color: #932432;
    color: #ffffff;
    box-shadow: 1px 1px 3px 2px #808080;
    nav {
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            li {
                margin-right: 1.5rem;
                font-size: 1.5rem;
                font-weight: 700;
                a{
                    text-decoration: none;
                    color: inherit;
                }
                &:hover{
                    cursor: pointer;
                }
            }
        }
        
    }`
    return (
        <StyledHeader>
            <h3>Career Insights</h3>
            <nav>
               <ul>
                   <li>Product</li>
                   <li>Solutions</li>
                   <li>About</li>
                   <li>Logout</li>
                   <li>
                       <Link>Login</Link>
                   </li>
               </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;