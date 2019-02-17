import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import DisplayComponent from './DisplayComponent'
import Ul from './Ul'
import demoData from './demoData'
import Card from '../../layout/CodeCard'

const reducer = (state = {}, action) => {
  const { id, type } = action
  if (type !== 'increment') {
    return state
  }
  const result = {
    ...state
  }
  result[id].amount = result[id].amount + 1
  return result
}

const timing = store => next => action => {
  const start = new Date().getTime()
  let result = next(action)
  const end = new Date().getTime()
  console.log(
    `%c Action took ${end - start} milliseconds.`,
    'background: #bada55; color: #222'
  )
  return result
}

const initialState = { amounts: demoData() }

const store = createStore(
  combineReducers({
    amounts: reducer
  }),
  initialState,
  applyMiddleware(timing)
)

class ReactRedux extends React.PureComponent {
  componentDidUpdate() {
    const end = new Date().getTime()
    console.log(
      `%c Render took ${end - this.start} milliseconds.`,
      'background: #dada55; color: #222'
    )
  }

  render() {
    const { increment, amounts } = this.props
    const data = Object.keys(amounts)
    return (
      <Card
        title="With react-redux"
        source="src/views/Performances/ReactRedux.js"
      >
        <Ul>
          {data.map(id => (
            <DisplayComponent
              datum={amounts[id]}
              key={`redux-${id}`}
              onClick={id => {
                this.start = new Date().getTime()
                increment(id)
              }}
            />
          ))}
        </Ul>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  amounts: state.amounts
})

const increment = id => ({ type: 'increment', id })

const ConnectedComponent = connect(
  mapStateToProps,
  { increment }
)(ReactRedux)

export default () => (
  <Provider store={store}>
    <ConnectedComponent />
  </Provider>
)
