import React, { Component } from 'react';
import {
	Collapse,
	Navbar, 
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container

} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';


class AppNavbar extends Component {

	state = {
		isOpen: false
	}
	// Sets the isOpen attribute to the opposite value
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	
	}
	render() {

		return (
 
		<div>
		<Navbar color="info" dark expand="sm" className="mb-5">
		  <Container>
		   <NavbarBrand href="/">ErgoWeb</NavbarBrand>
		    <NavbarToggler onClick={this.toggle}/>
		     <Collapse isOpen={this.state.isOpen} navbar>
		      <Nav className="ml-auto" navbar>
		       <NavItem>
		        <RegisterModal />
		       </NavItem>
			   <NavItem>
				   <Logout />
			   </NavItem>
		      </Nav>
		    </Collapse>
		 </Container>
		</Navbar>
		</div>


		);
	
	}
}


export default AppNavbar; 
