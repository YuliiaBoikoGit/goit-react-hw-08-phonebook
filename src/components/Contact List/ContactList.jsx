import * as React from 'react';
import { useSelector } from "react-redux"; 
import List from '@mui/material/List';
import { ContactItem } from "components/Contact/Contact";
import { useGetContactsQuery, useDeleteContactMutation } from "redux/contactsApi";
import { ListContainer } from './ContactList.styled';

export const ContactList = () => {
    const filter = useSelector(state => state.contacts.filter);
    const { data: contacts = [] } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    const handleDeleteContact = contactID => {
        deleteContact({ id: contactID });
    };

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };

    const filteredContacts = getFilteredContacts();

    const style = {
        width: '100%',
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        bgcolor: 'background.paper',
    };
    
    return (
        <ListContainer>
            <List sx={style} component="nav" aria-label="contacts list">
                {filteredContacts.map(contact =>
                    <ContactItem key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
                )}
            </List>
        </ListContainer>
    )
};