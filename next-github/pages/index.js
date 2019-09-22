

const api = require('../lib/api')
import { useEffect } from 'react'
import axios from 'axios'
import { Button, Icon, Tabs } from 'antd'
import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'
import Repo from '../components/Repo'
import LRU from 'lru-cache'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const cache = new LRU({
  maxAge: 1000 * 60 * 10  // 十分钟内不会使用缓存的数据就会被删除
})

let cachedUserRepos;
let cachedUserStaredRepos;
const isServer = typeof  window === 'undefined'

function Index ({ userRepos, userStaredRepos, user, router }) {
  
  const tabKey = router.query.key || '1'
  
  useEffect(() => {
    if(!isServer) {
      cachedUserRepos = userRepos
      cachedUserStaredRepos = userStaredRepos
      // if(userRepos) {
      //   cache.set('userRepos', userRepos)
      // }
      // if(userStaredRepos) {
      //   cache.set('userStaredRepos', userStaredRepos)
      // }
      const timeout = setTimeout(() => {
        cachedUserRepos = null
        cachedUserStaredRepos = null
      }, 1000 * 60 * 10)
    }
  },[userRepos, userStaredRepos])

  if (!user || !user.id) {
    return (
      <div className="root">
        <p>亲，您还没有登录哦</p>
        <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>
          点击登录
        </Button>
        <style jsx>
          {`
            .root {
              height: 400px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    )
  }

  const {
    avatar_url, login, name, bio, email,
  } = user

  const handleTabChange = (activeKey) => {
    Router.push(`/?key=${activeKey}`)
  }
  return (
    <div className="root">
      <div className="user-info">
        <img src={avatar_url} alt="" className="avatar" />
        <span className="login">{login}</span>
        <span className="name">{name}</span>
        <span className="bio">{bio}</span>
        <p className="email">
          <Icon type="mail" className="icon-email" />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
      <div className="user-repos">
        <Tabs activeKey={tabKey} onChange={handleTabChange} animated={false}>
          <Tabs.TabPane tab="你的仓库" key="1">
            {userRepos.map((repo) => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane tab="你关注的仓库" key="2">
            {userStaredRepos.map((repo) => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </Tabs.TabPane>
        </Tabs>
      </div>
      <style jsx>
        {`
          .root {
            display: flex;
            align-items: flex-start;
            padding: 20px 0;
          }

          .user-info {
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            width: 200px;
            margin-right: 40px;
          }

          .login {
            font-weight: 800;
            font-size: 20px;
            margin-top: 20px;
          }

          .name {
            font-size: 16px;
            color: #777;
          }

          .bio {
            margin-top: 20px;
            color: #333;
          }

          .avatar {
            width: 100%;
            border-radius: 5px;
          }

          .user-repos {
            flex: 1;
          }

          :global(.icon-email) {
            margin-right: 10px;
          }
        `}
      </style>
    </div>
  )
}



Index.getInitialProps = async ({ ctx, reduxStore }) => {

  const user = reduxStore.getState().user

  if (!user || !user.id) {
    return {
      isLogin: false
    }
  }

  if(!isServer) {
    // if (cache.get('userRepos') && cache.get('userStaredRepos') ) {
    //   return {
    //     userRepos: cache.get('userRepos'),
    //     userStaredRepos: cache.get('userStaredRepos')
    //   }
    // }

    if (cachedUserRepos && cachedUserStaredRepos) {
      return {
        userRepos: cachedUserRepos,
        userStaredRepos: cachedUserStaredRepos
      }
    }
  }
  

  const userRepos = await api.request(
  {
    url: '/user/repos',
  },
  ctx.req,
  ctx.res
  )

  

  const userStaredRepos = await api.request(
    {
      url: '/user/starred',
    },
    ctx.req,
    ctx.res
    )
  
  

  return {
    isLogin: true,
    userRepos: userRepos.data,
    userStaredRepos: userStaredRepos.data
  }
}

export default withRouter(connect(function mapState(state) {
  return {
    user: state.user
  }
})(Index))

