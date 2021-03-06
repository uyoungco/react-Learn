import React from 'react'

// import {  } from 'react-router'
import {
  Route,
  // Router,
  // browserHistory
  Switch,
} from 'react-router-dom'

import asyncComponent from './component/AsyncComponent'

// const One = (props) => (
//   <div>
//     one
//   </div>
// )

// const Two = (props) => (
//   <div>
//     Two
//   </div>
// )

// const Three = (props) => (
//   <div>
//     three
//   </div>
// )

// import One from './component/one'
// import Two from './component/two'
// import Three from './component/three'

const AsyncCards = asyncComponent(() => import('./component/cards'))
const AsyncCards1 = asyncComponent(() => import('./component/cards.1'))
// const AsyncOne = asyncComponent(() => import('./component/one'))
const AsyncTwo = asyncComponent(() => import('./component/two'))
const AsyncThree = asyncComponent(() => import('./component/three'))

export default () => {
  return (
    <Switch>
      <Route path="/" key="One" exact component={AsyncCards} />,
      <Route path="/two" key="two"  component={AsyncTwo} />,
      <Route path="/three" key="three"  component={AsyncThree} />,
      <Route path="/id/:id" key="id"  component={AsyncCards1} />,
    </Switch>
  )
}