import React, { Fragment, useState, useEffect, useRef } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Input } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

const COUNTRY_LIST = ['Australia','Brazil','Canada','Denmark','France','Iran','Ireland','New Zealand','Netherlands','Norway','Spain', 'Sweden', 'Switzerland','United Kingdom','United States'];
function Country(props) {
    const dispatch = useDispatch();
    const {country} = useSelector(currentState => currentState.searchReducer);
    const mountRef = useRef(false);
    const handleCountryEvent = (e) => {
            dispatch({
                type: "UPDATE_SEARCH",
                payload: {country: (e.target.value)}
            });
    }

    return (
        <Fragment>
            <FormControl style={{ width: "100%" }} >
                <InputLabel>Country</InputLabel>
                <Select
                    labelId="country-checkbox-label"
                    id="country-checkbox"
                    value={country}
                    onChange={handleCountryEvent}
                    input={<Input />}
                >
                    {COUNTRY_LIST.map((current, index) => {
                        return <MenuItem value={current} key={index} >
                            {current}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
        </Fragment>
    )
}

export default Country;