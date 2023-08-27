import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Slider, Jumbotron } from '../components';
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

            {/* <Jumbotron /> */}

            <Container style={{ marginBottom : '30px' }}>
                <Row>
                    <Col md={7}>
                        <img src={Slide1} height={400} alt="foto"/>
                    </Col>
                    <Col md={5}>
                        <h2>Web Developer Blog</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum rem temporibus molestias tempore. Necessitatibus, perferendis. Distinctio cupiditate magni laborum possimus incidunt ipsam exercitationem maiores, soluta asperiores quasi illo neque veniam.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}