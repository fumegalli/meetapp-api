import { Router } from 'express'

import SessionController from './app/controllers/SessionController'

const routes = Router()

routes.get('/sessions', SessionController.create)

export default routes
