import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createdb',
  templateUrl: './createdb.component.html',
  styleUrls: ['./createdb.component.scss']
})
export class CreatedbComponent {
  creatingCustomRole: boolean = false;
  roles: FormGroup;

  customRoleControls: { label: string, checked: boolean }[] = [];

  constructor(private ref: MatDialogRef<CreatedbComponent>, private _formBuilder: FormBuilder) {
    this.roles = this._formBuilder.group({
      organization: false,
      account: false,
      customRoles: this._formBuilder.array([]),
      customRole: ''
    });
  }

  closePopup() {
    this.ref.close();
  }

  toggleCustomRoleInput() {
    this.creatingCustomRole = !this.creatingCustomRole;
  }

  addCustomRole() {
    const customRole = this.roles.get('customRole')?.value;
    if (customRole.trim() !== '') {
      this.customRoleControls.push({ label: customRole, checked: true }); // Set checked to true
      const customRolesArray = this.roles.get('customRoles') as FormArray;
      customRolesArray.push(new FormControl(true)); // Add FormControl with value true
      this.roles.patchValue({ customRole: '' });
      this.creatingCustomRole = false;
    }
  }
  
  toggleCheckbox(customRole: { label: string, checked: boolean }) {
    customRole.checked = !customRole.checked;
  }
  

  getFormControl(index: number): FormControl {
    return this.roles.get('customRoles.' + index) as FormControl;
  }
  createDb()
  
  {
    alert('Database has been created')
    this.ref.close();
  }
}
