import { Container, PageTitle, Title } from "./App.styled";
import { ContactForm } from "components/Contact Form/ContactForm";
import { ContactList } from "components/Contact List/ContactList";
import { Filter } from "components/Filter/Filter";

export const App = () => {
    return (
      <Container>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm />

        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Container>
    );
};
