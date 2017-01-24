import path from 'path'
import Express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import clientWebpackConfig from '../webpack.client.config'
var stats = require('../bin/client.stats.json')

import {configureStore} from './store'
let Root = require('./components/Root').default

const app = Express()
const PORT = 3000

const handleRender = (req, res) => {
  const store = configureStore()
  const html = renderToString(<Root store={store} />)
  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    Root = require('./components/Root').default
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
        <script src="/static/${stats.assetsByChunkName.client[0]}"></script>
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

app.get('/', handleRender)

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info(`Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`)
  }
})

if (module.hot) {
  module.hot.accept('../bin/client.stats.json', () => {
    stats = require('../bin/client.stats.json')
  })
}
