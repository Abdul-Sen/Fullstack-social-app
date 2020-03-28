import React, { Fragment, useEffect } from 'react';
import { FormControl, Input, MenuItem, Checkbox, ListItemText,InputLabel,Select, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
  }));

  const ROLES = [
    'Systems Developer',
    'Mobile Dev',
    'UX/UI Design',
    'Backend Developer',
    'Fullstack'
  ];
  
  
function Role(props) {
    
    const {role} = useSelector((currentState)=> currentState.searchReducer);
    const dispatch = useDispatch();
    const handleChange = event => {
        dispatch({
            type: "UPDATE_SEARCH",
            payload: {role: (event.target.value) }
        });
      };
          
    const classes = useStyles();
    return (
        <Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel id="role-mutiple-checkbox-label">Role</InputLabel>
                <Select
                    labelId="role-mutiple-checkbox-label"
                    id="role-mutiple-checkbox"
                    multiple
                    value={role}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={selected => selected.join(', ')}
                >
                    {ROLES.map(currentRole => (
                        <MenuItem key={currentRole} value={currentRole}>
                            <Checkbox checked={role.indexOf(currentRole) > -1} />
                            <ListItemText primary={currentRole} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </Fragment>
    );
}

export default Role;