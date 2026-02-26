import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  email = '';
  password = '';
  remember = false;

  onSubmit() {
    // Handle login logic here
    console.log('Login attempt', { email: this.email, remember: this.remember });
  }
}
