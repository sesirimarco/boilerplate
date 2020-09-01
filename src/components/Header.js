import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLogged, signOut } from '../actions'
import { NavLink, Redirect } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: props.isloading,
			user: props.user,
			redirectTo: null
		};
	}
	static getDerivedStateFromProps(props, state) {
    if (props.user !== state.user) {
      return {
        user: props.user,
      };
    }
    return null;
  }
	componentDidMount() {
		this.props.isLogged();
	}
	render() {
		return (
			<header>
				{this.state.redirectTo && <Redirect to={this.state.redirectTo}></Redirect>}
				<Navbar bg="light" expand="lg">
					<NavLink to="/">
						<h4>Brand</h4>
					</NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						{this.state.user ? 
							(
								<NavDropdown 
									title={this.state.user.username} 
									id="basic-nav-dropdown"
								>
										<NavLink to="/profile">
											<div className="nav-item nav-link">Profile</div>
										</NavLink>
									<NavDropdown.Divider />
									<div 
										className="nav-item nav-link"
										onClick={() => {
											this.props.signOut();
											this.setState({redirectTo: '/'})
										}}
									>Logout</div>
								</NavDropdown>
							) : (
								<NavLink to="/signin">
									<h5 className="pt-1 pl-2">Sign in</h5>
								</NavLink>
							)
						}
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}
/*const mapStateToProps = (state) => {
	const {
		auth: { isLoading, user },
	} = state;
	return { isLoading, user };
}*/
export default connect(
	({auth: {isLoading, user}}) => ({isLoading, user}),
  {isLogged, signOut}
)(Header);
