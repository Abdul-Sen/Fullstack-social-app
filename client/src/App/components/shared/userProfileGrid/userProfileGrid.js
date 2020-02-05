import React, { Fragment, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserProfileCard from '../userProfileCard/userProfileCard';

//{"docs":[],"total":200,"limit":10,"page":"21","pages":20}
function UserStateProfile(props) {
    const [userData, setUserData] = useState({ docs: [], total: null, limit: 10, page: "0", pages: null });

    useEffect(() => {
        console.log(`user data changed...`);
        console.log(userData);
    }, [userData]);

    const fetchData = () => {
        fetch(process.env.REACT_APP_PUBLIC_URL + `api/getMockPage/?page=${Number(userData.page) + 1}`)
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
            ...currentState,
            ...newState
        }));
    }

    return (
        <InfiniteScroll
            dataLength={10}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            {userData.docs.map((value, index) => {
                return (<UserProfileCard userData={value}/>);
            })}

        </InfiniteScroll>
    )

}

export default UserStateProfile;