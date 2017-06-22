import React               from 'react'
import { firebaseConnect } from 'react-redux-firebase'

import generateEmails      from '../util/generateEmails'
import dedupeEmails        from '../util/dedupeEmails'

class InputForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {generatedEmails: [], dedupedEmails: []}
  }

  render() {
    return <div>
      <input type="text" name="fname" placeholder='hi' />
      <button onClick={() => {this.submitInput()}}>submit</button>
      <div>Input Length: {this.state.generatedEmails.length}</div>
      <br/>
      <div>Deduped Length: {this.state.dedupedEmails.length}</div>
    </div>
  }

  submitInput() {
    let {firebase} = this.props

    let emails = generateEmails(100000)
    let dedupedEmails = dedupeEmails(emails)
    //firebase.push('/results', {emailCount: 1000})
    this.setState({generatedEmails: emails, dedupedEmails: dedupedEmails})
  }

}

export default firebaseConnect()(InputForm)
