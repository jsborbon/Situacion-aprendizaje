import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'admin';

  }
}
