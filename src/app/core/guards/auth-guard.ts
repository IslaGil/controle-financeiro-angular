import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const usuarioLogado = localStorage.getItem('usuario_logado');

  if (usuarioLogado) {
    return true;
  }

  // 🔥 bloqueia acesso
  router.navigate(['/login']);
  return false;
};