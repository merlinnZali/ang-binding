import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-staff',
  templateUrl: './binding-staff.component.html',
  styleUrls: ['./binding-staff.component.scss']
})
export class BindingStaffComponent implements OnInit {

  title = 'interpollation';
  property = 'property binding';

  classOne = "classColor classStyle"
  classColor = true
  objectClass = {
    classColor: true,
    classStyle: true,
    classSize: true,
  }

  fontSize = '20px';
  fontSizeNumber: number = 20;
  isTrue: boolean = true;
  objectStyle = {
    color: 'blue',
    fontSize: '20px',
  }

  constructor() { }

  ngOnInit(): void {
  }

  warningField(): boolean {
    return 'AA' === 'AA';
  }

}
