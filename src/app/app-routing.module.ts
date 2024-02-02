import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { ChatPageComponent } from "./chat-page/chat-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/registration", pathMatch: "full" },
  { path: "registration", component: SignupPageComponent },
  { path: "chats", component: ChatPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
