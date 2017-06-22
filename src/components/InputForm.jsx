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
    this.state = {
      generatedEmails: [], 
      dedupedEmails: [],
      comment: '',
      commentError: null,
      count: 100000,
      countError: null
    }
  }

  render() {
    return <div className='components-input-form'>
      <TextField
        className='text-field'
        floatingLabelText="Leave a comment"
        multiLine={true}
        fullWidth={true}
        errorText={this.state.commentError}
        value={this.state.comment}
        onChange={(_, value) => { this.onEnterComment(value) }}
        rows={2}
      />
      <TextField
        className='text-field'
        fullWidth={true}
        errorText={this.state.countError}
        value={this.state.count}
        onChange={(_, value) => { this.onEnterCount(value) }}
        floatingLabelText="Number of emails to generate"/> 

      <RaisedButton onTouchTap={() => { this.submitInput() }} label="Go!" />
    </div>
  }

  onEnterComment(comment) {
    this.setState({comment: comment})
  }

  validateComment(comment) {
    if(!comment || comment.length == 0) {
      this.setState({commentError: 'Please enter a comment.'})
      return false
    }
    this.setState({commentError: null})
    return true
  }

  onEnterCount(count) {
    this.setState({count: count})
  }

  validateCount(count) {
    if(!count || isNaN(count)) {
      this.setState({countError: 'Please enter a number.'})
      return false
    }
    this.setState({countError: null})
    return true
  }

  submitInput() {
    let commentValid = this.validateComment(this.state.comment)
    let countValid   = this.validateCount(this.state.count)
    if(commentValid && countValid) {
      this.setState({
        comment: '',
        count:   '' 
      })

      let {firebase} = this.props

      let startTime = new Date().getTime()
      let emails = generateEmails(this.state.count)
      let dedupedEmails = dedupeEmails(emails)
      let endTime = new Date().getTime()
      
      firebase.push('/results', {
        comment:       this.state.comment,
        emailCount:    this.state.count,
        dedupeCount:   dedupedEmails.length,
        executionTime: endTime - startTime,
        createdAt:     endTime
      })
    }
  }

}

export default firebaseConnect()(InputForm)
