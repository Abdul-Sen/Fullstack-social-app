import React, { Fragment, useState, useEffect } from 'react';
import useDebounce from '../../customHooks/useDebounce';
import {useDispatch, useSelector} from 'react-redux'

function SearchBar(props) {

  const getUsers = async (term) => {
    let results = (await fetch((process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : "") + `api/getMockUsers?name=${term}`));
    results = await results.json();
    handleNewUsers({users: results, more: false});
  }
  const dispatch = useDispatch();
    
  const handleNewUsers = (fetchedUsers)=>{
      dispatch({
          type: "NEW_USERS",
          payload: fetchedUsers
      });
  }


  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 600);
  useEffect(
    () => {
      if (debouncedSearchTerm != '' && debouncedSearchTerm != undefined) {
        getUsers(debouncedSearchTerm);
      }
      if(debouncedSearchTerm == '')
      {
        handleNewUsers({users: [],more: true});
      }
    }, [debouncedSearchTerm]);

  return (
    <Fragment>
      <input
        placeholder="Search users"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </Fragment>
  )
}

export default SearchBar;