import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-createdb',
  templateUrl: './createdb.component.html',
  styleUrls: ['./createdb.component.scss']
})
export class CreatedbComponent {

  
    constructor(private ref:MatDialogRef<CreatedbComponent>,private _formBuilder: FormBuilder){}
    closePopup(){
  this.ref.close()
    }
    roles = this._formBuilder.group({
      organization: false,
      account: false,
      security: false,
      userrole: false,
      system: false,
      public: false,
      super: false,
    });
   
  }
   


