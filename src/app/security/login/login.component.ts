import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor
    (private authService: LoginServiceService,
      private storageService: StorageServiceService,
      private router: Router
    ) { }

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[] = [];
  username: string = ''

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.username = this.storageService.getUser().userName;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log("Role---- -- -- ", data)
        this.reloadPage();
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        const user = this.storageService.getUser();
        this.username = this.storageService.getUser().userName;
        console.log("user name-----", this.username)
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
