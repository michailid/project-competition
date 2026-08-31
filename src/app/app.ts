import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { LOGIN_STORAGE_KEY } from './constants';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project-competition');
  router = inject(Router);
  loggedData: any;
  masterService = inject(Master);

  constructor() {
    this.readLocalData();
    this.masterService.$loginDone.subscribe((res) => {
      this.readLocalData();
    });
  }

  readLocalData() {
    const localStorageData = localStorage.getItem(LOGIN_STORAGE_KEY);
    if (localStorageData != null) {
      this.loggedData = JSON.parse(localStorageData);
    }
  }

  onLogout() {
    localStorage.removeItem(LOGIN_STORAGE_KEY);
    this.loggedData = undefined;
  }
}
