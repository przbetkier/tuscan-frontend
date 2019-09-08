import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('sent', [
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({transform: 'scale(1)', opacity: 1}))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit, OnChanges {

  formGroup: FormGroup;
  sent = false;
  submitted = false;
  processing = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.ngOnChanges();
  }

  get name() {
    return this.formGroup.get('name');
  }

  get email() {
    return this.formGroup.get('email');
  }

  get message() {
    return this.formGroup.get('message');
  }

  sendMessage() {
    this.submitted = true;
    this.processing = true;
    // if backend 201... ->
    setTimeout(() => {
      this.sent = true;

    }, 1000);
  }

  ngOnChanges(): void {
    this.formGroup.valueChanges.subscribe(val => {
      this.submitted = false;
    });
  }

}
