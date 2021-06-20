import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  user: User = new User();
  userRegister!: String[];

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUserRegister()
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit() {
    for(var i = 0; i < this.userRegister.length; i++) {
      if(this.user.register == this.userRegister[i]) {
        alert("CPF/CNPJ Existentes")
        throwError;
        break;
      }
    }
    this.userService.updateUser(this.id, this.user).subscribe( data => {
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  private getUserRegister() {
    this.userService.getUserRegister().subscribe(data => {
      this.userRegister = data;
    })
  }
}
