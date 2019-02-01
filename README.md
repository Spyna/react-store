# spyna-react-store

> React app state management that uses a storage


 
[![NPM](https://img.shields.io/npm/v/spyna-react-store.svg)](https://www.npmjs.com/package/spyna-react-store) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![CircleCI](https://img.shields.io/circleci/project/github/Spyna/react-store/master.svg?style=flat-square)](https://img.shields.io/circleci/project/github/Spyna/react-store/master.svg?style=flat-square)

[![Bundle Phobia](https://img.shields.io/bundlephobia/minzip/spyna-react-store.svg?style=flat-square)](https://img.shields.io/bundlephobia/minzip/spyna-react-store.svg?style=flat-square)

[![Npm version](https://img.shields.io/npm/v/spyna-react-store.svg?style=flat-square)](https://img.shields.io/npm/v/spyna-react-store.svg?style=flat-square)

[![Npm downloads](https://img.shields.io/npm/dt/spyna-react-store.svg?style=flat-square)](https://img.shields.io/npm/dt/spyna-react-store.svg)

[![React Version](https://img.shields.io/npm/dependency-version/spyna-react-store/peer/react.svg?style=flat-square)](https://img.shields.io/npm/dependency-version/spyna-react-store/peer/react.svg?style=flat-square)

[![codecov](https://codecov.io/gh/Spyna/react-store/branch/master/graph/badge.svg)](https://codecov.io/gh/Spyna/react-store)

[![codefactor](https://www.codefactor.io/repository/github/Spyna/react-store/badge?style=flat-square)](https://www.codefactor.io/repository/github/spyna/react-store/overview/master)
  


## Demo 

https://spyna.github.io/react-store/

## Install

```bash
npm install --save spyna-react-store
```

## Usage

TODO 

```jsx
import React, { Component } from 'react'
import { createStore, withStore } from 'spyna-react-store'

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
