import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  currentuser=''


  constructor() { 
    // this.getDetails();
  }


  saveDetails(){
    if(this.Userdetails){
      localStorage.setItem('Database',JSON.stringify(this.Userdetails))
    }
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.Userdetails))
    }
  }

  getDetails(){
    if(this.Userdetails){
      this.Userdetails=JSON.parse(localStorage.getItem('Database')|| '')
    }
    if(this.currentuser){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser')|| '')
    }
  }

  Userdetails:any={
    Rony:{username:'Rony',password:1000,Email:'rony47official@gmail.com',task:[]}
  }


  login(uname:any,pswd:any){
    let Userdetails = this.Userdetails
    if(uname in Userdetails){
      if(pswd==Userdetails[uname]['password']){
        this.currentuser=Userdetails[uname]['username']
        this.saveDetails();
        return true;
      }else{
        alert('invalid Password')
        return false;
      }
    }else{
      alert('invalid Username')
      return false;
    }

  }

  register(uname1:any,pswd1:any,Email1:any){
    let Userdetails = this.Userdetails
    if(uname1 in Userdetails){
      return false;
    }
    else{
      Userdetails[uname1]={
        username:uname1,
        password:pswd1,
        Email:Email1,
        task:[]

      }
      console.log(Userdetails);
      this.saveDetails();
      return true;
    }

  }

  add(task:any,uname:any){
    let Userdetails = this.Userdetails

    if(uname in Userdetails){
      Userdetails[uname]['task'].push({
        Task : task
      })
      console.log(Userdetails)
      console.log(localStorage)
      this.saveDetails();
      return true;

    }else{
      return false;
    }
  }
  delete(user:any){


    this.Userdetails[user]['task'].pop({})
    return true;
  }

  getTask(uname1:any){
    return this.Userdetails[uname1]['task']
  }
}


