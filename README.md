# GitHub Search

## Installation

Run `npm i && npm start`

Run `npm start` once packages are installed to starter server and React App

Run `npm test` to Run tests for one redux-saga

Run `npm server-test` for a basic integration test of the node API

## Explain process

First I set up the API proxy server with Node and Express. I had planned to create some set routes, but ran out of time, so ended up handling the routing on the frontend and using a wildcard to accept all incoming connections to `/api/*`

I set up a custom webpack config with eslint, custom babel config, webpack-dev-server, hot module reloading and loader support for all common file types. There are three files in `/config` that handle development, production, and shared assets.

I sketched out a basic flow of how the application would work and what components would be required. And thought of a simple layout for the page design.

I chose to use redux-sagas for async data handling as they are fairly common on large scale applications, and have a few benefits over redux-thunk. It's probably overkill for an application of this size, but it's good to demonstrate.

Once I had a working application, I refactored some components and did a quick pass over the code.

Then I wrote some tests for one of my sagas, and did a basic integration test of the node API.

Unfortunately I didn't have enough time to write any unit or E2E tests;

### Improvements

- Normalise the data coming back from the API
- Update the components with the normalised data
- Write unit and integration tests
- Write E2E tests
- The `getRepos()` action probably has too many arguments(4) which probably means that the repos saga is doing too much. It'd be nice to abstract this down a little.
- Set some non-wildcard routes on the server
- Add some animation/polish
- Run some optimisation tasks

## Explain how I’d make it deployable

## Node

### Build an API proxy server using nodeJS/express

- [X] GitHub Auth
- [X] Reverse proxy with no CORS requests
- [X] Routes fallback to index.html
- [X] Working alongside React App
- ~~ Refine routes~~

## React

### Search username/organisation

- [X] Controlled search input
- [X] Search type select
- [X] Loading component
- [X] Fetch data using fetch API, not axios
- [X] Manage data with global state

### List of public repos

- [X] List
- [X] Click repo to show info
- [X] Pagination
- [X] Sortable and filterable by API options
  - [X] created
  - [X] updated
  - [X] pushed
  - [X] full_name

### Extras

- [X] WebPack setup
- [ ] E2E testing
- [X] One integration test
