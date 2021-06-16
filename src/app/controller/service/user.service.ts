import { SecurityService } from "./security.service";
import { AppRoutingModule } from "./../../app-routing.module";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _User: User;
  private _Users: Array<User>;
  private UrlBase = "http://localhost:8036/Gmao/User-api";

  get User(): User {
    if (this._User == null) {
      this._User = new User();
    }
    return this._User;
  }

  set User(value: User) {
    this._User = value;
  }

  get Users(): Array<User> {
    if (this._Users == null) {
      this._Users = new Array<User>();
    }
    return this._Users;
  }

  set Users(value: Array<User>) {
    this._Users = value;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private securityService: SecurityService
  ) {}

  isconnected() {
    this.http
      .get(
        this.UrlBase +
          "/connected/" +
          this.User.login +
          "/pswrd/" +
          this.User.password
      )
      .subscribe((data) => {
        if (data === 2) {
          console.log("succes");
        } else {
          console.log("failed");
        }
      });
  }

  seConnecter(username: string, password: string) {
    this.http
      .get<User>(this.UrlBase + "/login/" + username + "/pswrd/" + password)
      .subscribe((data) => {
        if (data) {
          this._User = data;
        }
      });
    this.redirect(this._User.role);
  }

  redirect(role: string) {
    switch (role) {
      case "admin":
        this.router.navigate(["/admin"]);
        break;
      case "chef-equipe":
        this.router.navigate(["/chef-equipe"]);
        break;
      case "chef-stock":
        this.router.navigate(["/None"]);
        break;
      case "collaborateur":
        this.router.navigate(["/collaborateur"]);
        break;
      default:
        break;
    }
  }
}
