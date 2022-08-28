import * as React from 'react';
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

export const ContactItem = ({ contact, onDeleteContact }) => {  
    const style = {
        maxWidth: 200,
    };

    return (
        <>
            <ListItem divider>
                <ListItemText primary={contact.name} sx={style} />
                <ListItemText primary={contact.number} sx={style} />
                <Button type="button" variant="contained" onClick={() => onDeleteContact(contact.id)}>Delete</Button>
            </ListItem>
            <Divider />
        </>
    );
};

ContactItem.propTypes = {
    onDeleteContact: PropTypes.func,
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
};