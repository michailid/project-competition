import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  isLoginFormVisible = signal<boolean>(false);
  http = inject(HttpClient);

  registerObj: any = {
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    role: '',
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
}
