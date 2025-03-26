import { Component, Input } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-item',
  standalone: false,
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css'
})
export class StudentItemComponent {
  @Input() student!: Student; 
}
