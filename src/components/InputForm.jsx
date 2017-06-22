import React               from 'react'
import { firebaseConnect } from 'react-redux-firebase'

class InputForm extends React.Component {

  render() {
    return <div>
      <input type="text" name="fname" placeholder='hi' />
      <button onClick={() => {this.submitInput()}}>submit</button>
    </div>
  }

  submitInput() {
    let {firebase} = this.props
    firebase.push('/results', {emailCount: 1000})
  }

}

export default firebaseConnect()(InputForm)
