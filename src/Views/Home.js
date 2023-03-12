import React from 'react';
import { Link } from 'react-router-dom';
// import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import styled from 'styled-components';

const BodyDiv = styled.div`

`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Card = styled.div`
    width: 18rem;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    margin: 0.5rem;
`

const CardImage = styled.img`
    object-fit: contain;
    max-width: 18rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    /* margin-left: 0.3rem; */
    /* margin-top: 0.3rem; */
`

const CardTitle = styled.h3`
    font-weight: bold;
`

const CardSubtitle = styled.h4`

`

const CardText = styled.p`

`;

const CardBody = styled.div`
    padding: 1rem;
`;

const Home = () => {
    return (<BodyDiv>
        <h2>Some things:</h2>
        <ul>
            <li><Link to="/STCatalog"> Storytelling</Link></li>
            <li><Link to="/ReactStrapTutorial">ReactStrapTutorial</Link></li>
            <li>Music</li>
            <li>WEB AR</li>
        </ul>
        {/* Some cards, anyone? */}
        <CardsContainer>
            <Card
                style={{ width: '18rem', paddingTop: 0, paddingLeft: 0 }}
            >
                <CardImage
                    src="https://picsum.photos/300/200"
                    alt="random lorem picsum" />
                <CardBody>
                    <CardTitle tag="h5">
                        Storytelling!
                    </CardTitle>
                    <CardSubtitle tag="h6">
                        Telling is cool
                    </CardSubtitle>
                    <CardText>
                        Some of the things I do with storytelling.
                    </CardText>
                </CardBody>
            </Card>

            <Card
                style={{ width: '18rem', paddingTop: 0, paddingLeft: 0 }}
            >
                <CardImage
                    src="https://picsum.photos/300/200"
                    alt="random lorem picsum" />
                <CardBody>
                    <CardTitle tag="h5">
                        Storytelling!
                    </CardTitle>
                    <CardSubtitle tag="h6">
                        Telling is cool
                    </CardSubtitle>
                    <CardText>
                        Some of the things I do with storytelling.
                    </CardText>
                </CardBody>
            </Card>
        </CardsContainer>

    </BodyDiv>)

}

export default Home;