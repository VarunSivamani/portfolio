import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitted = false;

  contactForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    subject: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    message: new FormControl<string>('', [Validators.required, Validators.minLength(10)])
  });


  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get subject() {
    return this.contactForm.get('subject')!;
  }
  
  get message() {
    return this.contactForm.get('message')!;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    console.log('Form submitted:', this.contactForm.value);

    // reset form
    this.contactForm.reset();
    this.submitted = false;
  }
}
