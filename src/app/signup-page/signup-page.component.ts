import { Component, OnInit } from "@angular/core";
import { HttpResponse } from "@angular/common/http";

import { Router } from "@angular/router";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.scss"],
})
export class SignupPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSignupButtonClicked(email: string, password: string) {
    this.router.navigate(["/chats"]);
  }
}
