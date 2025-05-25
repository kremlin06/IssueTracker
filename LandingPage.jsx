
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Container = styled.main`
   background-color: radial-gradient(circle, #E0F2FE, #F9FAFB); 
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
`;

const Header = styled.header`
   font-size: 14px;
   padding-bottom: 10px;
   position: absolute;
   display: flex;
   justify-content: flex-end;
   top: 10px;
   right: 10px;
   padding: 10px 15px;
`;

const NavLink = styled(Link)`
   margin-right: 15px;
   margin-left: 15px;
   text-decoration: none;
   color: #000000;

   &:hover {
   color: #FF6600;
   }
`;

const Content = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%; 
   width: 100%;   
`;

const Card = styled.article`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 5px 20px;
   border-radius: 50px;
   background-color: #FFFFFF;
   box-shadow: 1px 12px 23px 15px #E0F2FE;
   border: 1px solid #E0F2FE;
   width: 530px;
   height: 400px;

`;

const Logo = styled.h1` /* Logo style is now okay */
   font-size: 20px;
   margin-bottom: 5px;
   letter-spacing: 2px;
`;

const Tagline = styled.p`
   font-size: 30px;
   font-weight: 1000;
   margin-bottom: 5px;
   color: #1F2937;
   // border: 1px solid #E0F2FE;
   width: 350px; 
   text-align: center; 
   white-space: normal; 
   line-height: 1.4; 
`;

const StartButton = styled(Link)`
   padding: 10px 20px;
   background-color: #EF7000;
   color: #FFFFFF;
   border: none;
   padding: 14px 30px;
   border-radius: 80px;
   cursor: pointer;
   letter-spacing: 1px;
   text-decoration: none;
   font-family: 'Inter', sans-serif;
   font-size: 15px;
   padding: 14px 30px;
   margin-bottom: 20px;
   margin-top: 20px;
   transition: background-color 0.3s ease, transform 0.2s ease;

   &:hover {
      background-color:rgb(222, 90, 2); 
      transform: scale(1.02); 
   }
`;

const StyledParagraph = styled.p`
   font-size: 12px;
   color: #6B7280;
`;

const NavLinkSignUp = styled.a`
   color: #6B7280;
   text-decoration: none;
   margin-left: 5px;
   transition: color 0.3s ease, text-decoration 0.3s ease;

   &:hover {
      color: #FF6600; 
      text-decoration: underline; 
   }
`;

const LandingPage = () => {
   return (
      <>
      <Container>
         <Header>
            <nav>
               <NavLink to="/login">Login</NavLink>
               <NavLink to="/admin">Admin</NavLink>
            </nav>
         </Header>  
         <Content>
            <Card>
               <Logo>
                  PulseTrack
               </Logo>
               <Tagline>Track issues. Assign users. Move forward.</Tagline>
               <StartButton to="/login">Start Tracking</StartButton>
               <StyledParagraph>
                  Don't have an account?<NavLinkSignUp href="#">Sign up</NavLinkSignUp>
               </StyledParagraph>
               <StyledParagraph>Login or create an account to get started.</StyledParagraph>
            </Card>
         </Content>
      </Container>
      </>
   );
};

export default memo(LandingPage);
