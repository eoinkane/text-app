import axios, { AxiosResponse, AxiosError } from "axios";

interface UserProps {
  username: string;
  firstName: string;
  lastName: string;
  id: number;
}

type valueof<T> = T[keyof T];

export class CreateError extends Error {}

export type CreatePayload = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

export default class User {
  private data: UserProps | undefined;
  constructor() {}

  get<K extends keyof UserProps>(propName: K): valueof<UserProps> {
    if (!this.data) {
      throw new Error("User is undefined");
    }
    return this.data[propName];
  }

  private set(update: UserProps): void {
    this.data = !this.data ? update : Object.assign(this.data, update);
  }

  init(data: UserProps): void {
    this.set(data);
  }

  static async create(payload: CreatePayload): Promise<User> {
    let data: AxiosResponse | AxiosError;
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/users",
        {
          firstName: payload.firstName,
          lastName: payload.lastName,
        },
        {
          auth: {
            username: payload.username,
            password: payload.password,
          },
        }
      );
      data = response;

      const newUser = new User();

      newUser.init(data.data);
      return newUser;
    } catch (err) {
      console.log(err);
      throw new CreateError("Error creating new User");
    }
  }

  // save(): void {
  //   const id = this.get("id");
  //   if (id) {
  //     axios.put(`http://localhost:3000/users/${id}`, this.data);
  //   } else {
  //     axios.post(`http://localhost:3000/users`, this.data);
  //   }
  // }
}
