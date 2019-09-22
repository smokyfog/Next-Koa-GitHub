
import { useState, useCallback } from 'react'
import { 
  Button, 
  Layout, 
  Icon, 
  Input, 
  Avatar, 
  Tooltip, 
  Dropdown, 
  Menu
} from 'antd'
import getConfig from 'next/config'
import { connect } from 'react-redux'
import { withRouter, Router } from 'next/router'
import Link from 'next/link'
import Container from './Container'
import axios from 'axios'

import { logout } from '../store/store'

const { Header, Content, Footer } = Layout
const Comp = ({ color, children, style }) => <div style={{color, ...style}}>{children}</div>
const { publicRuntimeConfig } = getConfig()

const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20
}
const footerStyle = {
  textAlign: 'center'
}
function MyLayout ({ children, user, logout, router }) {
  const urlQuery = router.query && router.query.query

  const [search, setSearch] = useState(urlQuery || '')

  const handleSearchChange = useCallback(
    event => {
      setSearch(event.target.value)
    },
    [setSearch]
  )

  const handleOnSearch = useCallback(() => {
    router.push(`/search?query=${search}`)
  },[search])  

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  const handleGoToAuth = useCallback((e) => {
    e.preventDefault()
    axios.get(`/prepare-auth?url=${router.asPath}`)
      .then(res => {
        if (res.status === 200) {
          location.href = publicRuntimeConfig.OAUTH_URL
        } else {
          console.log('prepare auth faild', res)
        }
      })
      .catch(err => {
        console.log('prepare auth faild', err)
      })
  }, [])

  const handleGoIndex = useCallback(() => {
    console.log(123456)
    router.push(`/`)
  }, [])
  
  const userDrapDown = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>
          登出
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout>
      <Header>
          <Container renderer={<div className="header-inner"/>}>
            <div className="header-left">
              <div className="logo" onClick={() => handleGoIndex()}>
                {/* <Link href="/"> */}
                  <Icon  type="github" style={ githubIconStyle } />
                {/* </Link> */}
              </div>
              <div>
                <Input.Search 
                  placeholder="搜索仓库" 
                  value={ search }
                  onChange={ handleSearchChange }
                  onSearch={ handleOnSearch }
                />
              </div>
            </div>
            <div className="header-right">
              <div className="user">
                {
                  user && user.id ? (
                    <Dropdown overlay={userDrapDown}>
                      <a href="/" >
                        <Avatar size={40} src={user.avatar_url} />
                      </a>
                    </Dropdown>
                  ) : (
                    <Tooltip title="点击进行登陆">
                      <a  href={`/prepare-auth?url=${router.asPath}`}>
                        <Avatar size={40} icon="user"/>
                      </a>
                    </Tooltip>
                  )
                }
              </div>
            </div>
        </Container>
      </Header>
      <Content>
        <Container renderer={<Comp />}>
            { children }
        </Container>
      </Content>
      <Footer style={ footerStyle }>
        Develop by yq @
        <a href="mailto:yq@hotmail.com">yq@.com</a>
      </Footer>
      <style jsx>{`
        .content {
          color: #000;
        }
        .header-inner {
          display: flex;
          justify-content: space-between
        }
        .header-left {
          display: flex;
          justify-content: flex-start
        }
      `}</style>
      <style jsx global>{`
        #__next {
          height: 100%;
        }
        .ant-layout {
          min-height: 100%;
        }
        .ant-layout-header {
          padding-left: 0;
          padding-right: 0
        }
        .ant-layout-content {
          background: #fff;
        }
      `}</style>
    </Layout>
  )
}

export default connect(function mapState(state) {
  return {
    user: state.user
  }
}, function MapReducer(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
})(withRouter(MyLayout))