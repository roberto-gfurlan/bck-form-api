import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cellphone: number;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  PJ: boolean;

  @Column()
  PF: boolean;

  @Column()
  CPF: number;

  @Column()
  CNPJ: number;

  @Column()
  CEP: number;

  @Column()
  address: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  agreement: boolean;
}