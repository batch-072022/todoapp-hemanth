import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = {id:111, name:"hemanth" ,

  email:"hemanth@gmail.com"};
  
  
  
  deleteUser(){
  
    alert("Successfully Deleted");
  
  }

}
