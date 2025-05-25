import { Link, useLocation } from 'react-router-dom';
import { useState, memo } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; 
import CommentModal from '../components/CommentModal';
import UserIcon from '../assets/SideBarNavigationSVG/user.svg';
import CalendarIcon from '../assets/UserDashboardSVG/calendar-dots.svg';
import CommentIcon from '../assets/UserDashboardSVG/chat-circle.svg';
import ViewIcon from '../assets/UserDashboardSVG/eye.svg';
import TrackIcon from '../assets/UserDashboardSVG/line-segment.svg';

const Container = styled.div`
   display: flex; 
   background: linear-gradient(to right, #F8F9FA, #E5E7EB);
   min-height: 100vh;
   flex-direction: column;
   flex-grow: 1;
`;

const Content = styled.div`
   flex-grow: 1;
   margin-left: 230px;
   padding: 40px;
`;

const HomeHeadline = styled.h2`
   font-size: 30px;
   position: relative;
   bottom: 30px;
   color: #000000;
`;

const FilterButton = styled.button`
   background-color: #772F1A;
   color: white;
   border: none;
   padding: 10px 10px;
   border-radius: 6px;
   cursor: pointer;
   width: 130px;
   position: relative;
   bottom: 0;
   font-weight: 300;
   right: 500px;
   transition: 0.3s ease;

   &:hover {
      transform: scale(0.99);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
   }
`;

const FilterContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: stretch;
   padding: 15px;
   background-color: #F8F9FA;
   border-radius: 12px;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   margin-bottom: 20px;
   order: 2;         
`;

const FilterInput = styled.input`
   padding: 10px;
   margin-bottom: 12px;  
   border: 1px solid #EEC170;
   background-color: #F8F9FA;
   border-radius: 6px;
   font-size: 14px;
   outline: none;
   width: 300px;
   position: relative;
   top: 6px;
   left: 245px;
`;

const DropdownWrapper = styled.div`
  background-color: #F8F9FA;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  min-width: 140px;
  position: relative;
  transition: transform 0.2s ease;

  &:hover {
    box-shadow: 0 2px 6px rgba(92, 51, 23, 0.2);
    transform: scale(0.98);
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  font-family: inherit;
`;

const IssueGrid = styled.div`
   display: flex;
   gap: 15px;
   justify-content: space-between;
   flex-wrap: wrap;
   order: 1;
   

   .NoMatchMessage {
      font-size: 18px;
      color: #b45309; 
      text-align: center;
      margin: auto auto 0 auto;
      padding: 20px 30px;
      background: #fff8e1;
      border: 1px solid #ffe0b2;
      border-radius: 12px;
      max-width: 100%;
      width: 1200px;
      height: 100px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      font-weight: 500;
      letter-spacing: 0.5px;
      position: relative;
      bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      
   }
`;

const IssueCard = styled.div`
   background: #fff;
   padding: 20px;
   border-radius: 12px;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   width: 250px;
   text-align: center;
   margin-bottom: 20px;
`;

const IssueCount = styled.h2`
   font-size: 24px;
   font-weight: bold;
   color: #5c3317;
`;

const IssueLabel = styled.p`
   font-size: 14px;
   color: #555;
`;

const FilterPanel = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap; 
`;

const RecentActivityContainer = styled.div`
   margin-top: 20px;
   padding: 20px;
   position: relative;
   right: 19px;
   background: transparent;
   // border-radius: 8px;
   // box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

const RecentActivityMark = styled.h3`
   font-size: 20px;
   margin-bottom: 20px;
`;

const RecentContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 15px;
`;

const RecentIssue = styled.div`
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
   border-radius: 12px;
   padding: 15px;
`;

const RecentTitle = styled.h4`
   font-size: 16px;
   margin-bottom: 10px;
`;

const UserMark = styled.div`
   display: flex;
   align-items: center;
   gap: 9px;
   margin-bottom: 10px;
   position: relative;
`;

const UserName = styled.span`
   font-weight: bold;
   font-size: 12px;
`;

const DateLabel = styled.span`
   font-size: 12px;
   color: #777777;
`;

const Priority = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: ${({ level }) => {
    switch (level) {
      case 'High':
        return '#f5222d'; 
      case 'Medium':
        return '#fa8c16';
      case 'Low':
        return '#52c41a';  
      default:
        return '#000';       
    }
  }};
  background-color: ${({ level }) => {
    switch (level) {
      case 'High':
        return '#fff1f0'; 
      case 'Medium':
        return '#fff7e6'; 
      case 'Low':
        return '#f6ffed'; 
      default:
        return '#d9d9d9'; 
    }
  }};
`;


const Category = styled.span`
   background-color: #dcdcdc;
   padding: 4px 8px;
   border-radius: 4px;
   font-size: 12px;
`;

const Status = styled.span`
   background-color: #e6f7ff;
   padding: 4px 8px;
   border-radius: 4px;
   font-size: 12px;
   position: absolute;
   right: 0;
   top: 0;
`;

const Description = styled.p`
   font-size: 14px;
   color: #333;
   display: block;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   unicode-bidi: isolate;
  
`;

const FeatureContainer = styled.div`
   display: flex;
   border-top: 1px solid rgb(232, 232, 232);
   padding-top: 12px;
   gap: 20px;
   margin-top: 12px;
`;

const Comments = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   color: #666;
   font-size: 13px;
   cursor: pointer;
`;

const CommentCount = styled.span`
   font-weight: bold;
   color: #666;
`;

const CommentTag = styled.span`
   font-size: 12px;
`;

const ViewDetails = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   color: #666;
   font-size: 13px;
   cursor: pointer;
`;

const ViewCount = styled.span`
   font-weight: bold;
   color: #666;
`;

const ViewTag = styled.span`
   font-size: 12px;
`;

const Track = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   color: #666;
   font-size: 13px;
   cursor: pointer;
`;

const TrackCount = styled.span`
   font-weight: bold;
   color: #666;
`;

const TrackTag = styled.span`
   font-size: 12px;
`;

// const issueData = [
//    { id: 1, user: "Karlo Porciuncula", opened: 5, workedOn: 3 },
//    { id: 2, user: "Justine Buban", opened: 8, workedOn: 6 },
//    { id: 3, user: "Kyla Ysabel Flores", opened: 2, workedOn: 1 },
//    { id: 4, user: "Miles Cabadon", opened: 7, workedOn: 4 },
// ];

const initialIssueData = [
      {
         id: 1, 
         user: "Karlo Porciuncula", 
         opened: 5, 
         workedOn: 3, 
         status: "Open",
         priority: "Medium",
         category: "Bug",
         comments: [],
         views: 10,
         tracks: 2,
         description: "Lorem ipsum dolor sit amet."
      },
      { 
         id: 2, 
         user: "Justine Buban", 
         opened: 8, 
         workedOn: 6,
         status: "In Progress",
         priority: "High",
         category: "Feature",
         comments: [],
         views: 15,
         tracks: 5,
         description: "Consectetur adipiscing elit."
      },
      { 
         id: 3, 
         user: "Kyla Ysabel Flores", 
         opened: 2, 
         workedOn: 1,
         status: "Resolved",
         priority: "Low",
         category: "UI/UX",
         comments: [],
         views: 7,
         tracks: 1,
         description: "Sed do eiusmod tempor."
      },
      { 
         id: 4, 
         user: "Miles Cabadon", 
         opened: 7, 
         workedOn: 4,
         status: "Closed",
         priority: "Medium",
         category: "Documentation",
         comments: [],
         views: 8,
         tracks: 3,
         description: "Incididunt ut labore et dolore magna aliqua."
      },
   ]

const UserDashboard = () => {       
   const location = useLocation();

   const [filterText, setFilterText] = useState("");

   const [selectedStatus, setSelectedStatus] = useState('');
   const [selectedPriority, setSelectedPriority] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('');

   const [issues, setIssues] = useState(initialIssueData);

   const handleFilterChange = (event) => {
      setFilterText(event.target.value);
   };

   const handleStatusChange = (e) => setSelectedStatus(e.target.value);
   const handlePriorityChange = (e) => setSelectedPriority(e.target.value);
   const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

   const [isCommentModalOpen, setCommentModalOpen] = useState(false);
   const [commentList, setCommentList] = useState([]);
   const [activeIssueId, setActiveIssueId] = useState(null);
   const activeIssue = issues.find(issue => issue.id === activeIssueId);

   const handleApplyFilters = () => {
      let filtered = initialIssueData;

      if (filterText) {
         filtered = filtered.filter(issue =>
            issue.user.toLowerCase().includes(filterText.toLowerCase())
         );
      }
      if (selectedStatus) {
         filtered = filtered.filter(issue => issue.status === selectedStatus);
      }
      if (selectedPriority) {
         filtered = filtered.filter(issue => issue.priority === selectedPriority);
      }
      if (selectedCategory) {
         filtered = filtered.filter(issue => issue.category === selectedCategory);
      }

      setIssues(filtered);
   };

   const filteredIssues = issues.filter((issue) =>
      issue.user.toLowerCase().includes(filterText.toLowerCase())
   );

   // // Handlers for dropdown filter changes.
   // const handleStatusChange = (e) => {
   //    const status = e.target.value;
   //    console.log("Selected Status:", status);
   //    // Example: filter issues by status
   //    setIssues((prevIssues) =>
   //       prevIssues.map(issue => issue.status === status ? { ...issue, highlighted: true } : issue)
   //    );
   // };

   // const handlePriorityChange = (e) => {
   //    const priority = e.target.value;
   //    console.log("Selected Priority:", priority);
   //    // This is where you could update or filter issues by priority.
   // };

   // const handleCategoryChange = (e) => {
   //    const category = e.target.value;
   //    console.log("Selected Category:", category);
   //    // This is where you could update or filter issues by category.
   // };

   const IssueFilterDropdowns = () => {
      return (
         <FilterPanel>
         <DropdownWrapper>
            <StyledSelect value={selectedStatus} onChange={handleStatusChange}>
               <option value="">All Status</option>
               <option value="Open">Open</option>
               <option value="In Progress">In Progress</option>
               <option value="Resolved">Resolved</option>
               <option value="Closed">Closed</option>
            </StyledSelect>
         </DropdownWrapper>
         <DropdownWrapper>
            <StyledSelect value={selectedPriority} onChange={handlePriorityChange}>
               <option value="">All Priority</option>
               <option value="Low">Low</option>
               <option value="Medium">Medium</option>
               <option value="High">High</option>
            </StyledSelect>
         </DropdownWrapper>
         <DropdownWrapper>
            <StyledSelect value={selectedCategory} onChange={handleCategoryChange}>
               <option value="">All Categories</option>
               <option value="Bug">Bug</option>
               <option value="Feature">Feature</option>
               <option value="UI/UX">UI/UX</option>
               <option value="Documentation">Documentation</option>
            </StyledSelect>
         </DropdownWrapper>
      </FilterPanel>
      )
   };

   // const IssueFilterDropdowns = () => {
   //    const handleStatusChange = (e) => {
   //       console.log("Selected Status:", e.target.value);
   //    };

   //    const handlePriorityChange = (e) => {
   //       console.log("Selected Priority:", e.target.value);
   //    };

   //    const handleCategoryChange = (e) => {
   //       console.log("Selected Category:", e.target.value);
   //    };

   // return (
   //       <FilterPanel>
   //          <DropdownWrapper>
   //             <StyledSelect defaultValue="" onChange={handleStatusChange}>
   //                <option value="" disabled>All Status</option>
   //                <option value="Open">Open</option>
   //                <option value="In Progress">In Progress</option>
   //                <option value="Resolved">Resolved</option>
   //                <option value="Closed">Closed</option>
   //             </StyledSelect>
   //          </DropdownWrapper>
   //          <DropdownWrapper>
   //             <StyledSelect defaultValue="" onChange={handlePriorityChange}>
   //                <option value="" disabled>All Priority</option>
   //                <option value="Low">Low</option>
   //                <option value="Medium">Medium</option>
   //                <option value="High">High</option>
   //             </StyledSelect>
   //          </DropdownWrapper>
   //          <DropdownWrapper>
   //             <StyledSelect defaultValue="" onChange={handleCategoryChange}>
   //                <option value="" disabled>All Categories</option>
   //                <option value="Bug">Bug</option>
   //                <option value="Feature">Feature</option>
   //                <option value="UI/UX">UI/UX</option>
   //                <option value="Documentation">Documentation</option>
   //             </StyledSelect>
   //          </DropdownWrapper>
   //       </FilterPanel>
   //    );
   // };

   return (
      <Container>
         <Sidebar />
         <Content>
            <HomeHeadline>Home Dashboard</HomeHeadline>
            <IssueGrid>
               {filteredIssues.length === 0 ? (
                  <div className="NoMatchMessage">No issues match your filters.</div>
                  ) : (
                  filteredIssues.map((issue) => (
                     <IssueCard key={issue.id}>
                     <IssueCount>{issue.opened}</IssueCount>
                     <IssueLabel>Opened Issues</IssueLabel>
                     <IssueCount>{issue.workedOn}</IssueCount>
                     <IssueLabel>Worked-On Issues</IssueLabel>
                     </IssueCard>
                  ))
               )}
            </IssueGrid>
            <FilterContainer>
            <IssueFilterDropdowns />
               <FilterInput
                  type="text"
                  placeholder="Filter by users" 
                  value={filterText}
                  onChange={handleFilterChange} 
               />
               <FilterButton onClick={handleApplyFilters}>Apply Filters</FilterButton>
            </FilterContainer>
            <RecentActivityContainer>
               <RecentActivityMark>Recent Activity</RecentActivityMark>
               <RecentContainer>
                  {issues.map((issue) => (
                     <RecentIssue key={issue.id}>
                        <RecentTitle>
                  
                           {issue.description}
                        </RecentTitle>
                        <UserMark>
                           <img src={UserIcon} alt="user-icon" style={{ width: "20px", height: "20px" }} />
                           <UserName>{issue.user}</UserName>
                           <img src={CalendarIcon} alt="calendar-icon" style={{ width: "20px", height: "20px" }} />
                           <DateLabel>{new Date().toLocaleDateString()}</DateLabel>
                           <Priority level={issue.priority}>{issue.priority}</Priority>
                           <Category>{issue.category}</Category>
                           <Status>{issue.status}</Status>
                           
                        </UserMark>
                        <Description>{issue.description}</Description>
                        <FeatureContainer>
                           {/* <Link to={`/comments/${issue.id}`} style={{ textDecoration: 'none' }}> */}
                              <Comments onClick={() => setActiveIssueId(issue.id)}>
                                 <img src={CommentIcon} alt="comment-icon" style={{ fill: "#666", width: "16px", height: "16px" }}/>
                                 <CommentCount>{issue.comments}</CommentCount>
                                 <CommentTag>Comments</CommentTag>
                              </Comments>
                              {activeIssue && (
                              <CommentModal
                                 isOpen={!!activeIssueId}
                                 onClose={() => setActiveIssueId(null)}
                                 commentList={activeIssue.comments}
                                 setCommentList={newComments => {
                                    setIssues(issues =>
                                    issues.map(issue =>
                                       issue.id === activeIssueId
                                          ? { ...issue, comments: newComments }
                                          : issue
                                    )
                                    );
                                 }}
                              />
                              )}
                           <Link to={`/view/${issue.id}`} style={{ textDecoration: 'none' }}>
                              <ViewDetails>
                                 <img src={ViewIcon} alt="view-icon" style={{ fill: "#666", width: "16px", height: "16px" }}/>
                                 <ViewCount>{issue.views}</ViewCount>
                                 <ViewTag>View Details</ViewTag>
                              </ViewDetails>
                           </Link>
                           <Link to={`/track/${issue.id}`} style={{ textDecoration: 'none' }}> 
                              <Track>
                                 <img src={TrackIcon} alt="track-icon" style={{ fill: "#666", width: "16px", height: "16px" }}/>
                                 <TrackCount>{issue.tracks}</TrackCount>
                                 <TrackTag>Track</TrackTag>
                              </Track>
                           </Link>
                        </FeatureContainer>
                     </RecentIssue>
                  ))}
               </RecentContainer>
            </RecentActivityContainer>
            <CommentModal
               isOpen={isCommentModalOpen}
               onClose={() => setCommentModalOpen(false)}
               commentList={commentList}
               setCommentList={setCommentList}
         />
         </Content>
      </Container>
   );
};

export default memo(UserDashboard);
