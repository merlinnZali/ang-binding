import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling-template-ref',
  templateUrl: './sibling-template-ref.component.html'
})
export class SiblingTemplateRefComponent implements OnInit {

  title = 'title from SiblingTemplateRefComponent'

  constructor() { }

  ngOnInit(): void {
  }

}
