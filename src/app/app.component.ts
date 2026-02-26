import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SanitusLearn';

  constructor(private router: Router) {}

  get showSidebar(): boolean {
    return this.router.url !== '/chat' && this.router.url !== '/profile' && this.router.url !== '/connexion' && this.router.url !== '/forget-password' && this.router.url !== '/register' && this.router.url !== '/mf1' && this.router.url !== '/mf1-tema2-parte1' && this.router.url !== '/mf1-tema2-parte2';
  }

  get showNavbar(): boolean {
    return this.router.url !== '/connexion' && this.router.url !== '/forget-password' && this.router.url !== '/register' && this.router.url !== '/mf1' && this.router.url !== '/mf1-tema2-parte1' && this.router.url !== '/mf1-tema2-parte2';
  }
}
