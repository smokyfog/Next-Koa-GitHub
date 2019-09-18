const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const SCOPE = 'user'

const github= {
  request_token_url: 'https://github.com/login/oauth/access_token',
  client_id: 'Iv1.ce444a80c9c19b1c',
  client_secret: '05df9af0383e98e2aa5c1785148ba8469df054df',
}

module.exports = {
  github,
  GITHUB_OAUTH_URL,
  OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${github.client_id}&scope=${SCOPE}`
}
