import React, { Fragment, useState, useEffect } from 'react';
import useDebounce from '../../customHooks/useDebounce';

function SearchBar(props) {

  const getUsers = async (term) => {
    let results = (await fetch((process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : "") + `api/getMockUsers?name=${term}`));
    results = await results.json();
    setUsers(results);
  }
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 600);
  useEffect(
    () => {
      if (debouncedSearchTerm != '' && debouncedSearchTerm != undefined) {
        getUsers(debouncedSearchTerm);
      }
      else{
        setUsers([]);
      }
    }, [debouncedSearchTerm]);

  return (
    <Fragment>
      <input
        placeholder="Search users"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </Fragment>
  )
}

export default SearchBar;