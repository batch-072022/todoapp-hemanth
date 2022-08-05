import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:222,firstname:"hemanth",lastname:"reddy",email:"hmanth@gmail.com"},
    {id:223,firstname:"nethra",lastname:"nethra",email:"nethra@gmail.com"},
    {id:223,firstname:"Sai",lastname:"krishnna",email:"sai@gmail.com"}
  ];

  deleteUsers(){
    alert("Successfully Deleted");
  }
}
