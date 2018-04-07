import { Component } from '@angular/core';
import { Router }  from '@angular/router';  

@Component ({
   selector: 'my-app',
   templateUrl: './user.component.html',
})
export   class   UserComponent  {

    constructor(private _router: Router){} 

    onBack(): void { 
        
        this._router.navigate(['/login']); 
     } 
}