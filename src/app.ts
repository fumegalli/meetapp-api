import express, { Application } from 'express'
import routes from './routes'

class App {
    public server: Application

    public constructor () {
      this.server = express()

      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.server.use(express.json())
    }

    private routes (): void {
      this.server.use(routes)
    }
}

export default new App().server
