import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Tooltip from '@material-ui/core/Tooltip'
import GithubIcon from '../../Components/SvgIcons/GitHub'
import DemoIcon from '@material-ui/icons/VideoLabel'
import PerformaceIcon from '@material-ui/icons/TrendingUp'

const styles = theme => ({
  link: {
    color: 'white!important',
    display: 'inline-block',
    margin: 8
  },
  grow: {
    flex: '1 1 auto'
  }
})

function Header(props) {
  const { classes } = props
  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          color="primary"
          className={classes.link}
          component={Link}
          to="/"
        >
          react-store
        </Button>
        <div className={classes.grow} />
        <Tooltip title="Show demo" enterDelay={300}>
          <IconButton
            className={classes.link}
            component={Link}
            color="inherit"
            to="/demo"
            aria-label="Show demo"
          >
            <DemoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Show performances" enterDelay={300}>
          <IconButton
            className={classes.link}
            component={Link}
            color="inherit"
            to="/performances"
            aria-label="Show performances"
          >
            <PerformaceIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub repository" enterDelay={300}>
          <IconButton
            className={classes.link}
            component="a"
            color="inherit"
            href="https://github.com/Spyna/react-store"
            aria-label="GitHub repository"
          >
            <GithubIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
