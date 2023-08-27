import { Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NaviBar() {
    return ( 
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>WebDev Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="me-2">Log In</Button>
                        <Button variant="primary">Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
