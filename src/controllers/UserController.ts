import { NextFunction, Request, Response } from "express";
import { myDataSource } from "../data-source";
import { UsersProfile } from "../entity/UsersProfile";

export class UserController {

  private userRepository = myDataSource.getRepository(UsersProfile);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id)


    const user = await this.userRepository.findOne({
      where: { id }
    })

    if (!user) {
      return "unregistered user"
    }
    return user
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const { name, cellphone, phone, email, PJ, PF, CPF, CNPJ, CEP, address, number, complement, neighborhood, city, state, agreement } = request.body;

    const user = Object.assign(new UsersProfile(), {
      name,
      cellphone,
      phone,
      email,
      PJ,
      PF,
      CPF,
      CNPJ,
      CEP,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      agreement,
    })

    return this.userRepository.save(user)
  };

  async remove(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id)

    let userToRemove = await this.userRepository.findOneBy({ id })

    if (!userToRemove) {
        return "this user not exist"
    }

    await this.userRepository.remove(userToRemove)

    return "user has been removed"
  }

}
