import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor(private http:HttpClient) { }

  postData(data:any){
    return this.http.post('http://localhost:3000/studentdetails/',data)
  }

  getData(){
    return this.http.get('http://localhost:3000/studentdetails')
  }

  updateData(id:number,data2:any){
    return this.http.put('http://localhost:3000/studentdetails/'+id,data2)
  }

  deleteData(id:any){
    return this.http.delete('http://localhost:3000/studentdetails/'+id)

  }
}
