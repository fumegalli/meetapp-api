import { Request, Response } from 'express'

class SessionController {
  public async create (req: Request, res: Response): Promise<Response> {
    console.log(req)
    return res.status(200).json({ ok: true })
  }
}

export default new SessionController()
