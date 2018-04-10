import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'
import { forEach } from '@angular/router/src/utils/collection';
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http,private route:Router) { }
 success:boolean=false;
  Data=[];
     call = function() {
    this.http.get('http://localhost:5555/Data').subscribe(
      (res:Response)=>{this.Data=res.json();}
      
    )
     
}

check(data){
 
  for(var da of this.Data)
  {
      if(da.UserName===data.username && da.Password===data.password)
      { 
        this.route.navigate(['/home']);
      break;}
    
  }
}

  ngOnInit() {
    this.call();
  }


}
