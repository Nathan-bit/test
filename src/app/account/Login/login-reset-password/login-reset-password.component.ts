import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login-reset-password',
  templateUrl: './login-reset-password.component.html',
  styleUrls: ['./login-reset-password.component.css']
})
export class LoginResetPasswordComponent implements OnInit {

  angForm: any;     //initialisation des variables
  password1: any
  password2: any
  pwd:any

  msg:any | undefined

  UserEmail: any | undefined;

  constructor(private fb: FormBuilder,private dataService: DataServiceService,private router:Router) {
    this.angForm = this.fb.group({
 
      email: ['', [Validators.required,Validators.minLength(8), Validators.email]], // formulaire pour changer le mot de passe : email : passwword : et confirm password
      password: ['', Validators.required],
      cpassword:['',Validators.required]
     
     
 
    });
   }
 
  ngOnInit() {
    
  }
 
  

  postdata(angForm1:NgForm)  //envoi du formualaire
  {     
       this.dataService.checkUserMail(angForm1.value.email.toString().toLowerCase()) // verifier si le mail existe dans la base
       .subscribe(data=>{   
         let t=data[0]?.email
       
        if(t==undefined)   // si non mesage d'erreur  
         {
          this.msg="ce mail n'existe pas"
         
        }
        else  // si le  mail existe on fait une mise a jours de son  mot de passe
         {
             this.dataService.updateuserlogin(angForm1.value.email.toString().toLowerCase(),angForm1.value.password)
             .subscribe( 
               ()=>
               {
            this.router.navigate(['passwordresetsuccessfully']).then(() => {
              window.location.reload();
            });
               }
                        )
           
          
         }
          
       })
         
        
  }
  get email() { return this.angForm.get('email'); }
  get password(){ return this.angForm.get('password')}
  
          Message()//gestion des message d'erreur
          {
            return this.msg;
          }
      


}
 