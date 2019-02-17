import React from 'react'
export default props => (
  <ul style={{ maxHeight: 400, overflow: 'auto' }}>{props.children}</ul>
)
