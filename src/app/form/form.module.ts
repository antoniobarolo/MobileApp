import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [FormComponent]
})
export class FormComponentModule {}

 