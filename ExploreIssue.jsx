import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { FaSearch } from 'react-icons/fa';

const Container = styled.main`
   display: flex;
   background: linear-gradient(to right, #F8F9FA, #E5E7EB);
   min-height: 100vh;
   flex-direction: column;
   flex-grow: 1;
`;

const Content = styled.section`
   flex-grow: 1;
   margin-left: 227px;
`;

const ExploreIssueHeader = styled.h1`
   font-size: 30px;
   margin: 34px 0 30px 40px;
   color: #000000;
`;

const NewIssueButton = styled.button`
   position: relative;
   left: 1148px;
   bottom: 50px;
   width: 120px;
   height: 35px;
   border-radius: 6px;
   border: none;
   background-color: #5c3317;
   color: #FFFFFF;
   cursor: pointer;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   transition: background-color 0.3s ease;

   &:hover {
      background-color: #4a2a14; 
   }
`;

const SaveSearchButton = styled.button`
   position: relative;
   left: 890px;
   bottom: 50px;
   width: 120px;
   height: 35px;
   border-radius: 6px;
   border: none;
   background-color:rgb(255, 255, 255);
   color:rgb(0, 0, 0);
   cursor: pointer;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   transition: background-color 0.3s ease;

   &:hover {
      background-color: #f0f0f0;
   }
`;

const SortingContainer = styled.section`
   background-color: #F8F9FA;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   border-radius: 12px;
   margin: 1px 40px 15px 43px;
   padding: 10px 20px;
`;

const SearchIssuesText = styled.h2`
   font-size: 20px;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 1130px;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;     
  top: 50%;
  transform: translateY(-50%);
  color: #aaa; 
  font-size: 16px;  
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px; 
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
`;

const FilterPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
`;

const DropDownTitle = styled.span`
  font-size: 12px;
  font-weight: 300;
  color:rgb(110, 110, 110);
  margin-bottom: 4px;
`;

const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 12px;
  font-weight: 300;
`;

const ResetButton = styled.button`
  background: #f8f8f8;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  position: relative;
  left: 1010px;
  font-weight: 300;
`;

const ApplyFilterButton = styled.button`
  background: linear-gradient(to right, #5c3317, rgb(176, 78, 12));
  border: none;
  color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  position: relative;
  left: 1013px;
  width: 100px;
`;

const IssueContainer = styled.section`
   display: flex;
   flex-direction: column;
   
`;

const TabNavigation = styled.section`
   margin-left: 45px;
`;

const TabButton = styled.button`
   background: none;
   border: none;
   font-size: 14px;
   padding: 10px 18px;
   cursor: pointer;
   color: ${({ active }) => (active ? '#5c3317' : '#888')};
   border-bottom: 2px solid ${({ active }) => (active ? '#5c3317' : 'transparent')};
   font-weight: ${({ active }) => (active ? 600 : 300)};
   transition: color 0.2s, border-bottom 0.2s;
`;

const AllIssuesContent = () => (
  <div>
    <p>All Issues Content - List of all issues posted by users.</p>
  </div>
);

const PopularIssuesContent = () => (
  <div>
    <p>Popular Issues Content - List of the most popular issues.</p>
  </div>
);

const RecentIssuesContent = () => (
  <div>
    <p>Recent Issues Content - List of the most recent issues.</p>
  </div>
);

const TrendingIssuesContent = () => (
  <div>
    <p>Trending Issues Content - List of trending issues.</p>
  </div>
);

const ExploreIssue = () => {
   // State for free-text search and each of the filters
   const [searchText, setSearchText] = useState('');
   const [selectedStatus, setSelectedStatus] = useState('');
   const [selectedPriority, setSelectedPriority] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('');
   const [selectedCreatedBy, setSelectedCreatedBy] = useState('');
   const [selectedCreatedDate, setSelectedCreatedDate] = useState('');
   const [selectedHasComments, setSelectedHasComments] = useState('');

   // Handlers for each dropdown
   const handleStatusChange = (e) => setSelectedStatus(e.target.value);
   const handlePriorityChange = (e) => setSelectedPriority(e.target.value);
   const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
   const handleCreatedByChange = (e) => setSelectedCreatedBy(e.target.value);
   const handleCreatedDateChange = (e) => setSelectedCreatedDate(e.target.value);
   const handleHasCommentsChange = (e) => setSelectedHasComments(e.target.value);

   // Reset all filters to default
   const handleResetFilters = () => {
      setSearchText('');
      setSelectedStatus('');
      setSelectedPriority('');
      setSelectedCategory('');
      setSelectedCreatedBy('');
      setSelectedCreatedDate('');
      setSelectedHasComments('');
   };

   // Apply filters (in this demo, simply log the current values)
   const handleApplyFilters = () => {
      console.log("Applying filters:");
      console.log("SearchText: ", searchText);
      console.log("Status: ", selectedStatus);
      console.log("Priority: ", selectedPriority);
      console.log("Category: ", selectedCategory);
      console.log("Created By: ", selectedCreatedBy);
      console.log("Created Date: ", selectedCreatedDate);
      console.log("Has Comments: ", selectedHasComments);
      // Add your filtering logic here.
   };

   // Tab state and handler
   const [activeTab, setActiveTab] = useState('All Issues');
   const handleTabClick = (tabName) => setActiveTab(tabName);

   // Render content based on the active tab
   const renderContent = () => {
      switch (activeTab) {
         case 'Popular':
         return <PopularIssuesContent />;
         case 'Recent':
         return <RecentIssuesContent />;
         case 'Trending':
         return <TrendingIssuesContent />;
         case 'All Issues':
         default:
         return <AllIssuesContent />;
      }
   };

   // Render dropdowns
   const ExploreFilterDropdowns = () => {
      return (
         <FilterPanel>
            <DropdownWrapper>
               <DropDownTitle>Status</DropDownTitle>
               <StyledSelect value={selectedStatus} onChange={handleStatusChange}>
                  <option value="">All Status</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
               </StyledSelect>
            </DropdownWrapper>
            <DropdownWrapper>
               <DropDownTitle>Priority</DropDownTitle>
               <StyledSelect value={selectedPriority} onChange={handlePriorityChange}>
                  <option value="">All Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
               </StyledSelect>
            </DropdownWrapper>
            <DropdownWrapper>
               <DropDownTitle>Category</DropDownTitle>
               <StyledSelect value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="">All Categories</option>
                  <option value="Bug">Bug</option>
                  <option value="Feature">Feature</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Documentation">Documentation</option>
               </StyledSelect>
            </DropdownWrapper>
            <DropdownWrapper>
               <DropDownTitle>Created By</DropDownTitle>
               <StyledSelect value={selectedCreatedBy} onChange={handleCreatedByChange}>
                  <option value="">Anyone</option>
                  <option value="Me">Me</option>
                  <option value="My Team">My Team</option>
               </StyledSelect>
            </DropdownWrapper>
            <DropdownWrapper>
               <DropDownTitle>Created Date</DropDownTitle>
               <StyledSelect value={selectedCreatedDate} onChange={handleCreatedDateChange}>
                  <option value="">Any Time</option>
                  <option value="Last 24 Hours">Last 24 Hours</option>
                  <option value="Last 7 Days">Last 7 Days</option>
                  <option value="Last 30 Days">Last 30 Days</option>
                  <option value="Last 90 Days">Last 90 Days</option>
               </StyledSelect>
            </DropdownWrapper>
            <DropdownWrapper>
               <DropDownTitle>Has Comments</DropDownTitle>
               <StyledSelect value={selectedHasComments} onChange={handleHasCommentsChange}>
                  <option value="">Any</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
               </StyledSelect>
            </DropdownWrapper>
         </FilterPanel>
      );
   };

   return (
      <Container>
         <Sidebar />
         <Content>
            <ExploreIssueHeader>Explore Issues</ExploreIssueHeader>
            <NewIssueButton onClick>+ New Issue</NewIssueButton>
            <SaveSearchButton onClick>Save Search</SaveSearchButton>
            <SortingContainer>
               <SearchIssuesText>Search Issues</SearchIssuesText>
               <SearchWrapper>
                  <SearchIcon />
                  <SearchInput 
                     type="text"
                     placeholder="Search by title, description, or ID..."
                     value={searchText}
                     onChange={(e) => setSearchText(e.target.value)}
                  />
               </SearchWrapper>
               <ExploreFilterDropdowns />
               <ResetButton onClick={handleResetFilters}>Reset</ResetButton>
               <ApplyFilterButton onClick={handleApplyFilters}>Apply Filter</ApplyFilterButton>
            </SortingContainer>
            <IssueContainer>
               <TabNavigation>
                  <TabButton
                     active={activeTab === 'All Issues'}
                     onClick={() => handleTabClick('All Issues')}
                     >
                     All Issues
                  </TabButton>
                  <TabButton
                     active={activeTab === 'Popular'}
                     onClick={() => handleTabClick('Popular')}
                     >
                     Popular
                  </TabButton>
                  <TabButton
                     active={activeTab === 'Recent'}
                     onClick={() => handleTabClick('Recent')}
                     >
                     Recent
                  </TabButton>
                  <TabButton
                     active={activeTab === 'Trending'}
                     onClick={() => handleTabClick('Trending')}
                     >
                     Trending
                  </TabButton>
               </TabNavigation>
               {renderContent()}
            </IssueContainer>
         </Content>
      </Container>
   );
};

export default ExploreIssue;
