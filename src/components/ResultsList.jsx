import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase'
import _ from 'lodash'

import Result from './Result'

class ResultsList extends React.Component {

  render() {
    let results = this.props.results
    return <div className='components-results-list'>
      {isLoaded(results) ? _.map(results, (result, key) => (
        <Result key={key} result={result} />
      )) : null}
    </div>
  }

}
const reduxWrapped = connect(({firebase}) => ({
  results: dataToJS(firebase, '/results')
}))(ResultsList)

export default firebaseConnect(['/results'])(reduxWrapped)
