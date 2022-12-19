import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname=''
  pswd=''

  loginForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  uname1=''
  email1=''
  pswd1=''

  registerForm=this.fb.group({
    uname1:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email1:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })



  constructor(private ds:DataservicesService,private router:Router,private fb:FormBuilder) {}

  ngOnInit(): void {
    
  }

  login(){
    var uname = this.loginForm.value.uname;

    var pswd = this.loginForm.value.pswd;

    if(this.loginForm.value){
      const result = this.ds.login(uname,pswd)
    if(result){
      this.router.navigateByUrl('index')
    }
    else{
      alert('invalid')
    }

    }else{
      alert('invalid')
    }

      

  }

  register(){
    let uname1 = this.registerForm.value.uname1;

    let pswd1 = this.registerForm.value.pswd1;

    let Email1 = this.registerForm.value.email1;

    if(this.registerForm.value){

      const result = this.ds.register(uname1,pswd1,Email1)

    if(result){
      
      alert('register successful')
      alert('Swap to back for Login')
    
    }
    else{
      alert('register failed');
    }

    }

    


  }

}
