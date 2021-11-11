import styled from 'styled-components';
export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    background-color: rgb(76,20,76);
    color: #ffffff;
    box-shadow: 1px 1px 3px 2px #808080;

    h1, a {
        text-decoration: none;
        color: white;
    }
    nav {
        display: flex;
        align-items: center;
        text-decoration: none;
     
        ul {
            display: flex;
            list-style: none;
            text-decoration: none;
            li {
                margin-right: 1.5rem;
                font-size: 1.5rem;
                font-weight: 700;
                text-decoration: none;
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
flex-direction: column;
align-items: center;
padding-top: 3rem;
background-color: rgb(245,218,126);
@media(min-width: 975px) {
    h1 {
        align-self: flex-start;
        margin-left: 10rem;
    }
    a {
                text-decoration: none;
                color: inherit;
                a:hover {
                background-color: rgba(255, 206, 86, 1)

            }
            }
section  {
    background-color: rgb(236,174,42);
}









form {input[type="submit"] {
    width: 70%;
    margin: 1rem 0;
    background-color: rgb(0,150,161);

}

}

}
           

`;


export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    height: 5rem;
    justify-content: center;
   
`;


export const StyledSection = styled.section`
display: flex;
justify-content: space-evenly;
flex-direction: column-reverse;
min-width: 100%;
flex-grow: 1;
padding: 0 3rem;
@media(min-width: 975px) {
    margin-top: 3rem;
    flex-direction: row;
    min-width: 70vw;
    padding: 0;
}
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
label {
    display: flex;
    margin: .5rem 0;
    justify-content: space-between;
    align-items: center;    
}
input {
    margin-left: 1rem;
    width: 50%;
    height: 2rem;
    border-radius: 5px;
}
input[type="submit"] {
    width: 100%;
    margin: 1rem 0;
    background-color: rgb(0,150,161);
}

`;

export const StyledTable = styled.table`
border-collapse: collapse;
border-spacing: 0;
width: 100%;
th, td {
    text-align: center;
    padding: 5px;
}
tr:nth-child(even) {
    background-color:rgb(236,174,42);
}

tr:nth-child(odd) {
    background-color: rgb(0,150,161);
}

th {
    background-color: rgb(76,20,76);
    color: white;
   
}

@media(min-width: 975px) {
    width: 60%;
    height: 50%;
}
`;

