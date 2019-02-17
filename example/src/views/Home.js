import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const style = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  badgeLink: {
    margin: 2
  },
  cookies: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    color: `${theme.palette.primary.contrastText}!important`,
    margin: 2
  }
})

class Home extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paper}>
        <div className="panel">
          <div className="panel-head">
            <p className="panel-title">
              @spyna/react-store{' '}
              <a href="https://github.com/Spyna/react-store">View on GitHub</a>
            </p>
            <small className={classes.cookies}>
              <i className="material-icons">info</i>
              <span>This site uses Google Analytics cookies</span>
            </small>
          </div>
          <div>
            <p>
              <a
                href="https://www.npmjs.com/package/@spyna/react-store"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/c6f2dacadd965745d3fe511bf0b70ff48899fe87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407370796e612f72656163742d73746f72652e737667"
                  alt="NPM"
                  data-canonical-src="https://img.shields.io/npm/v/@spyna/react-store.svg"
                />
              </a>
              <a
                href="https://standardjs.com"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/58fbab8bb63d069c1e4fb3fa37c2899c38ffcd18/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d7374616e646172642d627269676874677265656e2e737667"
                  alt="JavaScript Style Guide"
                  data-canonical-src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"
                />
              </a>
              <a
                href="https://circleci.com/gh/Spyna/workflows/react-store"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/ab44337af01686c437ad2c6f5a65c5b84e2fef73/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f70726f6a6563742f6769746875622f5370796e612f72656163742d73746f72652f6d61737465722e7376673f7374796c653d666c61742d737175617265"
                  alt="CircleCI"
                  data-canonical-src="https://img.shields.io/circleci/project/github/Spyna/react-store/master.svg?style=flat-square"
                />
              </a>

              <a
                href="https://bundlephobia.com/result?p=@spyna/react-store@1.0.0"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/e4fe09f4723077eb76e1a4422105b0d234536e8b/68747470733a2f2f696d672e736869656c64732e696f2f62756e646c6570686f6269612f6d696e7a69702f407370796e612f72656163742d73746f72652e7376673f7374796c653d666c61742d737175617265"
                  alt="Bundle Phobia"
                  data-canonical-src="https://img.shields.io/bundlephobia/minzip/@spyna/react-store.svg?style=flat-square"
                />
              </a>

              <a
                href="https://www.npmjs.com/package/@spyna/react-store"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/727dca580c0a91df8989ed41b39d8d3635e02f97/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f407370796e612f72656163742d73746f72652e7376673f7374796c653d666c61742d737175617265"
                  alt="Npm downloads"
                  data-canonical-src="https://img.shields.io/npm/dt/@spyna/react-store.svg?style=flat-square"
                />
              </a>

              <a
                href="https://www.npmjs.com/package/@spyna/react-store"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/c6b45bda4b0c38375a226eceaa4e05e205226a5d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646570656e64656e63792d76657273696f6e2f407370796e612f72656163742d73746f72652f706565722f72656163742e7376673f7374796c653d666c61742d737175617265"
                  alt="React Version"
                  data-canonical-src="https://img.shields.io/npm/dependency-version/@spyna/react-store/peer/react.svg?style=flat-square"
                />
              </a>

              <a
                href="https://codecov.io/gh/Spyna/react-store"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/39c03f0d43b53932417dc8935468ca8dbdaa69fd/68747470733a2f2f636f6465636f762e696f2f67682f5370796e612f72656163742d73746f72652f6272616e63682f6d61737465722f67726170682f62616467652e737667"
                  alt="codecov"
                  data-canonical-src="https://codecov.io/gh/Spyna/react-store/branch/master/graph/badge.svg"
                />
              </a>
              <a
                href="https://www.codefactor.io/repository/github/spyna/react-store/overview/master"
                rel="nofollow"
                className={classes.badgeLink}
              >
                <img
                  src="https://camo.githubusercontent.com/3a66876f30d1a4f5d9e1007ae6bd17af80d5b017/68747470733a2f2f7777772e636f6465666163746f722e696f2f7265706f7369746f72792f6769746875622f5370796e612f72656163742d73746f72652f62616467653f7374796c653d666c61742d737175617265"
                  alt="codefactor"
                  data-canonical-src="https://www.codefactor.io/repository/github/Spyna/react-store/badge?style=flat-square"
                />
              </a>
            </p>
            <p>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/demo"
                className={classes.button}
              >
                View Demo
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/performances"
                className={classes.button}
              >
                View Performances
              </Button>
            </p>
            <p>
              This library gives you the ability to manage the state of a React
              app. It uses a global store, shared with all the bound components
              of the application.
            </p>
            <p>
              The <code>store</code> is created using the function{' '}
              <code>createStore</code>. This function is similar to the{' '}
              <em>redux Provider</em>.
            </p>
            <p>
              To bind a Component to the store you use the function{' '}
              <code>withStore</code>. This function injects in the Component a{' '}
              <em>prop</em> called <code>store</code>, whereby you can read,
              write, and remove data globally within the application.
            </p>
          </div>
        </div>
      </Paper>
    )
  }
}

export default withStyles(style)(Home)
