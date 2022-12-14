import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/contacts";

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => dispatch(setFilter(event.target.value));
  
  return (
    <TextField label="Find contacts by name" type="search" value={filter} onChange={handleChangeFilter} />
  );  
};