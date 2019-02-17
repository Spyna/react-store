import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const style = {
  li: {
    display: 'inline-block',
    listItem: 'none',
    padding: 2,
    margin: 2,
    border: '1px solid #ccc'
  },
  button: {
    cursor: 'pointer'
  }
}

class Display extends React.Component {
  render() {
    const { classes, datum, onClick } = this.props
    // console.log('rendering', datum.id)
    return (
      <li className={classes.li}>
        {datum.amount}{' '}
        <Button
          mini
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={() => onClick(datum.id)}
        >
          +
        </Button>
      </li>
    )
  }
}

export default withStyles(style)(Display)
