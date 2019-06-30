# GitHub Search

## Installation

Run `npm i && npm start`

Run `npm start` once packages are installed to start the server and React App in parallel.

Run `npm test` to run tests for one redux-saga -tests found in `__tests__`

Run `npm server-test` for a basic integration test of the node API

* You might need to add credentials in an env file, so I've supplied an `.env.sample`. Do this by going to [the developers page in GitHub > OAuth Apps > New OAuth app](https://github.com/settings/developers), and copying the credentials over.

### Features

* Search username by default
* Search organisation option
* Display user info with image
* Display users repos
* Click repo to toggle some basic info
* Pagination

## Explain process

First I set up the API proxy server with Node and Express. I had planned to create some set routes, but ran out of time, so ended up handling the routing on the frontend and using a wildcard to accept all incoming connections to `/api/*`

I set up a custom webpack config with eslint, babel, webpack-dev-server, hot module reloading and loader support for all common file types. There are three files in `/config` that handle development, production, and shared assets.

I sketched out a basic flow of how the application would work, what components would be required, the data flow, and created a simple layout for the page design.

I chose to use redux-sagas for async data handling as they are fairly common on large scale applications, and have a few benefits over redux-thunk. It's probably overkill for an application of this size, but it's good to demonstrate.

Once I had a working application, I refactored some components and did a quick pass over the code.

Then I wrote some tests for one of my sagas, and did a basic integration test of the node API.

Unfortunately I didn't have enough time to write any unit or E2E tests;

### Improvements

* Normalise the data coming back from the API
* Pagination should scroll to the top on new data
* Update the components with the normalised data
* Write unit and integration tests
* Write E2E tests
* The `getRepos()` action probably has too many arguments(4) which probably means that the repos saga is doing too much. It'd be nice to abstract this out and make it more granular.
* Set some non-wildcard routes on the server
* Add some animation/polish
* Run some optimisation tasks

## Explain how I’d make it deployable

For the frontend app, I would run optimisation on the code, by including a bundle analyser, and add some pre-commit linting tasks using the `husky` package.

To deploy it, I would create an S3 bucket, run the `build` task and deploy the static files that get put in the public folder.

For the server, I'd refactor it to make sure it wasn't sharing dependencies with the frontend and that we have updated .env paths for a production environment.

Then I'd use [Elastic Beanstalk with NGINX](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-platform-proxy.html) on AWS for to host it.

## Node

### Build an API proxy server using nodeJS/express

* [X] GitHub Auth
* [X] Reverse proxy with no CORS requests
* [X] Routes fallback to index.html
* [X] Working alongside React App
* ~~ Refine routes~~

## React

### Search username/organisation

* [X] Controlled search input
* [X] Search type select
* [X] Loading component
* [X] Fetch data using fetch API, not axios
* [X] Manage data with global state

### List of public repos

* [X] List
* [X] Click repo to show info
* [X] Pagination
* [X] Sortable and filterable by API options
  * [X] created
  * [X] updated
  * [X] pushed
  * [X] full_name

### Extras

* [X] WebPack setup
* [ ] E2E testing
* [X] One integration test
