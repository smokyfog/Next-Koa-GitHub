import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'

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


export default () => {
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
      <a>index b</a>
    </>
  )
}



// export default () => (
//   <Link href='test/bbb'>
//     <div>
//       <Button>index</Button>
//       <Button>index</Button>
//     </div>
//   </Link>
// )
