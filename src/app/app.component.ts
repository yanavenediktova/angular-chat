import { Component } from "@angular/core";

import { ChatExampleData } from "./data/chat-example-data";
import { MessagesService } from "./message/messages.service";
import { ThreadsService } from "./thread/threads.service";
import { UsersService } from "./user/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService
  ) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
