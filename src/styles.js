import styled from 'styled-components';
export const StyledHeader = styled.header`
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
                img {
                    height: 50px;
                    border-radius: 50%;
                }
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
export const StyledMain = styled.main`
flex-grow: 1;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const StyledFooter = styled.footer`
display: flex;
align-items: center;
height: 5rem;
justify-content: center;
`;

export const StyledNav = styled.nav`

    `