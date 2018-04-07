import { Component } from '@angular/core';
import { Router }  from '@angular/router';  

@Component ({
   selector: 'my-app',
   templateUrl: './login.component.html',
})
export   class   LoginComponent  {

    constructor(private _router: Router){} 
    onBack(): void { 
        
        this._router.navigate(['/home']); 
     } 

     onCall(): void { 
        
        this._router.navigate(['/user']); 
     } 

     
}