export {};

declare global {
  interface Employee {
    id: number;
    created_at: string;
    name: string;
    fee: number;
  }
}
