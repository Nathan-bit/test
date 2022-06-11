import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { DataServiceService } from './data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';

 
  loginbtn:boolean;
  logoutbtn:boolean;


  constructor(private dataService: DataServiceService,private router : Router, private httpClient : HttpClient) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
      
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
     this.loginbtn=true;
     this.logoutbtn=false
    }
 
 
}

  ngOnInit():void {
  
         this.dataService.getUser(this.dataService.getToken())
         .pipe(map(res=>res))
         .subscribe(data=> {
          let auth=data[0].Authorization;
          let tel=data[0].Telechargement;
          if(this.dataService.getAuth()!=auth )
              {
                this.dataService.deleteAuth();
                this.dataService.setAuth(auth);  
                   if(auth == '1')
                   {
                    this.router.navigate(['/home']).then(()=>{
                      window.location.reload()
                    })
                   }else{
                    this.router.navigate(['/NotAuthorizedMessage']).then(()=>{
                      window.location.reload();
                    })
                   }
              
              }  
          if(this.dataService.getTel()!=tel)  
          {
             this.dataService.deleteTel();
             this.dataService.setTel(tel)
            

          }
         })


  }



 
private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
}
logout()    //apres deconnection supprimer toutes les donnees stockés dans localstorage
{ 
  this.dataService.deleteToken();
  this.dataService.deleteAuth();
  this.dataService.deleteMail();
  this.dataService.deleteStatus();
  this.dataService.deleteTel();
  this.dataService.clearAll();
  window.location.href = window.location.href;
}
         
}
 
 
  

