import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:Http,private route:Router) { }
  id:number;
  private headers=new Headers({'content-Type':'application/json'})
  Data=[];
     fatchData = function() {
    this.http.get('http://localhost:5555/Data').subscribe(
      (res:Response)=>{this.Data=res.json();}
    )
}

deleteUser(id){
  if(confirm("Are U Sure?")){
    const url=`${"http://localhost:5555/Data"}/${id}`;
    return this.http.delete(url,{headers:this.headers}).toPromise()
    .then(()=>{this.fatchData();})
  }
}

logout(){
  this.route.navigate(['/login']);
}
  ngOnInit() {
   // this.fatchData();
  }

}
