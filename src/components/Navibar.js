import { Button, Navbar, Nav } from "react-bootstrap";

export function NaviBar() {
    return ( 
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>WebDev Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Users</Nav.Link>
                        <Nav.Lin>About</Nav.Lin>
                    </Nav>
                    <Nav>
                        <Button variant="primary">Log In</Button>
                        <Button variant="primary">Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
