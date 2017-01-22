import path from 'path'
import Express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'

import {configureStore} from './store'

const app = Express()
const PORT = 3000

const handleRender = (req, res) => {
  // TODO
}

const renderFullPage = (html, preloadedState) => {
  // TODO
}

app.use(handleRender)

app.listen(PORT)
