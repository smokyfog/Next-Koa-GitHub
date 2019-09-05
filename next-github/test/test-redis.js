async function test() {
  const Redis = require('ioredis')
  const redis = new Redis({
    port: 6379,
    host: '129.28.187.206'
    // password: '123456'
  })
  
  await redis.set('c', 123)
  await redis.setex('d', 10 , 2345)
  const keys = await redis.keys('*')
  console.log(keys, await redis.get('c'), await redis.get('d'))
  setTimeout(async () => {
    console.log(await redis.get('d'))
  },13000)
}

test()

