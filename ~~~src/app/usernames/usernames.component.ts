import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './usernames.component.html'
})
export class UsernamesComponent {
  userName = '';
  resetButton = false;
  
  resetUsername() {
    this.userName = '';
  }
}
