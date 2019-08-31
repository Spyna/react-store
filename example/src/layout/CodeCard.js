import React from 'react'
import axios from 'axios'
import Prism from 'prismjs'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CodeIcon from '@material-ui/icons/Code'
import OpenIcon from '@material-ui/icons/OpenInNew'

const style = theme => ({
  paper: {
    maxWidth: 400,
    minWidth: 300,
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },
  fullLength: {
    minWidth: 300,
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

class Card extends React.Component {
  state = { showCode: false }

  componentDidUpdate() {
    Prism.highlightAll()
  }

  showCode = async () => {
    let { showCode, code } = this.state
    if (!code) {
      const response = await axios.get(
        `https://raw.githubusercontent.com/Spyna/react-store/master/example/${this.props.source}`
      )
      code = response.data
    }
    this.setState({ code, showCode: !showCode })
  }

  render() {
    const { title, source, classes, fullLength } = this.props
    const { code, showCode } = this.state
    return (
      <Paper className={fullLength ? classes.fullLength : classes.paper}>
        <h3 className={classes.title}>
          {title}
          <span className="float-right">
            <IconButton
              onClick={this.showCode}
              title={`${showCode ? 'Hide' : 'Show'} the source code`}
            >
              <CodeIcon fontSize="small" />
            </IconButton>
            <IconButton title="View on Github">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/Spyna/react-store/blob/master/example/${source}`}
              >
                <OpenIcon fontSize="small" />
              </a>
            </IconButton>
          </span>
        </h3>
        {showCode && (
          <pre className="language-javascript">
            <code className="language-javascript">{code}</code>
          </pre>
        )}
        {this.props.children}
      </Paper>
    )
  }
}

export default withStyles(style)(Card)
