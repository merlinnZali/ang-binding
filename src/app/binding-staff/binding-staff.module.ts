import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindingStaffComponent } from './binding-staff/binding-staff.component';
import { EventComponent } from './event/event.component';
import { SiblingTemplateRefComponent } from './sibling-template-ref/sibling-template-ref.component';


@NgModule({
  declarations: [
    BindingStaffComponent,
    EventComponent,
    SiblingTemplateRefComponent
  ],
  exports: [BindingStaffComponent, EventComponent, SiblingTemplateRefComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BindingStaffModule { }
