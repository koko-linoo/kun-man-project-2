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

  interface Milling {
    id: number;
    created_at: string;
    count: number;
    san_type: San;
  }

  interface Sale {
    id: number;
    created_at: string;
    name: string;
    amount: number;
    count: number;
    san_type: San;
  }

  interface SaleTotal {
    id: number;
    name: string;
    amount: number;
    count: number;
  }

  interface PurchaseTotal {
    id: number;
    name: string;
    amount: number;
    tin: number;
    paung: number;
  }

  interface Remaining {
    id: number;
    name: string;
    milling: number;
    sale: number;
    remaining: number;
  }

  interface OtherMilling {
    id: number;
    san_type: San;
    san_count: number;
    san_kwal_count: number;
    amount: number;
    created_at: string;
  }

  interface Distillation {
    id: number;
    sapa_type: Sapa;
    count: number;
    amount: number;
    created_at: string;
  }
}
