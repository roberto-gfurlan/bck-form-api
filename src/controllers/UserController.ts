import { Request, Response } from 'express'

const users = [{
  id: 1,
  name: 'John Doe',
  email: 'email@test.com.br',
  phone: '999999999',
}]

export default {
  async index(req:Request, res:Response) {
    return res.json(users)
  }
}