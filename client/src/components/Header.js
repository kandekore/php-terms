
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
  };

  return (
    <Navbar expand="lg" sticky="top" className={styles.header + ' bg-body-tertiary'}>
      <Container>
        <Navbar.Brand href="/">PHP Concepts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink + ' nav-link' : 'nav-link'}>Home</NavLink>
                        <NavLink to="/variables" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Variables</NavLink>
            <NavLink to="/operators" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Operators</NavLink>
            <NavLink to="/control-flow" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Control Flow</NavLink>
            <NavLink to="/functions" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Functions</NavLink>
            <NavLink to="/scope" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Scope</NavLink>
            <NavLink to="/array-methods" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Array Methods</NavLink>
            <NavLink to="/array-iteration" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Array Iteration</NavLink>
            <NavDropdown title="More" id="navbarScrollingDropdown">
                           <NavDropdown.Item as={Link} to="/array-iteration" className="dropdown-item">
    Array Iteration
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/objects" className="dropdown-item">
    Objects
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/promises-and-asynchronous-php" className="dropdown-item">
    Promises and Asynchronous PHP
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/error-handling" className="dropdown-item">
    Error Handling
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/json-handling" className="dropdown-item">
    JSON Handling
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/php-tags-and-basics" className="dropdown-item">
    PHP Tags and Basics
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/database-interaction" className="dropdown-item">
    Database Interaction
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/web-development-concepts" className="dropdown-item">
    Web Development Concepts
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/php-and-html" className="dropdown-item">
    PHP and HTML
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/security" className="dropdown-item">
    Security
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/advanced-php-features" className="dropdown-item">
    Advanced PHP Features
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/php.ini-configuration" className="dropdown-item">
    PHP.ini Configuration
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/php-frameworks-and-composer" className="dropdown-item">
    PHP Frameworks and Composer
  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
