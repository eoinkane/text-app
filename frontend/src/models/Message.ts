import axios, { AxiosResponse } from "axios";
import User from "./User";

interface MessageProps {
  id?: number;
  sender?: User;
  message?: string;
  conversationsId?: number;
}

type valueof<T> = T[keyof T];

export default class Message {
  constructor(private data: MessageProps) {}

  get<K extends keyof MessageProps>(propName: K): valueof<MessageProps> {
    return this.data[propName];
  }

  set(update: MessageProps): void {
    Object.assign(this.data, update);
  }
  fetch(): void {
    // axios
    //   .get(`http://localhost:3000/users/${this.get("id")}`)
    //   .then((response: AxiosResponse): void => {
    //     this.set(response.data);
    //   });
  }

  save(): void {
    // const id = this.get("id");
    // if (id) {
    //   axios.put(`http://localhost:3000/users/${id}`, this.data);
    // } else {
    //   axios.post(`http://localhost:3000/users`, this.data);
    // }
  }
}
