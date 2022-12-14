import * as React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Modal } from 'components/Modal/Modal';
import { EditContactForm } from 'components/Edit Contact Form/EditContactForm';

export const ContactItem = ({ contact, onDeleteContact }) => {  
    const style = {
        maxWidth: 250,
        minWidth: 150,
        marginRight: 2,
        textAlign: "left",
    };
    const btnStyle = {
        marginRight: 2,
    };

    const [showModal, setShowModal] = useState(false);

    const handleContactClick = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <ListItem divider>
                <ListItemText primary={contact.name} sx={style}/>
                <ListItemText primary={contact.number} sx={style} />
                <Button type="button" variant="contained" sx={btnStyle} onClick={() => onDeleteContact(contact.id)}>Delete</Button>
                <Button type="button" variant="contained" onClick={handleContactClick}>Edit</Button>

                {showModal && <Modal onClose={handleCloseModal}>
                    <EditContactForm contact={contact} />
                </Modal>}

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