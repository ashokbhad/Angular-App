import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  // string interpolation

  firstName: string = 'Ashok Bhad';
  user = {
    firstName: 'Ashok',
    lastName: 'Bhad',
    Id: '18',
  };

  // property binding

  imageUrl ='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  isDisabled = true;
  inputValue = 'Angular';

  constructor() {}

  ngOnInit(): void {}

  currentTime() {
    return new Date().toLocaleTimeString();
  }

  buttonClicked() {
    alert('Button was clicked!')
  }
}
