import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import houseIcon from "../assets/SideBarNavigationSVG/house.svg";
import magnifyingGlassIcon from "../assets/SideBarNavigationSVG/magnifying-glass.svg";
import notificationsIcon from "../assets/SideBarNavigationSVG/bell.svg";
import messagesIcon from "../assets/SideBarNavigationSVG/envelope.svg";
import myIssuesIcon from "../assets/SideBarNavigationSVG/clipboard-text.svg";
import newIssueIcon from "../assets/SideBarNavigationSVG/plus.svg";
import profileIcon from "../assets/SideBarNavigationSVG/user.svg";
import settingsIcon from "../assets/SideBarNavigationSVG/gear.svg";

const SideBarContainer = styled.aside`
   position: fixed;
   left: 0;
   width: 200px;
   height: 100vh;
   background: #FFFFFF;
   color: #333333;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
`;

const SideBarHeader = styled.header`
   color: #283618;
   width: 100%;
   text-align: center;
   margin-bottom: 20px;
`;

const Logo = styled.h1`
   font-size: 19px;
   margin-bottom: 20px;
   letter-spacing: 1px;
`;

const SideBarMenu = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 10px;
`;

const MenuButton = styled(Link)`
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 12px;
   text-decoration: none;
   color: #333;
   font-size: 14px;
   border-radius: 8px;
   width: 87%;
   transition: background 0.2s ease;
   background: ${({ active }) => (active ? "#ffe6a7" : "transparent")};

   &:hover {
      background: #DDA15E;
   }
`;

const Icon = styled.img`
   width: 20px;
   height: 20px;
`;

const Sidebar = () => {
   const location = useLocation();

   return (
      <SideBarContainer>
         <SideBarHeader>
            <Logo>PulseTrack</Logo>
         </SideBarHeader>
         <SideBarMenu>
            <MenuButton to="/user" active={location.pathname === "/user" || location.pathname === "/user"}>
               <Icon src={houseIcon} alt="Home" /> Home
            </MenuButton>
            <MenuButton to="/explore" active={location.pathname === "/explore"}>
               <Icon src={magnifyingGlassIcon} alt="Explore" /> Explore
            </MenuButton>
            <MenuButton to="/notifications" active={location.pathname === "/notifications"}>
               <Icon src={notificationsIcon} alt="Notifications" /> Notifications
            </MenuButton>
            <MenuButton to="/messages" active={location.pathname === "/messages"}>
               <Icon src={messagesIcon} alt="Messages" /> Messages
            </MenuButton>
            <MenuButton to="/my-issues" active={location.pathname === "/my-issues"}>
               <Icon src={myIssuesIcon} alt="My Issues" /> My Issues
            </MenuButton>
            <MenuButton to="/new-issue" active={location.pathname === "/new-issue"}>
               <Icon src={newIssueIcon} alt="New Issue" /> New Issue
            </MenuButton>
            <MenuButton to="/profile" active={location.pathname === "/profile"}>
               <Icon src={profileIcon} alt="Profile" /> Profile
            </MenuButton>
            <MenuButton to="/settings" active={location.pathname === "/settings"}>
               <Icon src={settingsIcon} alt="Settings" /> Settings
            </MenuButton>
         </SideBarMenu>
      </SideBarContainer>
   );
};

export default Sidebar;
