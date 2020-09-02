import React, { Component } from 'react';
import { signIn } from '../actions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
class SignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      username: 'username',
      pass: 'username'
    }
  }
  render() { 
    return (  
      <>
        <div className="row pt-5">
          <div className="col-4 offset-4">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  defaultValue="usertest"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  defaultValue="usertest" 
                />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit" 
                onClick={(e) => {
                  e.preventDefault();
                  this.props.signIn(
                    this.state.username,
                    this.state.pass,
                    this.props.history
                  );
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
 
export default connect(
  ({auth: {isLoading, user}}) => ({isLoading, user}),
  {signIn}
)(withRouter(SignForm));