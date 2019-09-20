

const api = require('../lib/api')
import { useEffect } from 'react'
import axios from 'axios'

function Index ({ userRepos }) {
  useEffect(() => {
    // axios.post('/github/test', { test: 123 })
  })
  // console.log(userRepos)
  return <span>Index</span>
}

Index.getInitialProps = async ({ ctx }) => {
  const result = await api.request(
  {
    url: '/user/repos',
  },
  ctx.req,
  ctx.res
  )
  return {
    userRepos: result.data
  }
}

export default Index
