import { Container } from "react-bootstrap";


export function Footer() {
    return ( 
        <Container fluid style={{background: 'rgba(var(--bs-dark-rgb)', color: '#fff'}}> 
            <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <p>Web Developer Blog</p>
            </Container>
        </Container>   
    );
}