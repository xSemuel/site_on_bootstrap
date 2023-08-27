import { Table, Container } from 'react-bootstrap';

export function Users() {
    return ( 
        <Container>
           <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@ndo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>dgfdMark</td>
                        <td>fgdfgOtto</td>
                        <td>fgf@ndo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>dgfdrgfdgMark</td>
                        <td>fgdfgfdbgOtto</td>
                        <td>fgf@nggdo</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}
