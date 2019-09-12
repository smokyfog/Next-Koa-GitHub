const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')

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

  server.keys = ['yqzsa yqzs']
  const SESSION_CONFIG = {
    key: 'jid',
    // maxAge: 10 * 1000,  //设置过期时间
    store: new RedisSessionStore(redis)
  }

  server.use(session(SESSION_CONFIG, server))

  server.use(async (ctx, next) => {
    // console.log(ctx.cookies.get('id'))

    // 获取用户数据
    // 比如调用 `model.getUserById(id)`
    // ctx.session = ctx.session || {}
    // ctx.session.user = {
    //   username: 'Jokcy',
    //   age: 18
    // }
    // if (!ctx.session.user) {
    //   ctx.session.user = {
    //     name: 'jocky',
    //     age: 18
    //   }
    // } else {
    console.log('session is', ctx.session)
    // }

    await next()
  })

  router.get('/test/bbb/:id', async (ctx) => {
    const id = ctx.params.id 
    await handle(ctx.req, ctx.res, {
      pathname: '/test/bbb',
      query: { id }
    })
    ctx.respond = false
  })

  // 设置session
  router.get('/set/user', async (ctx) => {
    ctx.session.user = {
      name: 'jocky',
      age: 18
    }
    ctx.body = 'set session success'
  })

  // 删除session
  router.get('/delete/user', async (ctx) => {
    ctx.session = null
    ctx.body = 'delete session success'
  })

  server.use(router.routes())

  server.use(async (ctx, next) => {
    await next()
  })

  server.use(async (ctx, next) => {
    ctx.cookies.set('id', 'userid:xxx')
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000...')
  })
})
