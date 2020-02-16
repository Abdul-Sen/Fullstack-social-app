import React, { Fragment, useState, useEffect } from 'react';
import {Grid} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserProfileCard from '../userProfileCard/userProfileCard';

const INITIAL_USERDATA = { docs: [], total: null, limit: 10, page: "0", pages: null };

//{"docs":[],"total":200,"limit":10,"page":"21","pages":20}
function UserStateProfile(props) {
    const [userData, setUserData] = useState(INITIAL_USERDATA);
    const [userDataArray,setUserDataArray] = useState([]);

    const handleUserDataArray = (newState)=>{
        setUserDataArray((currentState) => ([
            ...currentState,
            ...newState
        ]));
    }

    useEffect(() => {
        if(userData.page == INITIAL_USERDATA.page)
        {
            fetchData();
        }
        handleUserDataArray(userData.docs);
    }, [userData]);

    const fetchData = () => {
        fetch(`api/getMockPage/?page=${Number(userData.page) + 1}`)
            .then(function (response) {
                return response.json();
            })
            .then((res) => {
                handleUserData(res);
            }).catch((err) => {
                console.log("failed to register user");
                console.log(err);
            })
    }

    const handleUserData = (newState) => {
        setUserData((currentState) => ({
            // ...currentState,
            ...newState
        }));
    }

    const checkHasMore = ()=> {
       return (Number(userData.page) == (userData.pages - 15))? false: true;
    }

    return (
        <InfiniteScroll
            dataLength={userDataArray.length}
            hasMore={checkHasMore()}
            next={fetchData}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
        >
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                {userDataArray.map((value, index) => {
                    return (
                        <Grid item md={6} sm={12} xs={12} >
                            <UserProfileCard userData={value} />
                        </Grid>
                    );
                })}
            </Grid>

        </InfiniteScroll>
    )

}

export default UserStateProfile;