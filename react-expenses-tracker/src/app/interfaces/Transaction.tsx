export enum TransactionType {
    Mortage,
    Services,
    Groceries,
    Other
  }

export interface Transaction {
    amount: number;
    description: string;
    label: TransactionType;
}
