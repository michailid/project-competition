import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_STORAGE_KEY } from '../../constants';
import { Master } from '../../services/master';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  isLoginFormVisible = signal<boolean>(false);
  http = inject(HttpClient);
  router = inject(Router);
  masterService = inject(Master);

  registerObj: any = {
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    role: '',
  };

  loginObj: any = {
    email: '',
    password: '',
  };

  toggleForm() {
    this.isLoginFormVisible.set(!this.isLoginFormVisible());
  }

  onRegister() {
    this.http
      .post('https://api.freeprojectapi.com/api/ProjectCompetition/register', this.registerObj)
      .subscribe({
        next: (res: any) => {
          alert('Successfully registered');
        },
        error: (error) => {
          alert(error.error);
        },
      });
  }

  onLogin() {
    this.http
      .post('https://api.freeprojectapi.com/api/ProjectCompetition/login', this.loginObj)
      .subscribe({
        next: (res: any) => {
          alert('Successfully logged in');
          localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(res));
          this.router.navigateByUrl('/home');
          this.masterService.$loginDone.next();
        },
        error: (error) => {
          alert(error.error);
        },
      });
  }
}
