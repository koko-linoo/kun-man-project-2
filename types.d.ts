export {};

declare global {
  interface Employee {
    id: number;
    created_at: string;
    name: string;
    fee: number;
  }

  interface Sapa {
    id: number;
    name: string;
  }

  interface San {
    id: number;
    name: string;
  }

  interface Purchase {
    id: number;
    created_at: string;
    name: string;
    amount: number;
    tin: number;
    paung: number;
    sapa_type: Sapa;
  }
}
