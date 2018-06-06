import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../user.model";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const user = new User(
      form.value.email, 
      form.value.password);

    this.isLoading = true;
    this.authService.signup(user);
  }
}
