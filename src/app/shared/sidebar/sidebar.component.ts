import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  toggleSection(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const content = target.nextElementSibling as HTMLElement;
    if (content) {
      content.classList.toggle('collapsed');
      target.classList.toggle('collapsed');
    }
  }
}
