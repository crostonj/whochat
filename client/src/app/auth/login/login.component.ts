import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../user.model";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const user = new User(
      form.value.email, 
      form.value.password);
      
    this.isLoading = true;
    this.authService.login(user);
  }
}
