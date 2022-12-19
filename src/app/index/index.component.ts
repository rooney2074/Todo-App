import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  show=''
  task=''
  uname=''

  user=''

  uname1=''
  task1:any


  constructor(private ds:DataservicesService,private router:Router) {
    this.user=this.ds.currentuser
    this.uname1=this.ds.currentuser
    
    this.task1=this.ds.getTask(this.uname1)
    console.log(this.task1);
    
  }

  ngOnInit(): void {
    
    
  }
  add(){

    var task = this.task
    var uname = this.uname

    const result = this.ds.add(task,uname);

    if(result){
      alert('task added');
    }else{
      alert('Enter your name');
    }




    

  }
  delete(){
   var user = this.user

const result = this.ds.logout(user);

if(result){
  alert('task removed successfully')
}else{
  alert('falied')
}


  }
  logout(){
    

  }

}
