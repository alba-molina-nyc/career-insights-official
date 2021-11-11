import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';

const Home = (props) => {
    return (
        <>
        <Helmet>
            <title>Career Post</title>
          
        </Helmet>
        <StyledMain>
     
            <h1>Manage everything career based in one place </h1>
            <h3>This board helps you to keep track of internship and job applications, ensuring you never miss an opportunity! <img src='https://i.imgur.com/O20TmdQ.png' 
           width='50%'/> </h3>
            <p> Full CRM and sourcing capabilities to find and connect with the high-quality companies you seek. You can: Discover more companies with direct sourcing. Nurture your applicants through all social channels. Build beautiful career sites optimized for mobile. Incorporate our one-click apply process
            </p>
            <img src='https://i.imgur.com/0WRy28F.png' 
           width='50%'/>
        </StyledMain>
        </>
    );
};

export default Home;