import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private storageKey = 'transactions';

  getAll(): Transaction[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  add(transaction: Transaction) {
    const transactions = this.getAll();
    transactions.push(transaction);
    localStorage.setItem(this.storageKey, JSON.stringify(transactions));
  }

  remove(id: string) {
  const transactions = this.getAll();

  const index = transactions.findIndex(t => t.id === id);

  if (index > -1) {
    transactions.splice(index, 1);
  }

  localStorage.setItem(this.storageKey, JSON.stringify(transactions));
}
}