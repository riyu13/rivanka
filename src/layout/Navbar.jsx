import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../style/Navbar.css"

const Navbars = () => {
  return (
    <Navbar className="bg-body-tertiary fixed-top">
    <Container>
  <Navbar.Brand><NavLink to='/' className='text'><div className="h3">Gilang Firza Rivanka</div></NavLink></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Nav>
      <Nav.Item>
        <a href="#porto" className='text'>Portofolio</a>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars
