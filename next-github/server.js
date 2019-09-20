const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const koaBody = require('koa-body')

const auth = require('./server/auth')
const api = require('./server/api')


const RedisSessionStore = require('./server/session-store')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// 创建redis-client
const redis = new Redis({
  port: 6379,
  host: '129.28.187.206'
  // password: '123456'
})

app.prepare().then(() => {

  const server = new Koa()
  const router = new Router()

  server.use(koaBody())

  server.keys = ['yqzsa yqzs']
  
  const SESSION_CONFIG = {
    key: 'jid',
    // maxAge: 10 * 1000,  //设置过期时间
    store: new RedisSessionStore(redis)
  }

  server.use(session(SESSION_CONFIG, server))

  // server.use(async (ctx, next) => {
  //   console.log('session is', ctx.session)
  //   await next()
  // })

  // router.get('/test/bbb/:id', async (ctx) => {
  //   const id = ctx.params.id 
  //   await handle(ctx.req, ctx.res, {
  //     pathname: '/test/bbb',
  //     query: { id }
  //   })
  //   ctx.respond = false
  // })

  // 配置处理github OAuth的登录
  auth(server)
  api(server)
  
  router.get('/test', async (ctx) => {
    ctx.redirect('/')
  })
  

  server.use(async (ctx, next) => {
    await next()
  })

  router.get('/api/user/info', async (ctx) => {
    const user = ctx.session.userinfo
    if (!user) {
      ctx.status = 401
      ctx.body = 'need login'
    } else {
      ctx.body = user
      ctx.set('Content-Type', 'application/json')
    }
  })

  server.use(router.routes())

  server.use(async (ctx, next) => {
    // ctx.cookies.set('id', 'userid:xxx')
    // req里获取session
    ctx.req.session = ctx.session
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000...')
  })
})
