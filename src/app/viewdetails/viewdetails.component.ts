import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id:number;
  email:string;
  password:string;
}
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
