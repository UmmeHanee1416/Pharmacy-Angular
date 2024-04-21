import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(private router: Router) { }

  public getToken(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userToken = JSON.parse(user)
      return userToken.jwtToken;
    }

    return {};
  }

  public saveUser(allData: any): void {
    window.sessionStorage.removeItem("auth-user");
    window.sessionStorage.setItem("auth-user", JSON.stringify(allData));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userData = JSON.parse(user);
      console.log("Saiful --",JSON.parse(user))
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(userData.jwtToken);
      console.log("decodedToken --",decodedToken)
// Other functions
      const expirationDate = helper.getTokenExpirationDate(userData.jwtToken);
      console.log("expirationDate --",expirationDate)
      const isExpired = helper.isTokenExpired(userData.jwtToken);
      console.log("isExpired --",isExpired)

      return decodedToken;
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem( 'auth-user');
    if (user) {
      this.router.navigateByUrl("/dashboard");
      return true;
    } else {
      this.router.navigateByUrl("");
      return false;
    }
  }
}
