import { useEffect, useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';
import JobItemContent from './JobItemContent';
import Sidebar, { SidebarTop } from './Sidebar';
import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';

function App() {
  const [searchText, setSearchText] = useState('');
  const [jobItems, setJobItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchText) return;
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setJobItems(data.jobItems);
    };
    fetchData();
  }, [searchText]);

  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm
          searchText={searchText}
          onSearchTextChange={setSearchText}
        />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItems} />
          <PaginationControls />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />
    </>
  );
}

export default App;
