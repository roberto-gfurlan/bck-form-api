import * as bodyParser from "body-parser";
import * as express from "express";
import { Request, Response } from "express";
import { myDataSource } from "./data-source";
import { UsersProfile } from "./entity/UsersProfile";
import { Routes } from "./routes";


myDataSource.initialize().then(async () => {
  
  const app = express.default();
  app.use(bodyParser.json());

  Routes.forEach(route => {
    (app as any)[route.method](route.route, (request: Request, response: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](request, response, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? response.send(result) : undefined);

      } else if (result !== null && result !== undefined) {
        response.json(result);
      }
    });
  });

  app.listen(4568);

  await myDataSource.manager.save(
    myDataSource.manager.create(UsersProfile, {
      name: "Timber",
      cellphone: 1199955666,
      phone: 11999877412,
      email: "aw@teste.com",
      PJ: true,
      PF: false,
      CPF: 33344455502,
      CNPJ: 11,
      CEP: 4011061,
      address: "Rua das Flores",
      number: 51,
      complement: "apto 303",
      neighborhood: "Jardim",
      city: "Sao Paulo",
      state: "SP",
      agreement: true,
    })
  );

  console.log("Express server has started on port 4568. Open http://localhost:4568");

}).catch(error => console.log(error));
