import { Component, OnInit, Input } from "@angular/core";

import { Thread } from "../thread/thread.model";
import { ThreadsService } from "../thread/threads.service";

@Component({
  selector: "app-chat-thread",
  templateUrl: "./chat-thread.component.html",
  styleUrls: ["./chat-thread.component.scss"],
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  selected = false;

  constructor(public threadsService: ThreadsService) {}

  ngOnInit(): void {
    /*
     Тут можно использовать async pipe. Я вижу ты уже юзала его в другом компоненте
     */
    this.threadsService.currentThread.subscribe((currentThread: Thread) => {
      this.selected =
        currentThread && this.thread && currentThread.id === this.thread.id;
    });
  }

  clicked(event: Event): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
