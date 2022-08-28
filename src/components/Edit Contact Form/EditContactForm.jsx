import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from 'components/Edit Contact Form/EditContactForm.styled';
import { useUpdateContactMutation } from 'redux/contactsApi';

export const EditContactForm = ({ contact }) => {
    const [updateContact] = useUpdateContactMutation();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = event => setName(event.target.value);
    const handleNumberChange = event => setNumber(event.target.value);

    const update = (event) => {
        console.log(event.target)
        updateContact({
            id: contact.id, payload: {
                name: event.target.name.value,
                number: event.target.number.value,
            }
        });
    };

    return (
        <Container>
            <Box onSubmit={update}
                component="form"
                display="flex"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                autoComplete="off"
            >
                <TextField
                    type="text"
                    label="Name"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleNameChange}
                />
                <TextField
                    type="tel"
                    label="Number"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleNumberChange}
                />
                <Button type="submit" variant="contained">Save</Button>
            </Box>
        </Container>
    );
};