import { Component } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: 'Felix Cruz', age: 14, grade: 10, status:'aprobado' },
    {id: 2, name: 'Valentin Siles', age: 14, grade: 5, status:'pendiente'},
    {id: 3, name: 'Braian Figuereido', age: 13, grade: 3, status:'desaprobado'},
  ];
}   
