import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(5), Validators.max(18)]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required, this.validateDNI]]
    });
  }

  validateDNI(control: AbstractControl): ValidationErrors | null {
    const dniPattern = /^[0-9]{7,8}$/;
    return dniPattern.test(control.value) ? null : { invalidDNI: true };
  }

  getErrorMessage(controlName: string): string {
    const control = this.studentForm.get(controlName);
    if (control?.hasError('required')) return 'Este campo es obligatorio';
    if (control?.hasError('minlength')) return 'Debe tener al menos 3 caracteres';
    if (control?.hasError('email')) return 'Email inválido';
    if (control?.hasError('min')) return 'Edad mínima permitida: 5 años';
    if (control?.hasError('max')) return 'Edad máxima permitida: 18 años';
    if (control?.hasError('invalidDNI')) return 'DNI inválido (Debe ser numérico de 7 u 8 dígitos)';
    return '';
  }

  submitForm() {
    if (this.studentForm.valid) {
      console.log('Formulario válido:', this.studentForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}

