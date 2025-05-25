import styled from "styled-components";
import { memo, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Container = styled.main`
   display: flex;
   background: linear-gradient(to right, #F8F9FA, #E5E7EB);
   min-height: 100vh;
   flex-direction: column;
   flex-grow: 1;

`;

const ProfilePageTitle = styled.h1`
   font-size: 32px;
   color: #333;
   margin: 30px auto 45px 270px;
`;

const ProfileContainer = styled.section`
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   background-color: #ffffff;
   padding: 20px;
   border-radius: 12px;
   margin: 0 30px 30px 270px;
   width: 1365px;
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   justify-content: space-between;
`;

const DetailContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex: 1;
   margin-right: 32px;
   position: static;
`;

const FullName = styled.h2`
   font-size: 18px;
   color:rgb(0, 0, 0);
   margin: 10px 0;
`; 

const UserName = styled.h5`
   font-size: 14px;
   margin: 5px 0;
   color:rgb(56, 56, 56);
`;

const Bio = styled.p`
   font-size: 12px;
   color:rgb(47, 47, 47);
   margin: 25px 0;
   
`;

const FollowerCount = styled.p`
   font-size: 12px;
   color: #666666;
   margin: 20px 0;
   padding: 10px;
`;

const EditProfileButton = styled.button`
   font-size: 14px;
   letter-spacing: 1px;
   font-weight: 500;
   width: 100%;
   min-width: 00px;
   height: 40px;
   border-radius: 6px;
   border: 1px solid #ffffff;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   transition: background 0.2s ease;
   
   &:hover {
      transform: scale(0.98);
      background-color:rgb(223, 223, 223);
      font-weight: 400;
   }
`;

const ProfileIcon = styled.div`
   width: 150px;
   height: 150px;
   border-radius: 12%;
   background: #e0e0e0;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 36px;
   color: #888;
   overflow: hidden;
   position: absolute;
   left: 1485px;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
   }
`;

const ModalOverlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background: rgba(0,0,0,0.3);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;
`;

const ModalContent = styled.div`
   background: #fff;
   border-radius: 12px;
   padding: 32px 24px 24px 24px;
   min-width: 350px;
   box-shadow: 0 2px 16px rgba(0,0,0,0.15);
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
`;

const CloseButton = styled.button`
   position: absolute;
   top: 12px;
   right: 12px;
   background: none;
   border: none;
   font-size: 20px;
   cursor: pointer;
   color: #888;
`;

const ModalInput = styled.input`
   width: 100%;
   margin: 10px 0;
   padding: 8px;
   border-radius: 6px;
   border: 1px solid #ccc;
   font-size: 14px;
`;

const ModalTextarea = styled.textarea`
   width: 100%;
   margin: 10px 0;
   padding: 8px;
   border-radius: 6px;
   border: 1px solid #ccc;
   font-size: 14px;
   resize: vertical;
`;

const SaveButton = styled.button`
   margin-top: 10px;
   width: 100%;
   height: 36px;
   border-radius: 6px;
   border: none;
   background: #e5a94e;
   color: #fff;
   font-weight: 600;
   font-size: 15px;
   cursor: pointer;
   transition: background 0.2s;
   &:hover {
      background: #d18c1d;
   }
`;


const Profile = () => {
   const [showModal, setShowModal] = useState(false);
   const [profileIcon, setProfileIcon] = useState(null);
   const [fullName, setFullName] = useState("Juan Dela Cruz");
   const [userName, setUserName] = useState("@juandelacruz");
   const [bio, setBio] = useState("lorem ipsum chuchu");
   // For modal editing
   const [editIcon, setEditIcon] = useState(profileIcon);
   const [editFullName, setEditFullName] = useState(fullName);
   const [editUserName, setEditUserName] = useState(userName);
   const [editBio, setEditBio] = useState(bio);

   const handleEdit = () => {
      setEditIcon(profileIcon);
      setEditFullName(fullName);
      setEditUserName(userName);
      setEditBio(bio);
      setShowModal(true);
   };

   const handleSave = () => {
      setProfileIcon(editIcon);
      setFullName(editFullName);
      setUserName(editUserName);
      setBio(editBio);
      setShowModal(false);
   };

   const handleIconChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = (ev) => setEditIcon(ev.target.result);
         reader.readAsDataURL(file);
      }
   };

   return (
      <Container>
         <Sidebar />
         <ProfilePageTitle>Profile</ProfilePageTitle>
         <ProfileContainer>
            <DetailContainer>
               <FullName>{fullName}</FullName>
               <UserName>{userName}</UserName>
               <Bio>{bio}</Bio>
               <FollowerCount>0</FollowerCount>
               <EditProfileButton onClick={handleEdit}>Edit Profile</EditProfileButton>
            </DetailContainer>
            
            <ProfileIcon>
               {profileIcon ? (
                  <img src={profileIcon} alt="Profile" />
               ) : (
                  <span>👤</span>
               )}
            </ProfileIcon>
         </ProfileContainer>
         {showModal && (
            <ModalOverlay>
               <ModalContent>
                  <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
                  <ProfileIcon>
                     {editIcon ? (
                        <img src={editIcon} alt="Preview" />
                     ) : (
                        <span>👤</span>
                     )}
                  </ProfileIcon>
                  <ModalInput
                     type="file"
                     accept="image/*"
                     onChange={handleIconChange}
                  />
                  <ModalInput
                     type="text"
                     value={editFullName}
                     onChange={e => setEditFullName(e.target.value)}
                     placeholder="Full Name"
                  />
                  <ModalInput
                     type="text"
                     value={editUserName}
                     onChange={e => setEditUserName(e.target.value)}
                     placeholder="Username"
                  />
                  <ModalTextarea
                     rows={3}
                     value={editBio}
                     onChange={e => setEditBio(e.target.value)}
                     placeholder="Bio"
                  />
                  <SaveButton onClick={handleSave}>Save</SaveButton>
               </ModalContent>
            </ModalOverlay>
         )}
      </Container>
   )
};

export default memo(Profile);