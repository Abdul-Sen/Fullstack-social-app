import React, { Fragment, useState, useEffect, useRef } from 'react';
import useDebounce from '../../customHooks/useDebounce';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TuneIcon from '@material-ui/icons/Tune';
import TuneContainer from './TuneContainer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 2,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  let searchState = useSelector(currentState => currentState.searchReducer);
  const [userName, setUserName] = useState('');
  const [revealOptions, setRevealOptions] = useState(false);  
  const didMountRef = useRef(false);
  let debounceResult = useDebounce(userName,600);


  const handleNewUsers = (fetchedUsers) => {
    dispatch({
      type: "NEW_USERS",
      payload: fetchedUsers
    });
  }

  //If searchstate changes, call api
  useEffect(()=>{
      if(searchState.role.length != 0 || searchState.searchTerm != '' || searchState.country != '')
      {
          getUsers();
      }
  },[searchState])

  const getUsers = async () => {
      
      // build querystring
      let queryString = `name=${searchState.searchTerm}`;
      (searchState.role).forEach(element => {
          queryString+= `&role=${element}`
      });
      if(searchState.country != '')
      {
          queryString += `&country=${searchState.country}`;
      }
     let results =await fetch((process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : "") + `api/getMockUsers?${queryString}`);
     results = await results.json();
     handleNewUsers({ users: results, more: false });
  }


  // on debounce value change, call this to update our redux state (debounce val changes on mount as well, so we are using ref to counter didmount)
  useEffect(()=>{
      if(didMountRef.current) //if true
      {
          dispatch({
              type: "UPDATE_SEARCH",
              payload: {searchTerm: debounceResult}
          });
      }
      else{
         didMountRef.current = true
      }

      if (debounceResult == '')
      {
        handleNewUsers({ users: [], more: true });
      }

  },[debounceResult]);

  const updateSearch = (val)=>{
      setUserName(val);
  }

  return (
    <Fragment>
      <Paper component="div" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for developers"
          onChange={e => updateSearch(e.target.value)}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} onClick={()=>{setRevealOptions(!revealOptions)}} >
          <TuneIcon />
        </IconButton>
      </Paper>
      { revealOptions && <TuneContainer />}
    </Fragment>
  )
}

export default SearchBar;