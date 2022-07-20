import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Navbar.css'

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="sm">
      <Navbar.Brand as={Link} to="/">
        <p id="claim">Black Cloud Storage</p>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" id="prf-hdr">
          User Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
