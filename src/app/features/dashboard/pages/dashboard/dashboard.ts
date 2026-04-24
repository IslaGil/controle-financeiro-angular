import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../../../core/services/transaction';
import { Transaction } from '../../../../core/models/transaction.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

  description = '';
  amount = 0;
  type: 'income' | 'expense' = 'income';

  transactions: Transaction[] = [];

  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) {
    this.transactions = this.transactionService.getAll();
  }

  addTransaction() {
    this.transactionService.add({
      id: Date.now().toString(),
      description: this.description,
      amount: this.amount,
      type: this.type,
      date: new Date().toISOString()
    });

    this.description = '';
    this.amount = 0;

    this.transactions = this.transactionService.getAll();
  }

  logout() {
    localStorage.removeItem('usuario_logado');
    this.router.navigate(['/']);
  }

  getSaldo(): number {
  return this.transactions.reduce((total, t) => {
    return t.type === 'income'
      ? total + t.amount
      : total - t.amount;
  }, 0);
}

removeTransaction(id: string) {
  this.transactionService.remove(id);
  this.transactions = this.transactionService.getAll();
}

}