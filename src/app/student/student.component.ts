import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsService } from '../student-details.service';
import { UpdateComponent } from '../update/update.component';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  regiForm!: FormGroup;
  hide=true;
  loginDetails:any;
  login:any;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  constructor(private fb:FormBuilder,private http:StudentDetailsService,public dialog: MatDialog){
    this.regiForm=fb.group({
      'Email':['',[Validators.required,Validators.email]],
      'Password':['',[Validators.required]]

    })
  }

  loginUser(){
    this.http.postData(this.regiForm.value).subscribe(res =>
   this.loginDetails=res)
   alert('success..!!!')
   this.regiForm.reset()
  }

  ngOnInit():void {
    this.http.getData().subscribe(res =>{
      this.loginDetails=res;
    })
  }

  viewDetails(data:any){
    this.dialog.open(ViewdetailsComponent, {
      data: {
        id: data.id,
        email:data.Email,
        password:data.Password,

      },
    });
  }

  updateDetails(data2:any){
    this.dialog.open(UpdateComponent, {
      data: {
        id: data2.id,
        email:data2.Email,
        password:data2.Password,

      },
    });
  }

  deleteStudent(data3:any){
    this.http.deleteData(data3.id).subscribe(res =>{
       location.reload();
    })
  }
}
