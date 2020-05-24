import axios, { AxiosResponse } from "axios";

interface UserProps {
  firstName?: string;
  lastName?: string;
  id?: number;
}

type valueof<T> = T[keyof T];

export default class User {
  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): valueof<UserProps> {
    return this.data[propName];
  }

  set(update: UserProps): void {
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
