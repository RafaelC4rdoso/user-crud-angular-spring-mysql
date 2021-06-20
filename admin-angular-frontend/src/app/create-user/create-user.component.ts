import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  userRegister!: String[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserRegister();
  }

  saveUser() {
      for(var i = 0; i < this.userRegister.length; i++) {
        if(this.user.register == this.userRegister[i]) {
          alert("CPF/CNPJ Existentes")
          break
        }
      }
      this.userService.createUser(this.user).subscribe( data => {
      console.log(data)
    },
    error => console.log(error));
    this.goToUserList();
  }

  private getUserRegister() {
    this.userService.getUserRegister().subscribe(data => {
      this.userRegister = data;
    })
}

  goToUserList() {
    this.router.navigate(['/users']);

  }

  onSubmit() {
    this.saveUser()
  }

}
