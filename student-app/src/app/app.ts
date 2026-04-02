import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent, Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-app';
}
