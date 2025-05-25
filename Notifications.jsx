import styled from 'styled-components';
import Sidebar from './Sidebar';

const Container = styled.main`
   display: flex;
   background: linear-gradient(to right, #F8F9FA, #E5E7EB);
   min-height: 100vh;
   flex-direction: column;
   flex-grow: 1;
`;

const NotificationPageTitle = styled.h1`
   font-size: 32px;
   color: #333;
   margin: 30px auto 45px 270px;
`;

const Content = styled.section`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 10px;
   padding: 20px;
   margin-left: 250px;
   // flex-grow: 1;
`;

const NotificationContainer = styled.div`
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   background-color: #ffffff;
   padding: 20px;
   border-radius: 12px;
   width: 1500px;
   min-width: 900px;
   min-height: 100px;
   height: 100%;
`;

const NotificationTitle = styled.h2`
   font-size: 20px;
   margin: 10px 0;
`;

const Description = styled.p`
   font-size: 16px;
   font-weight: 300;
`;

const DateText = styled.span`
   font-weight: 100;
   font-size: 13px;
   color: #666666;
`;

const Notifications = () => {
   return (
      <Container>
         <Sidebar />
         <NotificationPageTitle>Notifications</NotificationPageTitle>
         <Content>
            <NotificationContainer>
               <NotificationTitle>Status Updated: Issue Title Here</NotificationTitle>
               <Description>Notification Description Here</Description>
               <DateText>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' })}</DateText>
            </NotificationContainer>
            <NotificationContainer>
               <NotificationTitle>Status Updated: Issue Title Here</NotificationTitle>
               <Description>Notification Description Here</Description>
               <DateText>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' })}</DateText>
            </NotificationContainer>
             <NotificationContainer>
               <NotificationTitle>Status Updated: Issue Title Here</NotificationTitle>
               <Description>Notification Description Here</Description>
               <DateText>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' })}</DateText>
            </NotificationContainer>
         </Content>
      </Container>
   );
};

export default Notifications;