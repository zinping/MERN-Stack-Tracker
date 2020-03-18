import React, { Component } from 'react';
import axios from 'axios'

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  // submit form to database then clear username field
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }
    console.log('user submitted', user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  // simple form with a field and a submit button
  render() {
    return (
      <div>
        <h3>Add A User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>UserName:</label>
            <input 
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type='submit' value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}