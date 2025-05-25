import React, { useState } from 'react';
import styled from 'styled-components';

const HomeDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(userData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = () => {
    const filtered = userData.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <PageContainer>
      <Header>
        <h1>Home Dashboard</h1>
      </Header>
      <FilterSection>
        <SearchInput
          type="text"
          placeholder="Search by username..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FilterButton onClick={handleFilter}>Apply Filters</FilterButton>
      </FilterSection>
      <CardGrid>
        {filteredUsers.map((user) => (
          <IssueCard key={user.id}>
            <BigNumber>{user.openedIssues}</BigNumber>
            <Label>Opened Issues</Label>
            <BigNumber>{user.workedOnIssues}</BigNumber>
            <Label>Worked-On Issues</Label>
          </IssueCard>
        ))}
      </CardGrid>
    </PageContainer>
  );
};

const userData = [
  { id: 1, username: 'Justine Buban', openedIssues: 12, workedOnIssues: 5 },
  { id: 2, username: 'Miles Cabadon', openedIssues: 8, workedOnIssues: 10 },
  { id: 3, username: 'Renz Mico Galvez', openedIssues: 15, workedOnIssues: 3 },
  { id: 4, username: 'Kyla Ysabel Flores', openedIssues: 4, workedOnIssues: 12 },
];

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const Header = styled.header`
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    color: #333;
  }
`;

const FilterSection = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

const FilterButton = styled.button`
  background: linear-gradient(to right, #5c3317, rgb(176, 78, 12));
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.98);
    box-shadow: 0 2px 10px rgba(176, 78, 12, 0.3);
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const IssueCard = styled.div`
  background-color: #fff;
  width: 200px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const BigNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

export default HomeDashboard;
