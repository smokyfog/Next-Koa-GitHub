import { Button } from 'antd'
import Router from 'next/router'
import { connect } from 'react-redux'

import { add } from '../store/store'
 
const event = [
  'routeChageStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete '
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}

event.forEach(event => {
  Router.events.on(event, makeEvent(event))
})


const Index = ({ counter, username, rename, add }) => {
  function gotoTestB() {
    // Router.push('/test/bbb?id=2')
    // 或
    Router.push({
      pathname: '/test/bbb',
      query: {
        id: 2
      }
    }, '/test/bbb/2')
  }
  return (
    <>
      <Button onClick={ gotoTestB }>
        test b
      </Button>
      <span>Count: { counter }</span>
      <a>username: { username }</a>
      <br />
      <input value={ username } onChange={(e) => {rename(e.target.value)}} />
      <button onClick={() => add(counter)}>do add</button>
    </>
  )
}

Index.getInitialProps = async ({ reduxStore }) => {
  reduxStore.dispatch(add(3))
  return {}
}

export default connect(function mapStateToProps(state) {
  return {
    counter: state.counter.count,
    username: state.user.username
  }
}, function mapDispatchToProps(dispatch) {
  return {
    add: (num) => dispatch({ type: 'ADD', num }),
    rename: (name) => dispatch({ type: "UPDATE_USERNAME", name })
  }
})(Index)

// export default () => (
//   <Link href='test/bbb'>
//     <div>
//       <Button>index</Button>
//       <Button>index</Button>
//     </div>
//   </Link>
// )
