import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import brainIcon from "../assets/LandingPageRedesignedSVG/brain.svg";
import chartBarIcon from "../assets/LandingPageRedesignedSVG/chart-bar.svg";
import lockIcon from "../assets/LandingPageRedesignedSVG/lock.svg";


const Container = styled.div`
  padding: 20px;
  background: linear-gradient(to right, #F8F9FA, #E5E7EB);
`;

const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 19px;
`;

const Logo = styled.h1`
   font-weight: bold;
   
   font-size: 19px;
   font-family: 'Inter', sans-serif;
   color: #000000;
`;

const NavLink = styled(Link)`
   margin-left: 16px;
   text-decoration: none;
   color: #000000;
   font-size: 13px;
   font-weight: normal;
`;

const Content = styled.section`
   margin-top: 40px;
   text-align: center;
`;

const Headline = styled.h2`
   margin-top: 130px;
   font-size: 40px;
   margin-bottom: 12px;
   color: #000000;
   font-weight: bold;
   font-family: 'Inter', sans-serif;
`;

const SubText = styled.p`
   font-size: 18px;
   color: #4B5563;
   line-height: 1.5;
`;

const GetStartedButton = styled(Link)`
   display: inline-block;
   padding: 17px 40px;
   margin-right: 10px;
   background: linear-gradient(to right, #5c3317 ,rgb(176, 78, 12));
   color: white;
   border-radius: 50px;
   text-decoration: none;
   margin: 0 20px;
   transition: transform 0.2s ease, box-shadow 0.2s ease;
   width: 200px;

   &:hover {
   transform: scale(.95);
   box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
   }
`;

// const ExploreButton = styled(Link)`
//    display: inline-block;
//    padding: 17px 58px;
//    background: linear-gradient(to left, #5c3317 ,rgb(176, 78, 12)
//    );
//    color: white;
//    border-radius: 50px;
//    text-decoration: none;
//    margin: 0 20px;
//    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
//    transition: transform 0.2s ease, box-shadow 0.2s ease;

//    &:hover {
//    transform: scale(.95);
//    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
//    }  
// `;

const FeaturedCards = styled.div`
   padding: 20px;
   // background-color: white;
   border-radius: 24px;
   // box-shadow: 0px 1px 4px rgba(0,0,0,0.1);
   display: flex;
   flex-direction: row; 
   justify-content: space-evenly;
   align-items: center;
   gap: 40px;
   max-width: 1000px;
   width: 100%;
   margin: 100px auto;
   align-items: center;
`;

const Card = styled.div`
   background-color: white;
   border-radius: 24px;
   box-shadow: 0px 1px 4px rgba(0,0,0,0.1);
   padding: 15px;
   // text-align: center;
   width: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
`;

const CardHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 12px;
`;

const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: bold;
  color: #926041;
//   border: 1px solid green;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #1E1E1E;
  margin-top: 8px;
  padding: 10px;
  text-align: center;
//   border: 1px solid rgb(55, 73, 86);
`;

const Icon = styled.img`
   width: 30px; 
   height: 30px;
//   border: 1px solid #E0F2FE;
`;

const FeatureWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   min-height: 100vh; 
`;


const FeatureContainer = styled.div`
   margin-top: 40px auto;
   background-color: #fff;
   padding: 30px;
   border-radius: 48px;
   box-shadow: 0 1px 4px rgba(0,0,0,0.1);
   width: 1400px;
   max-width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   
`;

const FeatureTitle = styled.h2`
   font-size: 38px;
   margin-top: 80px;
   color: #111827;
   font-weight: normal;

   .workflow {
      font-weight: bold; 
   }
`;

const FeatureSubtext = styled.p`
  margin-top: 10px;
  color: #555;
`;

const InnerContainer = styled.div`
  margin-top: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  background-color:rgb(245, 245, 245);
  border-radius: 48px;
  padding: 30px;
`;

const TopSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 2px solid #ccc;
`;

const InnerLogo = styled.h3`
   font-size: 21px;
   color: #000000;
   font-weight: bold;
   font-family: 'Inter', sans-serif;
   padding: 0 0 0 50px;
`;

const InnerNavLink = styled(Link)`
   margin-left: 16px;
   color: #000000;
   text-decoration: none;
   font-size: 13px;
   padding: 0 60px 0 0;

   .Login {
      position: relative;
      left: 300px;
      padding: 0 60px 0 0;
   }
`;

const InnerContent = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const InnerHeadline = styled.h4`
   font-size: 40px;
   position: relative;
   left: 50px;
   
`;

const InnerButton = styled(Link)`
   display: inline-block;
   padding: 18px 20px;
   background-color: #5c3317;
   color: white;
   border-radius: 50px;
   text-decoration: none;
   position: relative;
   left: 50px;
   transition: transform 0.2s ease, box-shadow 0.2s ease;
   
   &:hover {
   transform: scale(.95);
   box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }  
`;

const InnerGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const GridHeader = styled.div`
  font-weight: bold;
  border-bottom: 1px solid #cccccc;
  padding: 8px;
//   border: 1px solid #E5E7EB;
`;

const GridItem = styled.div`
  padding: 8px;
`;

const GridAction = styled.div`
  padding: 8px;   
  color: #007BFF;
  cursor: pointer;
`;

const FooterPage = styled.footer`
   margin-top: 100px;
   color: #5c3317;
   padding: 20px;
   text-align: center;
   font-size: 14px;
   position: relative;
   bottom: 0;
   width: 100%;
`;

const FooterContent = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1200px;
   margin: auto;
`;

const FooterLinks = styled.div`
   display: flex;
   gap: 15px;
`;

const FooterLink = styled.a`
   color: #5c3317;
   text-decoration: none;
   transition: color 0.3s ease;

   &:hover {
      color: #F59E0B; /* Orange accent */
   }
`;

const LandingPageRedesigned = () => {
   const issues = [
      { id: "#1", title: "Way kuryente", status: "Open", priority: "High", action: "View"},
      { id: "#2", title: "May kabit asawa ko", status: "Resolved", priority: "Low", action: "View"}
   ];

   return (   
      <Container>
         <Header>
            <Logo>PulseTrack</Logo>
            <nav>
               <NavLink to="/login">Login</NavLink>
               <NavLink to="/signup">Sign Up</NavLink>
               <NavLink to="/admin">Admin</NavLink>
            </nav>
         </Header>

         <Content>
            <Headline>Elegant Issue Tracking, Reimagined</Headline>
            <SubText>PulseTrack gives you a refined issue management experience with<br></br> tactile design and smooth clarity.</SubText>
            <GetStartedButton to="/login">Get Started</GetStartedButton>
            {/* <ExploreButton to="/explore">Explore</ExploreButton> */}

            <FeaturedCards>
               <Card>
                  <CardHeader>
                     <Icon src={brainIcon} alt="Smart Priorities" />
                     <CardTitle>Smart Priorities</CardTitle>
                  </CardHeader>   
                  <CardDescription>Organize what's important using intelligent tagging and highlighting.</CardDescription>
               </Card>
               <Card>
                  <CardHeader>
                     <Icon src={chartBarIcon} alt="Real Time Dashboard" />
                     <CardTitle>Real-Time Dashboard</CardTitle>
                  </CardHeader>
                  <CardDescription>See updates live with a visual panel tailored for speed and clarity.</CardDescription>
               </Card>
               <Card>
                  <CardHeader>
                     <Icon src={lockIcon} alt="Admin & Role Control" />
                     <CardTitle>Admin & Role Control</CardTitle>
                  </CardHeader>
                  <CardDescription>Flexible role permissions ensure the right eyes see the right data.</CardDescription>
               </Card>
            </FeaturedCards>
         <FeatureWrapper>
            <FeatureContainer>
               <FeatureTitle>Streamline Your <span className='workflow'>Workflow</span></FeatureTitle>
               <FeatureSubtext>Manage and resolved issues with ease using PulseTrack. Outperform is<br /> designed to minimize effort and maximize
                  efficiency, allowing your team to focus on what matters most.
               </FeatureSubtext>

               <InnerContainer>
                  <TopSection>
                     <InnerLogo>PulseTrack</InnerLogo>
                     <InnerNavLink to="/login"><span className="Login">Login</span></InnerNavLink>
                     <InnerNavLink to="/signup">Sign Up</InnerNavLink>
                  </TopSection>
                  <InnerContent>
                     <InnerHeadline>Hello, Juan</InnerHeadline>
                     <InnerButton to="/createIssue">+ New Issue</InnerButton>
                  </InnerContent>
                  <InnerGrid>
                     <GridHeader>ID</GridHeader>
                     <GridHeader>Title</GridHeader>
                     <GridHeader>Status</GridHeader>
                     <GridHeader>Priority</GridHeader>
                     <GridHeader>Actions</GridHeader>

                     {issues.map((issue, index) => (
                     <React.Fragment key={index}>
                     <GridItem>{issue.id}</GridItem>
                     <GridItem>{issue.title}</GridItem>
                     <GridItem>{issue.status}</GridItem>
                     <GridItem>{issue.priority}</GridItem>
                     <GridAction>{issue.action}</GridAction>
                     </React.Fragment>
                     ))}

                  </InnerGrid>
               </InnerContainer>
            </FeatureContainer>
         </FeatureWrapper>   
         <FooterPage>
         <FooterContent>
            <p>&copy; 2025 PulseTrack. All rights reserved.</p>
            <FooterLinks>
               <FooterLink to="/privacy">Privacy Policy</FooterLink>
               <FooterLink to="/terms">Terms of Service</FooterLink>
               <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterLinks>
         </FooterContent>
         </FooterPage>
         </Content>
      </Container>
   );
}

export default memo(LandingPageRedesigned);