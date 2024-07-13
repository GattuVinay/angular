import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class SharedService {
readonly APIUrl  ="http://127.0.0.1:8000/";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient ) 
  { 

  }
  
  getDepList():Observable<any[]>{
    debugger
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDepartment(val:any)
  {
    return this.http.post(this.APIUrl + '/department/',val);
  }

  UpdateDepartment(val:any)
  {
    
    return this.http.put(this.APIUrl+'/department/',val);
  }

  deleteDepartment(val:any)
  {
    return this.http.delete(this.APIUrl + '/department/'+val);
  }

  getEmppList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any)
  {
    return this.http.post(this.APIUrl + '/employee/',val);
  }

  updateEmployee(val:any)
  {
    return this.http.put(this.APIUrl+'/employee/',val);

  }
  deleteEmployee(val:any)
  {
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }

  UploadPhoto(val:any)
  {
    return this.http.post(this.PhotoUrl + '/SaveFile/',val);
  }

  getAllDepartmentNames():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIUrl +'/department/');
  }
  
  getWhatsup(mobileNumber:any,Message:any) : Observable<any[]>
  {
    const data = { phone_number: mobileNumber, message: Message };
    return this.http.post<any[]>(this.APIUrl +'/whatsUp/',data);
  }
}
