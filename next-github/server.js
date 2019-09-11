const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = new Koa()
  const router = new Router()

  server.keys = ['yqzsa yqzs']
  const SESSION_CONFIG = {
    key: 'jid'
    // store: {}
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

  router.get('/set/user', async (ctx) => {
    ctx.session.user = {
      name: 'jocky',
      age: 18
    }
    ctx.body = 'set session success'
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
