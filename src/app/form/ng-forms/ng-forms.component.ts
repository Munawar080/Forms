import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.scss']
})
export class NgFormsComponent {

 constructor(){

 }

  onSubmit(form: NgForm){
    console.log("form ===>>>>", form.value)
  }

  onModelChange(e:Event){
    console.log("onmodelchange ==>>>",e)
  }
}
