import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get nameTouchedAndInvalid(): boolean {
    const control = this.contactForm.get('name');
    return !!(control?.touched && control.invalid);
  }

  get emailTouchedAndInvalid(): boolean {
    const control = this.contactForm.get('email');
    return !!(control?.touched && control.invalid);
  }

  get messageTouchedAndInvalid(): boolean {
    const control = this.contactForm.get('message');
    return !!(control?.touched && control.invalid);
  }

  get showConfirmation(): boolean {
    return this.submitted;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Message sent:', this.contactForm.value);
      this.submitted = true;
      this.contactForm.reset();
    }
  }
}
