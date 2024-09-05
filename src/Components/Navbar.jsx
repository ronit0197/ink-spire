import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SiteNavbar = () => {
    return (
        <Navbar className='navbar' data-bs-theme="dark">
            <Container fluid className='d-flex justify-content-between'>
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src="/logo/Logo.jpg" width={100} fluid />
                    </Navbar.Brand>
                </Container>
                <Container className='d-flex justify-content-end'>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline className='ms-4'>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </Navbar>
    )
}

export default SiteNavbar