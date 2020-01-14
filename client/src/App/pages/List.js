
import React, { Fragment } from 'react';
import {useState} from 'react';

function List(props)
{

  const [myList,setmyList] = useState(["Local1","local2","local3"]);

  const handleList = (listData) =>{
    console.log(`inside handle List function....`);
    console.log(listData);

    setmyList((previousState)=>([...previousState,...listData]));

  }
  const getList = (event)=>{
    
    fetch(process.env.REACT_APP_PUBLIC_URL + 'api/getList')
    .then(res => res.json())
    .then(list => {
      handleList(list);
    });
    
  }
  return (
    <Fragment>
      <button onClick={getList} > Get the list from server</button>
      
      <br></br>
      
      {myList.map((value,index)=>{
        return (<li>{value}</li>)
      })}

          </Fragment>
  )
}

export default List;