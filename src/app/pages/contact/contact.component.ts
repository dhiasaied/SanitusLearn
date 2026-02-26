import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    type: '',
    message: ''
  };

  onSubmit() {
    // Handle contact form submission logic here
    console.log('Contact form submission', this.formData);
  }
}
