import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
const SECONDS: number = 1000;
const MINUTES: number = SECONDS * 60;
const HOURS: number = MINUTES * 60;
const DAYS: number = HOURS * 24;

@Pipe({
  name: "fromNow",
})
export class FromNowPipe implements PipeTransform {
  formatTime(date: Date): string {
    const hours: string = this.padZero(date.getHours());
    const minutes: string = this.padZero(date.getMinutes());

    return `${hours}:${minutes}`;
  }
  padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
  transform(value: Date, ...args: unknown[]): string {
    let elapsedMilli = Date.now() - value.valueOf();
    let currentTime: Date = new Date();

    return this.formatTime(currentTime);
  }
}
