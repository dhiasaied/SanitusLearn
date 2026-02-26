import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email = '';

  onSubmit() {
    // Handle password reset logic here
    console.log('Password reset request', { email: this.email });
  }
}
