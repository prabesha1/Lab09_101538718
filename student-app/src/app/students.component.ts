import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: '<h2>{{ getTitle() }} - {{ getCurrentDate() }}</h2>'
})
export class StudentsComponent {
  title = 'List of Students';

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date().toDateString();
  }
}
