import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, orderedToJS, isLoaded } from 'react-redux-firebase'
import _ from 'lodash'

import Result from './Result'

import './ResultsList.css'

class ResultsList extends React.Component {

  render() {
    let results = this.props.results
    return <div className='components-results-list'>
      {isLoaded(results) ? _.map(_.reverse(_.values(results)), (result, i) => (
        <Result key={i} result={result} />
      )) : null}
    </div>
  }

}
const reduxWrapped = connect(({firebase}) => ({
  results: orderedToJS(firebase, '/results')
}))(ResultsList)

export default firebaseConnect({path: '/results', queryParams: [ 'orderByChild=createdAt' ]})(reduxWrapped)
