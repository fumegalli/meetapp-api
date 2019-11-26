import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

class SessionController {
  public async create (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    return res.status(200).json({ ok: true })
  }
}

export default new SessionController()
