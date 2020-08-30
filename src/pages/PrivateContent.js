import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrivateContent extends Component {
	render() {
		return (
			<>
				<h1 className="display-5"> Private contet</h1>
				{ this.props.user && <h5> User: {this.props.user.username}</h5>}
				
			</>
		);
	}
}
export default connect(
	({auth: {user, isLoading}})=> ({user, isLoading})
)(PrivateContent);