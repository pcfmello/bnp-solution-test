/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from "next/types";
import { faker } from "@faker-js/faker";
import { IUser } from "@/types/user.d";

const users: IUser[] = Array.from({ length: 10 }, () => ({
  id: faker.number.int(),
  name: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
}));

async function getUsersMockRepository(): Promise<IUser[]> {
  return Promise.resolve(users);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        const users: Array<IUser> = await getUsersMockRepository();
        res.status(200).json(users);
        return;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ message: "Método não suportado" });
    }
  } catch (e) {
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
