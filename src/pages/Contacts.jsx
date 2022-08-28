import { Container, Title } from "components/App/App.styled";
import { ContactForm } from "components/Contact Form/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/Contact List/ContactList";
import UserMenu from "components/UserMenu/UserMenu";

const Contacts = () => {
    return (
        <>
            <UserMenu />
            <Container>
                <Title>Create contact</Title>
                <ContactForm />

                <Title>Contacts</Title>
                <Filter />
                <ContactList />
            </Container>
        </>
    );
};

export default Contacts;