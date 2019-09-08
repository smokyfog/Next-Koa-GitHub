import { withRouter } from 'next/router'
import Head from 'next/head'
import getConfig from 'next/config'
import Link from 'next/link'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
// import Comp from '../../components/comp'
const Comp = dynamic(import('../../components/comp'))

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const Title = styled.h1`
  color: yellow;
  font-size: 40px
`
const colors = 'green'  

const B = ({ router, name, time }) => {
  console.log(serverRuntimeConfig, publicRuntimeConfig)
  return (
    <div>
      <Title>this is title { time } { process.env.customKey }</Title>
      <Comp />
      <Link href="#aaa">
        <a className="link">
          bb
          { router.query.id } { name } 
        </a>
      </Link>
      <style jsx>{`
        a {
          color: blue  
        }
        .link {
          color: ${colors}
        }
      `}</style>
      <style jsx global>{`  ${/* 注意这里的全局样式必须在页面渲染后才会生效 */''}
        a {
          color: ${colors}
        }
      `}</style>
    </div>
  ) 
}

B.getInitialProps = async () => {
  const moment = await import ('moment')
  return {
    name: 'jokcy',
    time: moment.default(Date.now() - 60 * 1000).fromNow()
  }
}

// B.getInitialProps = async () => {
//   const promise = new Promise((resolve ) => {
//     setTimeout(() => {
//       resolve({
//         name: 'jokcy'
//       })
//     })
//   })  
//   return await promise
// }

export default withRouter(B)