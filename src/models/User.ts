import { CreateUser, UpdateUser } from "../../types/types";
import { ClientError } from "../errors/errors";
import users from "../json/users.json";

export default class User {
  static getAllUsers() {
    return users;
  }

  static createUser(user: CreateUser) {
    const newUser = {
      id: crypto.randomUUID(),
      ...user,
    };
    users.push(newUser);
    return newUser;
  }

  static updateUser(id: string, dataToUpdate: UpdateUser) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new ClientError("user not found");

    const userUpdated = { ...users[userIndex], ...dataToUpdate };
    users[userIndex] = userUpdated;

    return userUpdated;
  }

  static deleteUser(id: string) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new ClientError("user not found");
    return users.splice(userIndex, 1);
  }
}
