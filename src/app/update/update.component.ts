import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentDetailsService } from '../student-details.service';

export interface DialogData {
  id:number;
  email:string;
  password:string;
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  regiForm!: FormGroup;
  hide=true;
  loginDetails:any;
  login:any;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private fb:FormBuilder,private http:StudentDetailsService) {
    this.regiForm=fb.group({
      'Email':['',[Validators.required,Validators.email]],
      'Password':['',[Validators.required]]

    })
  }

  updateUser(){
    this.http.updateData(this.data.id,this.regiForm.value).subscribe(res =>{})
  }
}
