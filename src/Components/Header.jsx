/** @format */
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

	return (
		<div>

			<nav>
				<Navbar bg='light' expand='lg'>
					<Container>
						<Navbar.Brand as={Link} to='/'>NC News</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='me-auto'>
								<Nav.Link as={Link} to='/'>Home</Nav.Link>

								<Nav.Link as={Link} to='/new-article'>Post a new article</Nav.Link>
								<Nav.Link as={Link} to='/login'>Login</Nav.Link>
								<Nav.Link as={Link} to='/sign-up'>Sign-up</Nav.Link>
								
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</nav>
		</div>
	);
}
