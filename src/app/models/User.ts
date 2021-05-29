export interface User {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
  address: {
    city: string;
    street: string;
    number: number;
  }
}
