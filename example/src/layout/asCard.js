import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
  card: {
    // maxWidth: 400
  }
})

const asCard = (title = '', WrappedComponent) => {
  return withStyles(styles)(
    class extends React.Component {
      render() {
        const { classes } = this.props

        return (
          <Card className={classes.card}>
            <CardHeader title={title} />
            <CardContent>
              <WrappedComponent {...this.props} />
            </CardContent>
          </Card>
        )
      }
    }
  )
}

export default asCard
