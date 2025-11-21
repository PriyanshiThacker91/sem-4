import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guards1Guard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
  if(localStorage.getItem("username")){
    return true;
  }
  else{
    _router.navigate(['/login-form'])
    return false;
  }
  
};
