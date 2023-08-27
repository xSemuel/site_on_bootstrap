import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Slider } from "./Slider";
import Slide1 from '../image/Slide1.jpg'

export function Home() {
    return ( 
        <>
            <h1>Home Page</h1>
            <Slider />
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Slide1} />
                            <Card.Body>
                                <Card.Title>WebDev Blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}