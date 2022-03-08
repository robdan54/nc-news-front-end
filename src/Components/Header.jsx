/** @format */
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand as={Link} to='/' className='nav nav-tabs'>
					<h1>NC News</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link as={Link} to='/' className="nav-link">
							Home
						</Nav.Link>

						<Nav.Link as={Link} to='/new-article' className="nav-link">
							Post a new article
						</Nav.Link>
						<Nav.Link as={Link} to='/login' className="nav-link">
							Login
						</Nav.Link>
						<Nav.Link as={Link} to='/sign-up' className="nav-link">
							Sign-up
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
