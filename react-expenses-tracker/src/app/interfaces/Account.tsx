import {Transaction, TransactionType} from './Transaction'

interface Account {
    name: string;
    balance: number;
    movements_record: Transaction[];
}

export default Account;