import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Exercise component, props (exercise, delete component and key) are passed in
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>
        <button type="button">
          Edit
        </button>
      </Link>
      <button onClick={() => { props.deleteExercise(props.exercise._id)}}>
        Delete
      </button>
    </td>
  </tr>
)
export default class ExercisesList extends Component {

  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // For every element in the exercise array return an Exercise component
  // pass in 3 props
  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
    }
    )
  }

  // use axios delete and filter array so database elements not matching the chosen id are kept
  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }


  render() {
    return (
      <div>
        <h3>Exercise Log</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>

    )

  }
}