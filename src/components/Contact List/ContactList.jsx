import { useSelector } from "react-redux"; 
import { List } from "./ContactList.styled";
import { ContactItem } from "components/Contact/Contact";
import { useGetContactsQuery, useDeleteContactMutation } from "redux/contactsApi";

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
    
    return <List>
                {filteredContacts.map(contact =>
                    <ContactItem key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
                )}
            </List>   
};