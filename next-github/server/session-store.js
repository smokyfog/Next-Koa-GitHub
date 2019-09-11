
function getRedisSessionId(sid) {
  return `ssid:${sid}`
}

class RedisSessionStore {
  
  constructor(clent) {
    this.clent = clent
  }

  // 获取redis中存储的session数据
  async get(sid) {
    const id = getRedisSessionId(sid)
    const data = await this.clent.get(id)
  }

  // 用于存储session数据到redis
  async set(sid, sess, ttl) {

  }

  // 从redis中删除某个session
  async destroy(sid) {

  }



}