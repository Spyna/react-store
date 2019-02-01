# @spyna/react-store

> React app state management that uses a storage

## Install

```bash
npm install --save @spyna/react-store
```

## Usage

TODO 

```jsx
import React, { Component } from 'react'
import { createStore, withStore } from '@spyna/react-store'

class MyComponent extends Component {
   render() {
     return (
       <p>My Store: {this.props.store.amount}</p>
     )
   }
}

const ConnectedComponent = withStore(MyComponent);

class App extends Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>
          Uses a store to share data between different Components, Routes,
          Views, etc...
        </p>
        <div className="container">
          <ConnectedComponent />
        </div>
      </div>
    )
  }
}

const initialValue = {
  amount: 15,
  username : {
    name : 'spyna',
    url : 'https://spyna.it'
  }
}

export default createStore(initialValue)(App)

```

## License

MIT © [Spyna](https://github.com/Spyna)
