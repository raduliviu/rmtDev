import { Dispatch, SetStateAction } from 'react';

type SearchFormProps = {
  searchText: string;
  onSearchTextChange: Dispatch<SetStateAction<string>>;
};

export default function SearchForm({
  searchText,
  onSearchTextChange,
}: SearchFormProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()} action='#' className='search'>
      <button type='submit'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => {
          onSearchTextChange(e.target.value);
        }}
        spellCheck='false'
        type='text'
        required
        placeholder='Find remote developer jobs...'
      />
    </form>
  );
}
