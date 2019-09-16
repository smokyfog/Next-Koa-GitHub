import getConfig from 'next/config'
import { useEffect } from 'react'
import axios from 'axios'

const { publicRuntimeConfig } = getConfig()

const Index = () => {

  useEffect(() => {
    axios.get('/api/user/info').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <span>
    index
    <a href ={publicRuntimeConfig.OAUTH_URL}>去登陆</a>
  </span>
  )
}

export default Index