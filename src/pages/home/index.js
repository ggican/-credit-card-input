import React from "react";

// begin global components
import Container from "../../components/container";
import Content from "../../components/content";
import CreditCardForm from "../../components/CreditCardForm";

const Home = () => {
    return (
        <Container>
            <Content>
                <CreditCardForm />
            </Content>
        </Container>
    );
};

export default Home;
