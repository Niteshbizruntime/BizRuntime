import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:Http) { }

  success:boolean=false;
  Data:object=[];
     addUser(data) {
       this.Data={"UserName":data.username,
                  "FirstName":data.firstname,
                  "LastName":data.lastname,
                  "Gender":data.gender,
                  "DOB":data.dob,
                  "Phone":data.phone,
                  "Email":data.email,
                  "Password":data.password}
    this.http.post('http://localhost:5555/Data/',this.Data).subscribe(
      (res:Response)=>{this.success=true;}
    )
}


  ngOnInit() {
  }

}
