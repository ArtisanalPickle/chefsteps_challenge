import React from 'react'
import Paper from 'material-ui/Paper'

import './Result.css'

export default class Result extends React.Component {
  render() {
    return <Paper className='components-result'>
      <h1>COMMENT</h1>
      <p>“{this.props.result.comment}”</p>
      <div className='divider'></div>
      <h1>RESULTS</h1>
      <div className='fields'>
        <ul>
          <li>Email count: </li>
          <li>Deduped email count: </li>
          <li>Execution time: </li>
        </ul>
        <ul>
          <li>{this.props.result.emailCount}</li>
          <li>{this.props.result.dedupeCount}</li>
          <li>{this.props.result.executionTime} ms</li>
        </ul>
      </div>
    </Paper>
  }
}
