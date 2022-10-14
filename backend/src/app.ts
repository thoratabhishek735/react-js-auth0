import express from 'express'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'
import * as bodyParser from 'body-parser'
import { UserController,AuthController } from './controllers'
import cors from "cors"

class App {
  private httpServer: any

  constructor() {
    this.httpServer = express()
    this.httpServer.use(bodyParser.urlencoded({ extended: true }));
    this.httpServer.use(bodyParser.json());
    this.httpServer.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));     
    this.httpServer.use(cors())
    this.initializeControllers()
  }

  private initializeControllers(){
    const controllers = [
      new UserController(),
      new AuthController()
    ]

    for (const ctrl of controllers) {
      this.httpServer.use('/api', ctrl.router);
    }
  }

  public Start = (port: number) => {
    return new Promise((resolve, reject) => {

      this.httpServer.listen(
        port,
        () => {
          resolve(port)
        })
        .on('error', (err: object) => reject(err));
    })
  }
}

export default App;
