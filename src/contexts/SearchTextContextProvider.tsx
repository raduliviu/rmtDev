import { createContext, useState } from 'react';
import { useDebounce } from '../lib/hooks';

type SearchTextContextType<T> = {
  searchText: T;
  debouncedSearchText: T;
  handleChangeSearchText: (newSearchText: string) => void;
};

export const SearchTextContext =
  createContext<SearchTextContextType<string> | null>(null);

export default function SearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 250);

  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debouncedSearchText,
        handleChangeSearchText,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
