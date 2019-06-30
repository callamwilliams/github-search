/* eslint-disable */
const axios = require('axios')
const spawn = require('child_process').spawn
const getPort = require('get-port')

const TEST_ENV = {
  PORT: 5000,
}

function spawnServer(env) {
  return new Promise((resolve, reject) => {
    const server = spawn('node', ['server/index'], { env })
    server.stdout.pipe(process.stdout)
    server.stderr.pipe(process.stderr)

    server.on('error', reject)

    // Wait for the server to be reachable
    return waitForURLReachable(`http://localhost:${env.PORT}`)
      .then(() => resolve(server))
      .catch(reject)
  })
}

async function waitForURLReachable(url, { timeout = 1000 } = {}) {
  const timeoutThreshold = Date.now() + timeout

  while (true) {
    try {
      await axios.get(url)

      return true
    } catch (err) {
      if (Date.now() > timeoutThreshold) {
        throw new Error(`URL ${url} not reachable after ${timeout}ms`)
      }

      await new Promise(resolve => setTimeout(resolve, 100))
    }
  }
}

exports.useInTest = function () {
  before(async function startTestServer() {
    const env = Object.assign({}, TEST_ENV, {
      PATH: process.env.PATH,
      PORT: await getPort()
    })

    const testServer = await spawnServer(env)

    const api = axios.create({ baseURL: `http://localhost:${env.PORT}/api` })

    this.testServer = testServer
    this.api = api
  })

  after(function stopTestServer() {
    this.testServer.kill()
    return new Promise(resolve => this.testServer.on('close', () => resolve()))
  })
}
/* eslint-enable */
