# @spyna/react-store

> React app state management that uses a storage

[![NPM](https://img.shields.io/npm/v/@spyna/react-store.svg)](https://www.npmjs.com/package/@spyna/react-store) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![CircleCI](https://img.shields.io/circleci/project/github/Spyna/react-store/master.svg?style=flat-square)](https://img.shields.io/circleci/project/github/Spyna/react-store/master.svg?style=flat-square)
[![Bundle Phobia](https://img.shields.io/bundlephobia/minzip/@spyna/react-store.svg?style=flat-square)](https://img.shields.io/bundlephobia/minzip/@spyna/react-store.svg?style=flat-square)
[![Npm version](https://img.shields.io/npm/v/@spyna/react-store.svg?style=flat-square)](https://img.shields.io/npm/v/@spyna/react-store.svg?style=flat-square)
[![Npm downloads](https://img.shields.io/npm/dt/@spyna/react-store.svg?style=flat-square)](https://img.shields.io/npm/dt/@spyna/react-store.svg)
[![React Version](https://img.shields.io/npm/dependency-version/@spyna/react-store/peer/react.svg?style=flat-square)](https://img.shields.io/npm/dependency-version/@spyna/react-store/peer/react.svg?style=flat-square)
[![codecov](https://codecov.io/gh/Spyna/react-store/branch/master/graph/badge.svg)](https://codecov.io/gh/Spyna/react-store)
[![codefactor](https://www.codefactor.io/repository/github/Spyna/react-store/badge?style=flat-square)](https://www.codefactor.io/repository/github/spyna/react-store/overview/master)
  


## Demo 

https://spyna.github.io/react-store/

## Install

```bash
npm install --save @spyna/react-store
```

## Usage


### Create store

```jsx
// App.js
import React, { Component } from 'react'
import { createStore } from '@spyna/react-store'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        {/*
        children here
        <ConnectedComponent />
        */}
        
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

export default createStore(App, initialValue)
```

You can pass the *initial store value* as the second argumento of the function `createStore`.

### connect a component to the store

```jsx
// MyComponent
import React, { Component } from 'react'
import { withStore } from '@spyna/react-store'

class MyComponent extends Component {
   render() {
     return (
       <p>My Amount: {this.props.store.get('amount')}</p>
     )
   }
}

const ConnectedComponent = withStore(MyComponent);
```

### Set data in store 

```jsx
this.props.store.set('a_key', 'a value')
this.props.store.set('another_key', {name: 'another value'})
```

### Read data from the store

```jsx
const a_key  = this.props.store.get('a_key')

const defaultValue = {name : 'an optional default value if the key is not found'}
const another_key = this.props.store.get('another_key', defaultValue)
```

### Remove data from the store 

```jsx
this.props.store.remove('a_key', 'a value')
```

### Get all data from the store

```jsx
const store = this.props.store.getState()
```

## Configuration

When creating the store with `createStore` you can pass some options:

 * initial store value
 * custom store confirations

### initial value 

```jsx
const initialValue = {
  someKey : 'some value',
  anotherKey : {
    name : 'my initial value'
  }
}
export default createStore(App, initialValue)

```

### Default config

```jsx
const config = {
  promisify: true
}
export default createStore(App, {}, config)

```

| Property | default | meaning |
| --- | --- | --- |
| promisify | **true** | if true *set* and *remove* methods returns a **Promise**, so you can use `store.remove().then(() => {...})` |

## Contributing

Pull request and contributions are welcome. 
The `develop` branch is the one where you want to develope your changes. 
The `master` branch is the source code of the current release. 
The `gh-pages` branch is mainteined by CI and contains the documentation and example. You don't need to use it.


* Add test for your changes
* Add documentation and examples of your changes under the folder `example`
* Run `yarn prettier` or `npm run prettier` to format the source of the project
* Thank you

## License

MIT © [Spyna](https://github.com/Spyna)
