import { Container } from "@mui/material";
import { HomePageTitle, HomePageImage } from "components/App/App.styled";

const Home = () => {
    return (
        <Container sx={{
            justifyContent: 'center',
            paddingTop: 3,
            }}>
            <HomePageTitle>Best application for managing your contacts.</HomePageTitle>
            <HomePageImage src="https://i.pcmag.com/imagery/roundups/03xvQQX5euoq30C7pYTGlPZ-2.fit_lim.size_850x490.v1631145621.jpg" alt="phonebook icon" />
        </Container> 
    );
};

export default Home;