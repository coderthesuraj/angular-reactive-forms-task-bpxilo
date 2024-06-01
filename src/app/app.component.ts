import { Component, VERSION } from '@angular/core';
import { NameInfoService } from './services/name-info.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameMessage: string;
  /**
  constructor(private nameInfoService: NameInfoService) {
    nameInfoService.getNameInfo("").subscribe(a => {
      this.nameMessage = a;
    });
  }*/
  profileForm = this.fb.group({
    name: [
      '',
      Validators.compose([Validators.required, Validators.minLength(2)])
    ],
    Emailid: ['', [Validators.required, Validators.email]],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    ]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
