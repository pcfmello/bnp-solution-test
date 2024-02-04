/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";
import { faker } from "@faker-js/faker";
import { IUser, IUserCreate } from "@/types/user.d";

const users: IUser[] = [];

async function addUserMockRepository(user: IUserCreate): Promise<IUser> {
  const newUser: IUser = { ...user, id: faker.number.int() };
  users.push(newUser);
  return Promise.resolve(newUser);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body } = req;

    switch (method) {
      case "POST":
        const user: IUser = JSON.parse(body);
        const addedUser = await addUserMockRepository(user);

        res.status(200).json(addedUser);
        return;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: "Método não suportado" });
    }
  } catch (e) {
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
