import React from 'react'
import Express from 'express'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {Provider} from 'react-redux'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import clientWebpackConfig from '../webpack.client.config'

import {configureStore} from './store'
let routes = require('./routes').default

const app = Express()
const PORT = 3000

const handleRender = (req, res) => {
  const store = configureStore()
  // const history = createMemoryHistory() // TODO: how to use it?

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      const preloadedState = store.getState()

      res.send(renderFullPage(html, preloadedState))
    } else {
      res.status(404).send('Not found')
    }
  })
}

if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require('./routes').default
  })
}

const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for Security isues with this approach:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `
}

const compiler = webpack(clientWebpackConfig)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: clientWebpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('/*', handleRender)

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info(`Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`)
  }
})
