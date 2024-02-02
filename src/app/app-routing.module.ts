import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { ChatPageComponent } from "./chat-page/chat-page.component";

// Было бы более правильно вынести строки роутинга в enum.
// Вообще, если какое-то элементарное значение есть в коде, то лучше обернуть её в переменную/enum с соответствующим названием
const routes: Routes = [
  { path: "", redirectTo: "/registration", pathMatch: "full" },
  { path: "registration", component: SignupPageComponent }, // Не забывай про guard'ы. Они ограничат доступ к странице, если пользователь не залогинен и наоборот, не пустит на страницу регистрации если юзер уже зареган
  { path: "chats", component: ChatPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
