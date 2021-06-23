import './App.css';
import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    const {user, age , surname} = this.props;
    return <div>
      <p>Привет из App, { user } {surname}!</p>
      <p>Тебе уже {age} ?</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    age: state.age,
    surname: state.surname
  }
}

export default connect(mapStateToProps)(App)