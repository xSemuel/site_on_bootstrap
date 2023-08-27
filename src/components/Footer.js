import { Container } from "react-bootstrap";


export function Footer() {
    return ( 
        <Container fluid style={{ backgrounColor: '#212529', color: '#fff'}}> 
            <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <p>Web Developer Blog</p>
            </Container>
        </Container>   
    );
}