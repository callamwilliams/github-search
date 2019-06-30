/* eslint-disable */

const { expect } = require('chai')
const testServer = require('../test-helpers/test-server')

describe('GET /users/callamwilliams', function () {
  testServer.useInTest()

  it('responds with 200', async function () {
    const api = this.api
    const response = await api.get('/users/callamwilliams')
    expect(response).to.have.property('status', 200)
  })

  it('responds with expected data', async function () {
    const api = this.api
    const response = await api.get('/users/callamwilliams')

    expect(response.data).to.have.property('login').that.is.a('string')
    expect(response.data).to.have.property('id').that.is.a('number')
    expect(response.data).to.have.property('avatar_url').that.is.a("string")
    expect(response.data).to.have.property('url').that.is.a("string")
    expect(response.data).to.have.property('html_url').that.is.a("string")
    expect(response.data).to.have.property('type').that.is.a("string")
    expect(response.data).to.have.property('name').that.is.a("string")
    expect(response.data).to.have.property('public_repos').that.is.a('number')
    expect(response.data).to.have.property('followers').that.is.a('number')
    expect(response.data).to.have.property('updated_at').that.is.a("string")
  })
})

/* eslint-enable */
