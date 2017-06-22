import React from 'react'

export default class Result extends React.Component {
  render() {
    return <div>
      {this.props.result.comment}
    </div>
  }
}
