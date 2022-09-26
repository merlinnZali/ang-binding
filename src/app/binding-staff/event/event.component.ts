import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

  title = 'event-ref'
  firstName = 'Georges'
  lastName = 'Jean'

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(): void{
    this.title = 'dfdfdf'
    console.log('YEAHHHHHHHHHHHHHHHHHHHHHHH!')
  }

  handler(e: any): void{
    this.title = `The name is ${e.target.name}`
  }

  templateRef(user: any): void{
    console.log(user)
  }

  handlerInput(e: any): void{
    this.firstName = e?.target?.value
  }
}
