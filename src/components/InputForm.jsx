import React               from 'react'
import { firebaseConnect } from 'react-redux-firebase'
import RaisedButton        from 'material-ui/RaisedButton'
import TextField           from 'material-ui/TextField'

import generateEmails      from '../util/generateEmails'
import dedupeEmails        from '../util/dedupeEmails'

import './InputForm.css'

class InputForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {generatedEmails: [], dedupedEmails: []}
  }

  render() {
    return <div>
      <TextField
        className='text-field'
        floatingLabelText="Leave a comment"
        multiLine={true}
        fullWidth={true}
        rows={2}
      />
      <TextField
        className='text-field'
        fullWidth={true}
        floatingLabelText="Number of emails to generate"/> 

      <RaisedButton label="Go!" />
    </div>
  }

  submitInput(count) {
    let {firebase} = this.props

    let startTime = new Date().getTime()
    let emails = generateEmails(count)
    let dedupedEmails = dedupeEmails(emails)
    let endTime = new Date().getTime()
    
    firebase.push('/results', {
      emailCount:    count,
      dedupeCount:   dedupedEmails.length,
      executionTime: endTime - startTime
    })
  }

}

export default firebaseConnect()(InputForm)
