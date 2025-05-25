import styled from 'styled-components';
import { memo } from 'react';
import Sidebar from './Sidebar';

const Container = styled.main`
   display: flex;
   background: linear-gradient(to right, #F8F9FA, #E5E7EB);
   min-height: 100vh;
   flex-direction: column;
   flex-grow: 1;
`;

const MessagePageTitle = styled.h1`
   font-size: 32px;
   margin-left: 270px;
   position: relative;
   top: 9px;
`;

const Content = styled.section`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 10px;
   padding: 20px;
   margin: 5px 25px 30px 270px;
   background-color: #ffffff;
   border-radius: 12px;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   min-height: 100vh; // changed from height: 100vh;
`;

const MessagesContent = styled.div`
   border-bottom: 1px solid #eee;
   padding: 10px 0;
   margin: 0 auto 10px 15px;
   flex-wrap: wrap;
`;

const CharacterRole = styled.h3`
   font-size: 18px;
`; 

const UpdatedIssue = styled.p`
   font-size: 14px;
   font-weight: 300;
   color: #333;
   margin: 10px 0;

   .issue-title {
      font-weight: bold;
      color:rgb(155, 103, 44);
       font-size: 14px;
   }

   .issue-status {
      font-weight: bold;
      font-size: 14px;
      color:rgb(81, 37, 8);
   }
`;

const DateText = styled.span`
   font-weight: 100;
   font-size: 13px;
   color:rgb(122, 122, 122);
`;

const BorderBottom = styled.div`
   border-bottom: 1px solid rgb(213, 213, 213);
   padding: 10px 0;
   min-width: 1150px;
   width: 100%;
`;

const Messages = () => {
   return (
      <Container>
         <Sidebar />
         <MessagePageTitle>Messages</MessagePageTitle>
         <Content>
            <MessagesContent>
               <CharacterRole>Admin</CharacterRole>
               <UpdatedIssue>Your issue <span className="issue-title">"Login Error on Dashboard"</span> has been updated to <span className="issue-status">"In Progress"</span>.</UpdatedIssue>
               <DateText>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' })}</DateText>
               <BorderBottom></BorderBottom>           
            </MessagesContent>
             {/* <MessagesContent>
               <CharacterRole>Admin</CharacterRole>
               <UpdatedIssue>Your issue <span className="issue-title">"Login Error on Dashboard"</span> has been updated to <span className="issue-status">"In Progress"</span>.</UpdatedIssue>
               <DateText>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' })}</DateText>
               <BorderBottom></BorderBottom>           
            </MessagesContent> */}
         </Content>
      </Container>
   );
};

export default memo(Messages);