import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Title } from "components/App/App.styled";
import { ContactForm } from "components/Contact Form/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/Contact List/ContactList";
import UserMenu from "components/UserMenu/UserMenu";
import { Container } from "@mui/material";

const Contacts = () => {
    return (
        <Container>
            <UserMenu />
            <Container sx={{display: 'flex', paddingTop: 3,}}>
                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    textAlign: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 700,
                        padding: 3,
                    },
                    }}
                >
                    <Paper elevation={3}>
                        <Title>Contacts</Title>
                        <Filter />
                        <ContactList />
                    </Paper>
                </Box>
                <ContactForm />
            </Container>
        </Container>
    );
};

export default Contacts;