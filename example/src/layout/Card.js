import React from 'react'
import axios from 'axios'
import Prism from 'prismjs'

export default class Card extends React.Component {
  state = { showCode: false }

  componentDidUpdate() {
    Prism.highlightAll()
  }

  showCode = async () => {
    let { showCode, code } = this.state
    if (!code) {
      const response = await axios.get(
        `https://raw.githubusercontent.com/Spyna/react-store/master/example/src/${
          this.props.title
        }.js`
      )
      code = response.data
    }
    this.setState({ code, showCode: !showCode })
  }

  render() {
    const { size = 6, title } = this.props
    const { code, showCode } = this.state
    return (
      <div className={`col col-md-${size}`}>
        <div className="card">
          <h3 className="card-title">
            {title}.js
            <span className="float-right">
              <button
                onClick={this.showCode}
                title={`${showCode ? 'Hide' : 'Show'} the source code`}
              >
                <i className="material-icons">code</i>
              </button>
              <button title="View on Github">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://github.com/Spyna/react-store/blob/master/example/src/${
                    this.props.title
                  }.js`}
                >
                  <i class="material-icons">open_in_new</i>
                </a>
              </button>
            </span>
          </h3>
          {showCode && (
            <pre className="language-javascript">
              <code className="language-javascript">{code}</code>
            </pre>
          )}
          {this.props.children}
        </div>
      </div>
    )
  }
}
