import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('usuario_logado'); // 🔥 remove login
    this.router.navigate(['/']); // volta pro login
  }
}