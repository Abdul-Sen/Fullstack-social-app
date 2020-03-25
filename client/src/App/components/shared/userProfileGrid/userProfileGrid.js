import React, { Fragment, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserProfileCard from '../userProfileCard/userProfileCard';
import { useSelector, useDispatch } from 'react-redux';

const INITIAL_USERDATA = { docs: [], total: null, limit: 10, page: "0", pages: null };

//{"docs":[],"total":200,"limit":10,"page":"21","pages":20}
function UserStateProfile() {

    const dispatch = useDispatch();

    const handleUserUpdate = (fetchedUsers) => {
        let hasmore = checkHasMore();
        let tempObj = {
            users: fetchedUsers,
            more: hasmore
        }
        dispatch({
            type: "UPDATE_USERS",
            payload: tempObj
        });
    }
    const userDataArray = useSelector(currentState => currentState.userReducer);

    const [userData, setUserData] = useState(INITIAL_USERDATA);

    const handleUserDataArray = (newState) => {
        handleUserUpdate(newState);
    }

    useEffect(() => {
        if (userData.page == INITIAL_USERDATA.page) {
            fetchData();
        }
        handleUserDataArray(userData.docs);
    }, [userData]);

    const fetchData = () => {
        fetch((process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : "") + `api/getMockPage/?page=${Number(userData.page) + 1}`)
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
            ...newState
        }));
    }

    const checkHasMore = () => {
        return (Number(userData.page) == (userData.pages - 15)) ? false : true;
    }

    return (
                    <InfiniteScroll
                        dataLength={userDataArray.users.length}
                        hasMore={userDataArray.more}
                        next={fetchData}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
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
                            {userDataArray.users.map((value, index) => {
                                return (
                                    <Grid item md={6} sm={12} xs={12} key={index} >
                                        <UserProfileCard userData={value} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </InfiniteScroll>
    )

}

export default UserStateProfile;